import React, { useEffect, useRef } from "react";
import { calculateSunDirection } from "./config/utils";
import { dayNightShader } from "./config/dayNightShader";
import { TextureLoader, ShaderMaterial } from "three";
import _ from "lodash";
import Globe from "globe.gl";

const OPACITY = 1;
const base = import.meta.env.BASE_URL || "/";

type Port = {
  port: string;
  lat: number;
  lng: number;
  type: "from" | "to";
};

interface EarthLineProps {
  fromData: any[];
  toData: any[];
  routeData: any[];
}

// Helper function to calculate great circle distance in radians
function greatCircleDistance(
  start: { lat: number; lng: number },
  end: { lat: number; lng: number }
): number {
  const lat1 = (start.lat * Math.PI) / 180;
  const lat2 = (end.lat * Math.PI) / 180;
  const deltaLat = ((end.lat - start.lat) * Math.PI) / 180;
  const deltaLng = ((end.lng - start.lng) * Math.PI) / 180;

  const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) *
    Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
  return c; // Returns distance in radians
}

// Helper function to find the shortest great circle path avoiding poles
function getGreatCirclePath(
  start: { lat: number; lng: number },
  end: { lat: number; lng: number }
) {
  // Normalize longitudes to [-180, 180]
  const normalizeLng = (lng: number) => ((lng + 540) % 360) - 180;
  
  const startLng = normalizeLng(start.lng);
  const endLng = normalizeLng(end.lng);
  
  // Calculate the shortest longitude difference
  let lngDiff = endLng - startLng;
  if (Math.abs(lngDiff) > 180) {
    lngDiff = lngDiff > 0 ? lngDiff - 360 : lngDiff + 360;
  }
  
  const finalEndLng = startLng + lngDiff;
  
  return {
    start: { lat: start.lat, lng: startLng },
    end: { lat: end.lat, lng: finalEndLng }
  };
}

const EarthLine: React.FC<EarthLineProps> = ({ fromData, toData, routeData }) => {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!fromData || !toData || !routeData) {
      return; // Wait for data to be loaded
    }

    let material: ShaderMaterial | null = null;
    let timer: ReturnType<typeof setInterval>;

    // Load only textures since data is passed as props
    Promise.all([
      new TextureLoader().loadAsync(base + "img/2k_earth_day.jpg"),
      new TextureLoader().loadAsync(base + "img/2k_earth_night.jpg"),
    ]).then(([dayTexture, nightTexture]) => {
      // Initialize custom shader material for day/night effect
      material = new ShaderMaterial({
        uniforms: {
          dayTexture: { value: dayTexture },
          nightTexture: { value: nightTexture },
          sunDirection: { value: calculateSunDirection() },
        },
        vertexShader: dayNightShader.vertexShader,
        fragmentShader: dayNightShader.fragmentShader,
        lights: false,
      });

      // Initialize the globe instance
      const myGlobe = new Globe(globeRef.current!)
        .globeMaterial(material)
        .backgroundImageUrl(base + "img/night-sky.png")
        .showAtmosphere(true)
        .atmosphereAltitude(0.25);

      // Globe controls setup
      const controls = myGlobe.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.3;
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;

      // Data preprocessing for ports
      const fromPorts: Port[] = fromData.map((item: any) => ({
        port: item.name,
        lat: item.lat,
        lng: item.lng,
        type: "from",
      }));

      const toPorts: Port[] = toData.map((item: any) => ({
        port: item.idc,
        lat: item.lat,
        lng: item.lng,
        type: "to",
      }));

      // Map ports for quick lookup
      const fromMap = new Map(fromPorts.map((p: any) => [p.port, p]));
      const toMap = new Map(toPorts.map((p: any) => [p.port, p]));

      // Build route data with port info
      const routes: any[] = [];
      routeData.forEach((item: any) => {
        const from = fromMap.get(item.fromPort);
        const to = toMap.get(item.toPort);
        if (from && to) {
          routes.push({
            srcPort: item.fromPort,
            dstPort: item.toPort,
            srcPortInfo: { lat: from.lat, lng: from.lng },
            dstPortInfo: { lat: to.lat, lng: to.lng },
            ...item,
          });
        }
      });

      // Group and sum cost/PO count by port
      const fromPOCountCostGroup = _.groupBy(routes, "srcPort");
      const toPOCountCostGroup = _.groupBy(routes, "dstPort");
      const fromPortTotals = _.mapValues(fromPOCountCostGroup, (items) => ({
        totalCost: Math.round(_.sumBy(items, "cost")),
        totalPOCount: Math.round(_.sumBy(items, "poCount")),
      }));
      const toPortTotals = _.mapValues(toPOCountCostGroup, (items) => ({
        totalCost: Math.round(_.sumBy(items, "cost")),
        totalPOCount: Math.round(_.sumBy(items, "poCount")),
      }));

      const POINT_ALTITUDE = 0.03;

      // Filter ports with totalCost > 0
      const filteredPorts = [...fromPorts, ...toPorts].filter((d: any) => {
        const totals =
          d.type === "from"
            ? fromPortTotals[d.port]
            : d.type === "to"
            ? toPortTotals[d.port]
            : undefined;
        return totals && totals.totalCost > 0;
      });

      // Configure globe arcs and points
      myGlobe
        .pointOfView({ lat: 39.6, lng: -98.5, altitude: 2 })
        .arcLabel(
          (d: any) => `
            <div style="
              background: rgba(24,28,47,0.96);
              color: #fff;
              padding: 12px 20px;
              border-radius: 12px;
              box-shadow: 0 4px 24px 0 #0008;
              font-size: 1.08em;
              font-weight: 500;
              letter-spacing: 0.5px;
              text-shadow: 0 2px 8px #000a;
              border: 1.5px solid #00ffe7;
              min-width: 180px;
              text-align: left;
              line-height: 1.6;
            ">
              <div style="font-size:1.15em;font-weight:bold;margin-bottom:4px;">
                <span style="color:#00ffe7;">${d.srcPort}</span>
                <span style="margin: 0 8px;font-size:1.1em;">→</span>
                <span style="color:#ff0080;">${d.dstPort}</span>
              </div>
              <div>
                <span style="color:#ff8c00;">POCount: </span>
                <span style="font-weight:bold;">${d.poCount}</span>
              </div>
              <div>
                <span style="color:#ffd700;">Cost: </span>
                <span style="font-weight:bold;">${d.cost.toLocaleString()}</span>
              </div>
            </div>
          `
        )
        // Use great circle path for realistic routes
        .arcStartLat((d: any) => {
          const path = getGreatCirclePath(
            { lat: +d.srcPortInfo.lat, lng: +d.srcPortInfo.lng },
            { lat: +d.dstPortInfo.lat, lng: +d.dstPortInfo.lng }
          );
          return path.start.lat;
        })
        .arcStartLng((d: any) => {
          const path = getGreatCirclePath(
            { lat: +d.srcPortInfo.lat, lng: +d.srcPortInfo.lng },
            { lat: +d.dstPortInfo.lat, lng: +d.dstPortInfo.lng }
          );
          return path.start.lng;
        })
        .arcEndLat((d: any) => {
          const path = getGreatCirclePath(
            { lat: +d.srcPortInfo.lat, lng: +d.srcPortInfo.lng },
            { lat: +d.dstPortInfo.lat, lng: +d.dstPortInfo.lng }
          );
          return path.end.lat;
        })
        .arcEndLng((d: any) => {
          const path = getGreatCirclePath(
            { lat: +d.srcPortInfo.lat, lng: +d.srcPortInfo.lng },
            { lat: +d.dstPortInfo.lat, lng: +d.dstPortInfo.lng }
          );
          return path.end.lng;
        })
        // Increase resolution for smoother arcs
        .arcCurveResolution(128)
        .arcAltitude((d: any) => {
          // Calculate great circle distance between ports
          const distance = greatCircleDistance(
            { lat: +d.srcPortInfo.lat, lng: +d.srcPortInfo.lng },
            { lat: +d.dstPortInfo.lat, lng: +d.dstPortInfo.lng }
          );
          
          // 调整高度设置，确保弧线始终在地球表面之上
          const minAltitude = 0.2;  // 最小高度，短距离连线
          const maxAltitude = 0.3;  // 最大高度，长距离连线
          
          // 根据大圆距离计算标准化距离
          const normalizedDistance = distance / Math.PI;
          
          // 使用更平滑的曲线函数
          const baseAltitude = minAltitude + (maxAltitude - minAltitude) * 
            (0.5 + 0.5 * Math.sin(normalizedDistance * Math.PI - Math.PI/2));
          
          // 为非常短的距离设置最小可见高度
          if (distance < 0.05) { // 距离小于约3度
            return Math.max(0.01, minAltitude);
          }
          
          // 为跨洋航线适当增加高度，但保持合理范围
          if (distance > Math.PI * 0.4) { // 距离大于72度
            return Math.min(baseAltitude * 1.1, maxAltitude);
          }
          
          return baseAltitude;
        })
        // 完全移除自动缩放，使用我们的自定义高度计算
        .arcAltitudeAutoScale(0) // 完全禁用自动缩放
        // Arc animation and color
        .arcDashLength(0.25)
        .arcDashGap(1)
        .arcDashInitialGap(() => Math.random())
        .arcDashAnimateTime(2000)
        .arcColor(() => [
          `rgba(0, 255, 0, ${OPACITY})`,
          `rgba(255, 0, 0, ${OPACITY})`,
        ])
        .arcsTransitionDuration(0)
        // Point settings
        .pointColor(() => "orange")
        .pointAltitude(POINT_ALTITUDE)
        .pointRadius(0.06)
        .pointsMerge(true)
        // Highlight arc on hover
        .onArcHover((arc) => {
          myGlobe.arcColor((d: any) =>
            arc && d === arc
              ? ["rgba(255,255,0,0.95)", "rgba(255,0,128,0.95)"]
              : [`rgba(0, 255, 0, ${OPACITY})`, `rgba(255, 0, 0, ${OPACITY})`]
          );
        })
        .pointsData(filteredPorts)
        .arcsData(routes);

      // Configure port labels
      myGlobe
        .labelsData(filteredPorts)
        .labelLat((d: any) => d.lat)
        .labelLng((d: any) => d.lng)
        .labelText((d: any) => {
          const totals =
            d.type === "from"
              ? fromPortTotals[d.port]
              : d.type === "to"
              ? toPortTotals[d.port]
              : { totalCost: 0 };
          return `${d.port}  (${totals.totalCost})`;
        })
        // Label size based on total cost
        .labelSize((d: any) => {
          const totals =
            d.type === "from"
              ? fromPortTotals[d.port]
              : d.type === "to"
              ? toPortTotals[d.port]
              : { totalCost: 1 };
          return Math.max(
            0.7,
            Math.min(2.5, Math.sqrt(totals.totalCost) * 4e-4)
          );
        })
        // Dot radius based on total cost
        .labelDotRadius((d: any) => {
          const totals =
            d.type === "from"
              ? fromPortTotals[d.port]
              : d.type === "to"
              ? toPortTotals[d.port]
              : { totalCost: 1 };
          const minRadius = 0.12;
          const maxRadius = 1;
          const scale = Math.sqrt(totals.totalCost) * 2e-3;
          return Math.max(minRadius, Math.min(maxRadius, scale));
        })
        // Label color by port type
        .labelColor((d: any) =>
          d.type === "from" ? "#00ffe7" : "rgba(255, 165, 0, 0.75)"
        )
        .labelResolution(3)
        .labelAltitude(POINT_ALTITUDE + 0.01)
        .labelDotOrientation("top")
        .labelIncludeDot(true)
        // Custom HTML label tooltip
        .labelLabel((d: any) => {
          const totals =
            d.type === "from"
              ? fromPortTotals[d.port]
              : d.type === "to"
              ? toPortTotals[d.port]
              : { totalCost: 0, totalPOCount: 0 };
          return `
            <div style="
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 4px;
              padding: 10px 18px;
              border-radius: 14px;
              background: #181c2f;
              box-shadow: 0 0 16px 4px #00ffe7cc, 0 0 32px 8px #ff008088;
              font-size: 1.08em;
              font-weight: bold;
              color: #fff;
              letter-spacing: 1px;
              text-shadow: 0 2px 8px #000a, 0 0 8px #00ffe7;
              border: 2px solid #00ffe7;
            ">
              <div>
              <span style="color:#00ffe7;">Port：</span>
              <span style="font-weight:bold;">${d.port + ""}</span>
              </div>
              <div>
              <span style="color:#ffd700;">Cost：</span>
              <span style="font-weight:bold;">${totals.totalCost + ""}</span>
              </div>
              <div>
              <span style="color:#ff8c00;">PO Count：</span>
              <span style="font-weight:bold;">${totals.totalPOCount + ""}</span>
              </div>
            </div>
        `;
        })
        .labelsTransitionDuration(0);

      // Add auto-rotation
      myGlobe.controls().autoRotate = true;
      myGlobe.controls().autoRotateSpeed = 0.5;

      // Pause rotation on mouse enter, resume on mouse leave
      if (globeRef.current) {
        globeRef.current.addEventListener("mouseenter", () => {
          myGlobe.controls().autoRotate = false;
        });
        globeRef.current.addEventListener("mouseleave", () => {
          myGlobe.controls().autoRotate = true;
        });
      }

      // Update sun direction every minute for day/night shader
      timer = setInterval(() => {
        material!.uniforms.sunDirection.value.copy(calculateSunDirection());
      }, 60_000);
    });

    // Cleanup on unmount
    return () => {
      clearInterval(timer);
      if (globeRef.current) globeRef.current.innerHTML = "";
    };
  }, [fromData, toData, routeData]);

  return (
    <div
      ref={globeRef}
      style={{
        width: "100vw",
        height: "100vh",
        background:
          "radial-gradient(ellipse at center, #10131a 0%, #05070d 100%)",
        overflow: "hidden",
      }}
    />
  );
};

export default EarthLine;

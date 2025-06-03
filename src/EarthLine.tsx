import React, { useEffect, useRef, useState } from "react";
import { calculateSunDirection, getTotals } from "./config/utils";
import { dayNightShader } from "./config/dayNightShader";
import { renderArcTooltip } from "./components/ArcTooltipRenderer";
import { renderPortTooltip } from "./components/PortTooltipRenderer";
import { useAppSelector } from "./redux/hook";
import { TextureLoader, ShaderMaterial } from "three";
import _ from "lodash";
import * as THREE from "three";
import Globe from "globe.gl";
import styled from "styled-components";

const GlobeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: radial-gradient(ellipse at center, #10131a 0%, #05070d 100%);
  overflow: hidden;
`;

const base = import.meta.env.BASE_URL || "/";
const LABEL_BASE_ALT = 0;
const LABEL_STEP_ALT = 0.1;
const LABEL_DIST_THRESHOLD = 4;
const LABEL_MAX_LAYER = 4;

interface EarthLineProps {
  fromData: any[];
  toData: any[];
  routeData: any[];
  isDashboardCollapsed: boolean;
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

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(deltaLng / 2) *
      Math.sin(deltaLng / 2);
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
    end: { lat: end.lat, lng: finalEndLng },
  };
}

const EarthLine: React.FC<EarthLineProps> = ({
  fromData,
  toData,
  routeData,
  isDashboardCollapsed,
}) => {
  const globeRef = useRef<HTMLDivElement>(null);
  const globeInstanceRef = useRef<any>(null);
  const materialRef = useRef<ShaderMaterial | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [globeReady, setGlobeReady] = useState(false);

  const selectedPorts = useAppSelector((state) => state.ports.selectedPorts);

  // Update globe position when dashboard collapse state changes
  useEffect(() => {
    if (globeInstanceRef.current && globeRef.current) {
      const renderer = globeInstanceRef.current.renderer();
      const container = globeRef.current;
      const containerWidth = container.clientWidth;

      if (isDashboardCollapsed) {
        // Center the globe when dashboard is collapsed - use transform for smooth transition
        renderer.domElement.style.transform = "translateX(0%)";
      } else {
        // Move the globe 20% to the left when dashboard is expanded
        renderer.domElement.style.transform = `translateX(-${
          containerWidth * 0.1
        }px)`;
      }
    }
  }, [isDashboardCollapsed]);

  // Initialize globe only once when port data is available
  useEffect(() => {
    if (globeInstanceRef.current) {
      return; // Wait for port data or prevent re-initialization
    }

    // Load textures and initialize globe
    Promise.all([
      new TextureLoader().loadAsync(base + "img/2k_earth_day.jpg"),
      new TextureLoader().loadAsync(base + "img/2k_earth_night.jpg"),
    ])
      .then(([dayTexture, nightTexture]) => {
        try {
          // Initialize custom shader material for day/night effect
          materialRef.current = new ShaderMaterial({
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
          if (!globeRef.current) {
            console.error("Globe container ref is null");
            return;
          }

          globeInstanceRef.current = new Globe(globeRef.current)
            .globeMaterial(materialRef.current)
            .backgroundImageUrl(base + "img/night-sky.png")
            .showAtmosphere(true)
            .atmosphereAltitude(0.25)
            .pointOfView({ lat: 39.6, lng: -98.5, altitude: 2 });

          const renderer = globeInstanceRef.current.renderer();
          const container = globeRef.current;
          const containerWidth = container.clientWidth;

          // Set initial position and styling
          renderer.domElement.style.position = "relative";
          renderer.domElement.style.left = "0px";
          renderer.domElement.style.transition = "transform 0.3s ease-out";

          renderer.domElement.style.transform = `translateX(-${
            containerWidth * 0.1
          }px)`;

          // Globe controls setup
          const controls = globeInstanceRef.current.controls();
          controls.autoRotate = true;
          controls.autoRotateSpeed = 0.3;
          controls.enableDamping = true;
          controls.dampingFactor = 0.05;

          // Pause rotation on mouse enter, resume on mouse leave
          globeRef.current.addEventListener("mouseenter", () => {
            if (globeInstanceRef.current) {
              globeInstanceRef.current.controls().autoRotate = false;
            }
          });
          globeRef.current.addEventListener("mouseleave", () => {
            if (globeInstanceRef.current) {
              globeInstanceRef.current.controls().autoRotate = true;
            }
          });

          // Update sun direction every minute for day/night shader
          timerRef.current = setInterval(() => {
            if (materialRef.current) {
              materialRef.current.uniforms.sunDirection.value.copy(
                calculateSunDirection()
              );
            }
          }, 120_000);

          setGlobeReady(true);
        } catch (initError) {
          console.error("Globe initialization error:", initError);
        }
      })
      .catch((error) => {
        console.error("Globe texture loading failed:", error);
      });

    // Cleanup on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (globeRef.current) {
        globeRef.current.innerHTML = "";
      }
      globeInstanceRef.current = null;
      materialRef.current = null;
    };
  }, []); // Only depend on port data, not route data

  // Update route data separately when routeData changes or globe is ready
  useEffect(() => {
    if (!globeInstanceRef.current) {
      console.log("Globe not ready yet, skipping data update");
      return;
    }

    if (!fromData || fromData.length === 0 || !toData || toData.length === 0) {
      console.log("Port data not ready yet, skipping data update");
      return;
    }

    // If no routeData, clear existing data but keep the globe
    if (!routeData || routeData.length === 0) {
      console.log("Clearing globe data due to empty routeData");
      const myGlobe = globeInstanceRef.current;
      myGlobe.arcsData([]).labelsData([]);
      return;
    }

    const myGlobe = globeInstanceRef.current;

    // Map ports for quick lookup
    const fromMap = new Map(
      fromData.map((item: any) => [
        item.name,
        {
          port: item.name,
          lat: item.lat,
          lng: item.lng,
          type: "from",
        },
      ])
    );
    const toMap = new Map(
      toData.map((item: any) => [
        item.idc,
        {
          port: item.idc,
          lat: item.lat,
          lng: item.lng,
          type: "to",
        },
      ])
    );

    // Build route data with port info
    const routes: any[] = [];
    let matchedRoutes = 0;
    let unmatchedRoutes = 0;

    routeData.forEach((item: any) => {
      const from = fromMap.get(item.fromPort); // fromPort是字符串
      const to = toMap.get(item.toPort); // toPort是数字，需要匹配idc

      // 检查是否应该显示这条路线
      const shouldShowRoute =
        selectedPorts.includes(item.fromPort) ||
        selectedPorts.includes(item.toPort.toString());

      if (from && to && shouldShowRoute) {
        routes.push({
          srcPort: item.fromPort,
          dstPort: item.toPort,
          srcPortInfo: { lat: from.lat, lng: from.lng },
          dstPortInfo: { lat: to.lat, lng: to.lng },
          ...item,
        });
        matchedRoutes++;
      } else if (!from || !to) {
        unmatchedRoutes++;
        // Debug unmatched routes
        if (!from) console.warn(`From port not found: ${item.fromPort}`);
        if (!to) console.warn(`To port not found: ${item.toPort}`);
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

    // Combine all ports and filter those with totalCost > 0
    const allPorts = [
      ...Array.from(fromMap.values()),
      ...Array.from(toMap.values()),
    ];
    const filteredPorts = allPorts.filter((d: any) => {
      const totals =
        d.type === "from"
          ? fromPortTotals[d.port]
          : d.type === "to"
          ? toPortTotals[d.port]
          : undefined;
      return totals && totals.totalCost > 0;
    });

    const labelAltitudes: Record<string, number> = {};

    const sortedPorts = [...filteredPorts].sort((a, b) => {
      const ta = getTotals(a, fromPortTotals, toPortTotals).totalCost;
      const tb = getTotals(b, fromPortTotals, toPortTotals).totalCost;
      return tb - ta;
    });

    for (let i = 0; i < sortedPorts.length; i++) {
      const p = sortedPorts[i];
      let layer = 0;
      for (let j = 0; j < i; j++) {
        const q = sortedPorts[j];
        const dist =
          (greatCircleDistance(
            { lat: p.lat, lng: p.lng },
            { lat: q.lat, lng: q.lng }
          ) *
            180) /
          Math.PI;
        if (
          dist < LABEL_DIST_THRESHOLD &&
          labelAltitudes[q.port] / LABEL_STEP_ALT === layer
        ) {
          layer++;
          if (layer > LABEL_MAX_LAYER) break;
        }
      }
      // 第一层直接为 0，后续层级递增
      labelAltitudes[p.port] =
        layer === 0 ? 0 : LABEL_BASE_ALT + layer * LABEL_STEP_ALT;
    }

    // 主业务连线数据 - 优化性能和视觉效果
    const arcRoutes = routes
      .map((d) => {
        // Use great circle path for realistic routes
        const path = getGreatCirclePath(
          { lat: +d.srcPortInfo.lat, lng: +d.srcPortInfo.lng },
          { lat: +d.dstPortInfo.lat, lng: +d.dstPortInfo.lng }
        );
        const distance = greatCircleDistance(
          { lat: +d.srcPortInfo.lat, lng: +d.srcPortInfo.lng },
          { lat: +d.dstPortInfo.lat, lng: +d.dstPortInfo.lng }
        );

        return {
          ...d,
          srcLat: path.start.lat,
          srcLng: path.start.lng,
          dstLat: path.end.lat,
          dstLng: path.end.lng,
          // 添加优化字段
          distance: distance,
          costCategory:
            d.cost > 100000 ? "high" : d.cost > 50000 ? "medium" : "low",
          // 优先级字段用于渲染顺序
          priority: d.cost > 200000 ? 3 : d.cost > 100000 ? 2 : 1,
        };
      })
      .sort((a, b) => b.priority - a.priority); // 按优先级排序，高成本连线优先渲染

    // Configure globe arcs and points
    myGlobe
      .arcLabel((d: any) =>
        renderArcTooltip({
          srcPort: d.srcPort,
          dstPort: d.dstPort,
          poCount: d.poCount,
          cost: d.cost,
        })
      )
      .arcStartLat((d: any) => d.srcLat)
      .arcStartLng((d: any) => d.srcLng)
      .arcEndLat((d: any) => d.dstLat)
      .arcEndLng((d: any) => d.dstLng)
      // Increase resolution for smoother arcs
      .arcCurveResolution(128)
      .arcAltitude((d: any) => {
        // Calculate great circle distance between ports
        const distance = greatCircleDistance(
          { lat: +d.srcPortInfo.lat, lng: +d.srcPortInfo.lng },
          { lat: +d.dstPortInfo.lat, lng: +d.dstPortInfo.lng }
        );

        // 调整高度设置，确保弧线始终在地球表面之上
        const minAltitude = 0.2; // 最小高度，短距离连线
        const maxAltitude = 0.3; // 最大高度，长距离连线

        // 根据大圆距离计算标准化距离
        const normalizedDistance = distance / Math.PI;

        // 使用更平滑的曲线函数
        const baseAltitude =
          minAltitude +
          (maxAltitude - minAltitude) *
            (0.5 + 0.5 * Math.sin(normalizedDistance * Math.PI - Math.PI / 2));

        // 为非常短的距离设置最小可见高度
        if (distance < 0.05) {
          // 距离小于约3度
          return Math.max(0.01, minAltitude);
        }

        // 为跨洋航线适当增加高度，但保持合理范围
        if (distance > Math.PI * 0.4) {
          // 距离大于72度
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
      .arcColor(() => [`rgba(0, 255, 0, 1)`, `rgba(255, 0, 0, 1)`])
      .arcsTransitionDuration(0)
      .arcsData(arcRoutes);
    // Highlight arc on hover
    // .onArcHover((arc: any) => {
    //   myGlobe.arcColor((d: any) =>
    //     arc && d === arc
    //       ? ["rgba(255,255,0,0.95)", "rgba(255,0,128,0.95)"]
    //       : [`rgba(0, 255, 0, 1)`, `rgba(255, 0, 0, 1)`]
    //   );
    // });

    // Configure port labels
    myGlobe
      .labelsData(filteredPorts)
      .labelLat((d: any) => d.lat)
      .labelLng((d: any) => d.lng)
      .labelText((d: any) => {
        const totals = getTotals(d, fromPortTotals, toPortTotals);

        // Format cost with appropriate unit
        const formatCost = (cost: number) => {
          if (cost >= 1e12) {
            return `$${(cost / 1e12).toFixed(2)}T`;
          } else if (cost >= 1e9) {
            return `$${(cost / 1e9).toFixed(2)}B`;
          } else if (cost >= 1e6) {
            return `$${(cost / 1e6).toFixed(2)}M`;
          } else if (cost >= 1e3) {
            return `$${(cost / 1e3).toFixed(2)}K`;
          } else {
            return `$${cost.toFixed(2)}`;
          }
        };

        return `${d.port}\n(${formatCost(totals.totalCost)})`;
      })
      // Label size based on total cost
      .labelSize((d: any) => {
        const totals = getTotals(d, fromPortTotals, toPortTotals);
        // 增加标签大小，提高可读性
        return Math.max(1.0, Math.min(3.0, Math.sqrt(totals.totalCost) * 5e-4));
      })
      // Dot radius based on total cost
      .labelDotRadius((d: any) => {
        const totals = getTotals(d, fromPortTotals, toPortTotals);
        const minRadius = 0.12;
        const maxRadius = 1;
        const scale = Math.sqrt(totals.totalCost) * 2e-3;
        return Math.max(minRadius, Math.min(maxRadius, scale));
      })
      // Label color by port type
      .labelColor((d: any) =>
        d.type === "from" ? "#00ffe7" : "rgba(255, 165, 0, 0.9)"
      )
      .labelResolution(8) // 提高分辨率，从3改为8，使标签更清晰
      .labelAltitude((d: any) => labelAltitudes[d.port] || 0)
      .labelDotOrientation("top")
      .labelIncludeDot(true)
      // Custom HTML label tooltip using styled component
      .labelLabel((d: any) => {
        const totals = getTotals(d, fromPortTotals, toPortTotals);

        return renderPortTooltip({
          port: d.port,
          cost: totals.totalCost,
          poCount: totals.totalPOCount,
          type: d.type,
        });
      })
      .labelsTransitionDuration(0);

    // --- BEGIN: Add vertical lines from earth surface to label dots ---
    let labelLinesGroup: THREE.Group | null = null;
    if (myGlobe.scene().getObjectByName("labelLinesGroup")) {
      labelLinesGroup = myGlobe
        .scene()
        .getObjectByName("labelLinesGroup") as THREE.Group;
      myGlobe.scene().remove(labelLinesGroup);
    }
    labelLinesGroup = new THREE.Group();
    labelLinesGroup.name = "labelLinesGroup";
    const RADIUS = myGlobe.getGlobeRadius ? myGlobe.getGlobeRadius() : 1; // fallback to 1 if not available
    filteredPorts.forEach((d) => {
      const alt = labelAltitudes[d.port] || 0;
      if (alt > 0) {
        // Convert lat/lng to 3D positions
        const latRad = (d.lat * Math.PI) / 180;
        const lngRad = (d.lng * Math.PI) / 180;
        // Surface point
        const r0 = RADIUS;
        const x0 = r0 * Math.cos(latRad) * Math.sin(lngRad);
        const y0 = r0 * Math.sin(latRad);
        const z0 = r0 * Math.cos(latRad) * Math.cos(lngRad);
        // Label dot point (globe.gl altitude is relative to radius)
        const r1 = RADIUS * (1 + alt);
        const x1 = r1 * Math.cos(latRad) * Math.sin(lngRad);
        const y1 = r1 * Math.sin(latRad);
        const z1 = r1 * Math.cos(latRad) * Math.cos(lngRad);
        // Create geometry
        const geometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(x0, y0, z0),
          new THREE.Vector3(x1, y1, z1),
        ]);
        const material = new THREE.LineBasicMaterial({
          color: 0xffa500,
          linewidth: 2,
        });
        const line = new THREE.Line(geometry, material);
        labelLinesGroup.add(line);
      }
    });
    myGlobe.scene().add(labelLinesGroup);
    // --- END: Add vertical lines from earth surface to label dots ---
  }, [routeData, fromData, toData, globeReady, selectedPorts]); // Include port selection states

  return <GlobeContainer ref={globeRef} />;
};

export default EarthLine;

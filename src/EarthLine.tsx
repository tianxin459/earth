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

const EarthLine: React.FC = () => {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let material: ShaderMaterial | null = null;
    let timer: ReturnType<typeof setInterval>;

    // Use relative paths for assets and data to work with GitHub Pages
    // Use relative path for assets (adjust if using Vite or other build tools)
    Promise.all([
      new TextureLoader().loadAsync(base + "img/2k_earth_day.jpg"),
      new TextureLoader().loadAsync(base + "img/2k_earth_night.jpg"),
      fetch(`${base}from.json`).then((res) => res.json()),
      fetch(`${base}to.json`).then((res) => res.json()),
      fetch(`${base}fromToPOCountCost.json`).then((res) => res.json()),
    ]).then(([dayTexture, nightTexture, fromData, toData, routeData]) => {
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

      // Helper to compute shortest arc (not over the pole)
      function shortestArcLatLng(
        start: { lat: number; lng: number },
        end: { lat: number; lng: number }
      ) {
        let lngDiff = end.lng - start.lng;
        if (Math.abs(lngDiff) > 180) {
          if (lngDiff > 0) {
            end = { ...end, lng: end.lng - 360 };
          } else {
            end = { ...end, lng: end.lng + 360 };
          }
        }
        return { start, end };
      }

      // Helper to compute realistic shipping routes (avoiding polar routes)
      function getShippingRoute(
        start: { lat: number; lng: number },
        end: { lat: number; lng: number }
      ) {
        const startLat = start.lat;
        const startLng = start.lng;
        const endLat = end.lat;
        const endLng = end.lng;

        // Normalize longitudes to [-180, 180]
        const normStartLng = ((startLng + 540) % 360) - 180;
        const normEndLng = ((endLng + 540) % 360) - 180;

        // Calculate longitude difference
        let lngDiff = normEndLng - normStartLng;

        // Choose direction that avoids crossing date line unnecessarily
        if (Math.abs(lngDiff) > 180) {
          if (lngDiff > 0) {
            lngDiff = lngDiff - 360;
          } else {
            lngDiff = lngDiff + 360;
          }
        }

        const finalEndLng = normStartLng + lngDiff;

        // Define shipping route waypoints based on ocean regions
        const waypoints = [];

        // Trans-Pacific routes (Asia <-> Americas)
        if (Math.abs(lngDiff) > 120) {
          // Major Pacific crossing
          if (startLat > 20 && endLat > 20) {
            // Northern Pacific route
            waypoints.push(
              { lat: Math.max(startLat, 30), lng: normStartLng + lngDiff * 0.2 },
              { lat: 45, lng: normStartLng + lngDiff * 0.4 },
              { lat: 50, lng: normStartLng + lngDiff * 0.6 },
              { lat: Math.max(endLat, 30), lng: normStartLng + lngDiff * 0.8 }
            );
          } else if (startLat < -10 && endLat < -10) {
            // Southern Pacific route
            waypoints.push(
              { lat: Math.min(startLat, -15), lng: normStartLng + lngDiff * 0.25 },
              { lat: -25, lng: normStartLng + lngDiff * 0.5 },
              { lat: Math.min(endLat, -15), lng: normStartLng + lngDiff * 0.75 }
            );
          } else {
            // Mixed latitude Pacific route
            waypoints.push(
              { lat: startLat > 0 ? 25 : -10, lng: normStartLng + lngDiff * 0.3 },
              { lat: endLat > 0 ? 25 : -10, lng: normStartLng + lngDiff * 0.7 }
            );
          }
        }
        // Trans-Atlantic routes (Europe/Africa <-> Americas)
        else if (
          ((normStartLng > -30 && normStartLng < 40) && (normEndLng > -100 && normEndLng < -50)) ||
          ((normEndLng > -30 && normEndLng < 40) && (normStartLng > -100 && normStartLng < -50))
        ) {
          // Atlantic crossing
          if (startLat > 30 || endLat > 30) {
            // North Atlantic route
            waypoints.push(
              { lat: Math.max(Math.max(startLat, endLat), 40), lng: normStartLng + lngDiff * 0.3 },
              { lat: Math.max(Math.max(startLat, endLat), 45), lng: normStartLng + lngDiff * 0.7 }
            );
          } else if (startLat < 10 && endLat < 10) {
            // South Atlantic route
            waypoints.push(
              { lat: Math.min(Math.min(startLat, endLat), 0), lng: normStartLng + lngDiff * 0.4 },
              { lat: Math.min(Math.min(startLat, endLat), -5), lng: normStartLng + lngDiff * 0.6 }
            );
          } else {
            // Mixed Atlantic route
            waypoints.push(
              { lat: (startLat + endLat) / 2, lng: normStartLng + lngDiff * 0.5 }
            );
          }
        }
        // Regional routes or other ocean crossings
        else {
          // For shorter distances or regional routes, add minimal waypoints
          if (Math.abs(lngDiff) > 60) {
            waypoints.push(
              { lat: (startLat + endLat) / 2 + 5, lng: normStartLng + lngDiff * 0.4 },
              { lat: (startLat + endLat) / 2 + 5, lng: normStartLng + lngDiff * 0.6 }
            );
          } else if (Math.abs(startLat - endLat) > 30) {
            // Large latitude difference
            waypoints.push(
              { lat: startLat + (endLat - startLat) * 0.5, lng: normStartLng + lngDiff * 0.5 }
            );
          }
        }

        return {
          start: { lat: startLat, lng: normStartLng },
          end: { lat: endLat, lng: finalEndLng },
          waypoints: waypoints
        };
      }

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
        // Use custom shipping route waypoints
        .arcStartLat((d: any) => {
          const route = getShippingRoute(
            { lat: +d.srcPortInfo.lat, lng: +d.srcPortInfo.lng },
            { lat: +d.dstPortInfo.lat, lng: +d.dstPortInfo.lng }
          );
          return route.start.lat;
        })
        .arcStartLng((d: any) => {
          const route = getShippingRoute(
            { lat: +d.srcPortInfo.lat, lng: +d.srcPortInfo.lng },
            { lat: +d.dstPortInfo.lat, lng: +d.dstPortInfo.lng }
          );
          return route.start.lng;
        })
        .arcEndLat((d: any) => {
          const route = getShippingRoute(
            { lat: +d.srcPortInfo.lat, lng: +d.srcPortInfo.lng },
            { lat: +d.dstPortInfo.lat, lng: +d.dstPortInfo.lng }
          );
          return route.end.lat;
        })
        .arcEndLng((d: any) => {
          const route = getShippingRoute(
            { lat: +d.srcPortInfo.lat, lng: +d.srcPortInfo.lng },
            { lat: +d.dstPortInfo.lat, lng: +d.dstPortInfo.lng }
          );
          return route.end.lng;
        })
        // Add waypoints for realistic shipping routes
        .arcCurveResolution(64)
        .arcAltitude((d: any) => {
          // Calculate great circle distance between ports
          const distance = greatCircleDistance(
            { lat: +d.srcPortInfo.lat, lng: +d.srcPortInfo.lng },
            { lat: +d.dstPortInfo.lat, lng: +d.dstPortInfo.lng }
          );
          
          // Convert distance to a reasonable altitude
          // Distance is in radians (0 to π), so we scale it appropriately
          // For shorter distances, lower altitude; for longer distances, higher altitude
          const minAltitude = 0.05;  // Minimum arc height
          const maxAltitude = 0.4;   // Maximum arc height
          
          // Scale the distance (0 to π) to altitude range
          const normalizedDistance = distance / Math.PI;
          const altitude = minAltitude + (maxAltitude - minAltitude) * normalizedDistance;
          
          return altitude;
        })
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
  }, []);

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

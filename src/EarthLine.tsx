import React, { useEffect, useRef } from "react";
import Globe from "globe.gl";

const OPACITY = 0.22;

const EarthLine: React.FC = () => {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Promise.all([
      fetch("/from.json").then((res) => res.json()),
      fetch("/to.json").then((res) => res.json()),
      fetch("/fromto.json").then((res) => res.json()),
    ]).then((res) => {
      const routes: any[] = [];
      const linePorts: any[] = [];

      const fromMap = new Map();
      res[0].forEach((item: any) => {
        linePorts.push({
          iata: item.name,
          lat: item.lat,
          lng: item.lng,
        });
        fromMap.set(item.name, item);
      });

      const toMap = new Map();
      res[1].forEach((item: any) => {
        linePorts.push({
          iata: item.idc,
          lat: item.lat,
          lng: item.lng,
        });
        toMap.set(item.idc, item);
      });

      // 构建 routes，包含 srcAirport 和 dstAirport
      res[2].forEach((item: any) => {
        const from = fromMap.get(item.fromPort);
        const to = toMap.get(item.toPort);
        if (from && to) {
          routes.push({
            srcIata: item.fromPort,
            dstIata: item.toPort,
            srcAirport: { lat: from.lat, lng: from.lng },
            dstAirport: { lat: to.lat, lng: to.lng },
            airline: item.airline || "",
          });
        }
      });

      const myGlobe = new Globe(globeRef.current!)
        .globeImageUrl(
          "//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
        )
        .pointOfView({ lat: 39.6, lng: -98.5, altitude: 2 })
        .arcLabel(
          (d: any) => `
          <div style="
            background: linear-gradient(90deg, #ff8c00 0%, #ff0080 100%);
            color: #fff;
            padding: 10px 18px;
            border-radius: 12px;
            box-shadow: 0 4px 24px 0 rgba(255,0,128,0.25);
            font-size: 1.1em;
            font-weight: bold;
            letter-spacing: 1px;
            text-shadow: 0 2px 8px #000a;
            transition: all 0.2s;
            ">
            🚢 ${
              d.airline ? `<span style="color:#fff700">${d.airline}</span>` : ""
            }
            <br/>
            <span style="color:#00ffe7">${d.srcIata}</span>
            <span style="margin: 0 8px;">→</span>
            <span style="color:#ff0080">${d.dstIata}</span>
          </div>
        `
        )
        .arcStartLat((d: any) => +d.srcAirport.lat)
        .arcStartLng((d: any) => +d.srcAirport.lng)
        .arcEndLat((d: any) => +d.dstAirport.lat)
        .arcEndLng((d: any) => +d.dstAirport.lng)
        .arcDashLength(0.25)
        .arcDashGap(1)
        .arcDashInitialGap(() => Math.random())
        .arcDashAnimateTime(4000)
        .arcColor(() => [
          `rgba(0, 255, 0, ${OPACITY})`,
          `rgba(255, 0, 0, ${OPACITY})`,
        ])
        .arcsTransitionDuration(0)
        .pointColor(() => "orange")
        .pointAltitude(0)
        .pointRadius(0.02)
        .pointsMerge(true)
        .onArcHover((arc) => {
          // 可选：高亮效果
          myGlobe.arcColor((d: any) =>
            arc && d === arc
              ? ["rgba(255,255,0,0.95)", "rgba(255,0,128,0.95)"]
              : [`rgba(0, 255, 0, ${OPACITY})`, `rgba(255, 0, 0, ${OPACITY})`]
          );
        });

      myGlobe.pointsData(linePorts).arcsData(routes);

      myGlobe
        .labelsData(linePorts)
        .labelLat((d: any) => d.lat)
        .labelLng((d: any) => d.lng)
        .labelText((d: any) => d.iata)
        .labelSize((d) => 0.7)
        .labelDotRadius((d) => 0.6)
        .labelColor(() => "rgba(255, 165, 0, 0.85)")
        .labelResolution(2)
        .labelAltitude(0.01);
    });

    // 清理
    return () => {
      globeRef.current && (globeRef.current.innerHTML = "");
    };
  }, []);

  // 渲染地球可视化容器
  return <div ref={globeRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default EarthLine;

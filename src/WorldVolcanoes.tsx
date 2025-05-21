import React, { useEffect, useRef } from "react";
import Globe from "globe.gl";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { transparentize } from "polished";

// 分类颜色比例尺
const catColor = scaleOrdinal<string, string>(
  schemeCategory10.map((col) => transparentize(0.2, col))
);

// 获取火山点的高度
const getAlt = (d: any) => d.elevation * 5e-5;

// 获取火山点的 tooltip 内容
const getTooltip = (d: any) => `
  <div style="text-align: center">
    <div><b>${d.name}</b>, ${d.country}</div>
    <div>(${d.type})</div>
    <div>Elevation: <em>${d.elevation}</em>m</div>
  </div>
`;

const WorldVolcanoes: React.FC = () => {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    // 创建 Globe 实例
    const myGlobe = new Globe(globeRef.current)
      .globeImageUrl(
        "//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
      )
      .backgroundImageUrl(
        "//cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png"
      )
      .pointLat("lat")
      .pointLng("lon")
      .pointAltitude(getAlt)
      .pointRadius(0.12)
      .pointColor((d: any) => catColor(d.type))
      .pointLabel(getTooltip)
      .labelLat("lat")
      .labelLng("lon")
      .labelAltitude((d: any) => getAlt(d) + 1e-6)
      .labelDotRadius(0.12)
      .labelDotOrientation(() => "bottom")
      .labelColor((d: any) => catColor(d.type))
      .labelText("name")
      .labelSize(0.15)
      .labelResolution(1)
      .labelLabel(getTooltip);

    // 加载火山数据
    fetch("https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/world_volcanoes.json")
      .then((res) => res.json())
      .then((volcanoes) => {
        myGlobe.pointsData(volcanoes).labelsData(volcanoes);
      });

    // 清理函数
    return () => {
      globeRef.current && (globeRef.current.innerHTML = "");
    };
  }, []);

  // 渲染地球容器
  return <div ref={globeRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default WorldVolcanoes;

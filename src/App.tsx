import React, { useEffect, useRef, useState } from 'react';
import Globe from 'globe.gl';
import { ControlPanel } from './ControlPanel';

const AUTO_ROTATE_TIMEOUT = 10000; // 10秒

export const App: React.FC = () => {
  const globeRef = useRef<HTMLDivElement>(null);
  const [idleProgress, setIdleProgress] = useState(0); // 0~1

  useEffect(() => {
    if (!globeRef.current) return;

    // 初始化 globe.gl
    const globe = new Globe(globeRef.current)
      .globeImageUrl(import.meta.env.BASE_URL + 'earth_atmos_2048.jpg')
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
      .width(window.innerWidth)
      .height(window.innerHeight);

    globe.controls().autoRotate = false;

    // 自动旋转逻辑
    let idleTimer: number | undefined;
    let autoRotate = false;
    let idleStart = Date.now();

    function resetIdleTimer() {
      autoRotate = false;
      globe.controls().autoRotate = false;
      idleStart = Date.now();
      setIdleProgress(0);
      if (idleTimer) window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        autoRotate = true;
        globe.controls().autoRotate = true;
        setIdleProgress(1);
      }, AUTO_ROTATE_TIMEOUT);
    }
    resetIdleTimer();

    // 任何用户操作都重置idle计时
    ['mousedown', 'mousemove', 'mouseup', 'mouseleave', 'keydown', 'touchstart', 'touchmove', 'wheel'].forEach(evt =>
      window.addEventListener(evt, resetIdleTimer)
    );

    // 加载数据
    fetch(import.meta.env.BASE_URL + 'lines.json')
      .then(res => res.json())
      .then(data => {
        // 路线
        if (data.routes) {
          globe.arcsData(data.routes.flatMap((route: any[]) => {
            if (route.length < 2) return [];
            return route.slice(1).map((p, i) => ({
              startLat: route[i].lat,
              startLng: route[i].lng,
              endLat: p.lat,
              endLng: p.lng,
              color: 'yellow'
            }));
          }))
          .arcColor('color')
          .arcStroke(0.5)
          .arcAltitude(0.1)
          .arcDashLength(0.4)
          .arcDashGap(0.2)
          .arcDashAnimateTime(4000);
        }

        // 港口点
        if (data.ports) {
          globe.pointsData(data.ports)
            .pointLat('lat')
            .pointLng('lng')
            .pointColor(() => 'green')
            .pointAltitude(0.01)
            .pointRadius(0.02)
            .pointLabel('name');
        }
      });

    // 响应窗口大小变化
    function handleResize() {
      globe.width(window.innerWidth);
      globe.height(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);

    // 动画进度条
    let animationFrameId: number;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      if (!autoRotate) {
        const elapsed = Date.now() - idleStart;
        setIdleProgress(Math.min(1, elapsed / AUTO_ROTATE_TIMEOUT));
      }
    }
    animate();

    // 清理
    return () => {
      window.removeEventListener('resize', handleResize);
      ['mousedown', 'mousemove', 'mouseup', 'mouseleave', 'keydown', 'touchstart', 'touchmove', 'wheel'].forEach(evt =>
        window.removeEventListener(evt, resetIdleTimer)
      );
      if (idleTimer) window.clearTimeout(idleTimer);
      cancelAnimationFrame(animationFrameId);
      globeRef.current && (globeRef.current.innerHTML = '');
    };
  }, []);

  // 进度条样式
  const progressBarStyle: React.CSSProperties = {
    position: 'fixed',
    left: 0,
    top: 0,
    height: 1,
    width: `${idleProgress * 100}%`,
    background: idleProgress < 1 ? '#929292' : '#00290087',
    zIndex: 99999,
    transition: 'width 0.2s linear, background 0.2s'
  };

  return (
    <>
      <div style={progressBarStyle} />
      <ControlPanel />
      <div ref={globeRef} style={{ width: '100vw', height: '100vh' }} />
    </>
  );
};
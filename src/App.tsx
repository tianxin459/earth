import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ControlPanel } from './ControlPanel';
import { createStarBg } from './Bg';

const AUTO_ROTATE_TIMEOUT = 10000; // 10秒

export const App: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [idleProgress, setIdleProgress] = useState(0); // 0~1

  useEffect(() => {
    // Three.js 初始化
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 1.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current!.appendChild(renderer.domElement);

    // 添加星空背景
    const updateStarBg = createStarBg(scene);

    // 监听缩放滑块
    const zoomSlider = document.getElementById('zoom-slider') as HTMLInputElement | null;
    const minZoom = 1.5;
    const maxZoom = 150;
    if (zoomSlider) {
      zoomSlider.min = String(minZoom);
      zoomSlider.max = String(maxZoom);
      zoomSlider.step = "0.01";
      zoomSlider.value = String(minZoom);
      zoomSlider.addEventListener('input', () => {
        camera.position.z = Number(zoomSlider.value);
        resetIdleTimer();
      });
    }

    // --- 自动旋转相关逻辑 ---
    let idleTimer: number | undefined;
    let autoRotate = false;
    let earthGroup: THREE.Group | null = null;
    let idleStart = Date.now();
    let animationFrameId: number;

    function resetIdleTimer() {
      autoRotate = false;
      idleStart = Date.now();
      setIdleProgress(0);
      if (idleTimer) window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        autoRotate = true;
        setIdleProgress(1);
      }, AUTO_ROTATE_TIMEOUT);
    }
    // 初始化时启动idle计时
    resetIdleTimer();

    // 鼠标滚轮缩放
    renderer.domElement.addEventListener('wheel', (event: WheelEvent) => {
      event.preventDefault();
      const zoomSpeed = 0.2;
      camera.position.z += event.deltaY * zoomSpeed * 0.01;
      camera.position.z = Math.max(minZoom, Math.min(maxZoom, camera.position.z));
      if (zoomSlider) zoomSlider.value = camera.position.z.toFixed(2);
      resetIdleTimer();
    }, { passive: false });

    // 光源
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 3, 5);
    scene.add(light);

    // 经纬度类型
    type LatLng = { lat: number; lng: number };

    // 经纬度转球面坐标
    function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    }

    // 球面插值
    function getSlerpPoints(a: THREE.Vector3, b: THREE.Vector3, segments: number): THREE.Vector3[] {
      const points: THREE.Vector3[] = [];
      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const p = a.clone().lerp(b, t).normalize().multiplyScalar(a.length());
        points.push(p);
      }
      return points;
    }

    // 让指定经纬度正对屏幕
    function orientGroupToLatLng(
      group: THREE.Group,
      lat: number,
      lng: number
    ) {
      group.rotation.y = THREE.MathUtils.degToRad(lng + 180);
      group.rotation.x = -THREE.MathUtils.degToRad(lat);
    }

    // 加载多条线数据并绘制（带小球动画）
    function loadRoutes(
      earthGroup: THREE.Group,
      radius: number,
      registerAnim?: (anim: () => void) => void
    ) {
      fetch('/lines.json')
        .then(res => res.json())
        .then((data) => {
          const routes = data.routes;
          routes.forEach((route: LatLng[]) => {
            if (route.length < 2) return;
            const points: THREE.Vector3[] = route.map(p =>
              latLngToVector3(p.lat, p.lng, radius)
            );
            const surfacePoints: THREE.Vector3[] = [];
            const segmentsPerArc = 64;
            for (let i = 0; i < points.length - 1; i++) {
              const arc = getSlerpPoints(points[i], points[i + 1], segmentsPerArc);
              if (i > 0) arc.shift();
              surfacePoints.push(...arc);
            }
            const arcGeometry = new THREE.BufferGeometry().setFromPoints(surfacePoints);
            const arcMaterial = new THREE.LineBasicMaterial({ color: "yellow" });
            const arcLine = new THREE.Line(arcGeometry, arcMaterial);
            earthGroup.add(arcLine);

            const ballGeo = new THREE.SphereGeometry(0.002, 12, 12);
            const ballMat = new THREE.MeshBasicMaterial({ color: "yellow" });
            const ball = new THREE.Mesh(ballGeo, ballMat);
            earthGroup.add(ball);

            const phase = Math.random();
            const total = surfacePoints.length;
            function animateBall() {
              const t = ((performance.now() * 0.00002 + phase) % 1);
              const idx = Math.floor(t * (total - 1));
              ball.position.copy(surfacePoints[idx]);
            }
            if (registerAnim) registerAnim(animateBall);
          });
        });
    }

    // 加载港口点并显示名称
    function loadPorts(
      earthGroup: THREE.Group,
      radius: number,
      ports: { lat: number; lng: number; name: string }[]
    ) {
      const portAnimators: { sphere: THREE.Mesh; phaseOffset: number }[] = [];
      const portLabelUpdaters: (() => void)[] = [];

      ports.forEach((port, i) => {
        const portRadius = radius + 0.002; // 港口点略高于地球表面
        const portPos = latLngToVector3(port.lat, port.lng, portRadius); // 经纬度转球面坐标
        const torusGeo = new THREE.TorusGeometry(0.005, 0.001, 8, 16); // 小环形几何体
        // depthTest: false 保证港口环始终渲染在最前面
        const torusMat = new THREE.MeshBasicMaterial({ color: "green", depthTest: false });
        const torus = new THREE.Mesh(torusGeo, torusMat);
        torus.position.copy(portPos);

        // 让环稍微浮出地表，并朝外法线方向
        const normal = portPos.clone().normalize();
        torus.position.addScaledVector(normal, -0.0075);
        torus.lookAt(portPos.clone().add(normal));
        earthGroup.add(torus);

        // 用于动画的对象和相位
        portAnimators.push({ sphere: torus, phaseOffset: i * 0.5 });

        // 创建港口名称标签
        const div = document.createElement('div');
        div.className = 'port-label';
        div.textContent = port.name;
        document.body.appendChild(div);

        /**
         * 更新标签和港口点的可见性与屏幕位置
         * 仅当前面可见时才显示
         */
        function updateLabelPosition() {
          // 计算港口点的世界坐标
          const worldPos = portPos.clone();
          earthGroup.localToWorld(worldPos);

          // 计算相机到港口的方向
          const cameraToPort = worldPos.clone().sub(camera.position).normalize();
          const normal = worldPos.clone().normalize();
          // dot < 0 说明在地球正面
          const isFront = cameraToPort.dot(normal) < 0;

          // 控制3D对象显示/隐藏
          torus.visible = isFront;

          // 计算标签的屏幕投影位置
          const vector = worldPos.project(camera);
          const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
          const y = (-vector.y * 0.5 + 0.5) * window.innerHeight;
          div.style.left = `${x}px`;
          div.style.top = `${y}px`;
          // 控制标签显示/隐藏
          div.style.display = isFront ? 'block' : 'none';
        }
        // 每帧更新标签和可见性
        renderer.domElement.addEventListener('render', updateLabelPosition);
        portLabelUpdaters.push(updateLabelPosition);
      });

      /**
       * 港口点动画：呼吸脉冲效果
       */
      function animatePorts() {
        const t = performance.now() * 0.002;
        portAnimators.forEach(({ sphere, phaseOffset }) => {
          const phase = t + phaseOffset;
          const ripple = Math.max(0, Math.sin(phase));
          const scale = 1 + ripple * ripple * 1.2;
          sphere.scale.set(scale, scale, scale);
        });
      }

      return { animatePorts, portLabelUpdaters };
    }

    // 地球纹理
    const earthTextureUrl = import.meta.env.BASE_URL + 'earth_atmos_2048.jpg';
    const loadingBar = document.getElementById('loading-bar');

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      earthTextureUrl,
      function (texture: THREE.Texture) {
        if (loadingBar) loadingBar.style.width = '100%';
        setTimeout(() => { if (loadingBar) loadingBar.style.display = 'none'; }, 500);

        const geometry = new THREE.SphereGeometry(1, 64, 64);
        const material = new THREE.MeshPhongMaterial({ map: texture });
        const earth = new THREE.Mesh(geometry, material);

        const radius = 1.01;
        earthGroup = new THREE.Group();
        earthGroup.add(earth);

        orientGroupToLatLng(earthGroup, -35, -168);
        scene.add(earthGroup);

        const lineAnimators: (() => void)[] = [];
        loadRoutes(earthGroup, radius, (anim) => lineAnimators.push(anim));

        let animatePorts: () => void = () => {};
        let portLabelUpdaters: (() => void)[] = [];

        fetch(import.meta.env.BASE_URL + 'lines.json')
          .then(res => res.json())
          .then((data) => {
            const routes = data.routes;
            routes.forEach((route: LatLng[]) => {
              if (route.length < 2) return;
              const points: THREE.Vector3[] = route.map(p =>
                latLngToVector3(p.lat, p.lng, radius)
              );
              const surfacePoints: THREE.Vector3[] = [];
              const segmentsPerArc = 128;
              for (let i = 0; i < points.length - 1; i++) {
                const arc = getSlerpPoints(points[i], points[i + 1], segmentsPerArc);
                if (i > 0) arc.shift();
                surfacePoints.push(...arc);
              }
              const arcGeometry = new THREE.BufferGeometry().setFromPoints(surfacePoints);
              const arcMaterial = new THREE.LineBasicMaterial({ color: "yellow" });
              const arcLine = new THREE.Line(arcGeometry, arcMaterial);
              earthGroup!.add(arcLine);
            });

            if (data.ports) {
              const portsResult = loadPorts(earthGroup!, radius, data.ports);
              animatePorts = portsResult.animatePorts;
              portLabelUpdaters = portsResult.portLabelUpdaters;
            }
          });

        // 鼠标拖动旋转
        let isDragging = false;
        let previousX = 0;
        let previousY = 0;

        renderer.domElement.addEventListener('mousedown', (event: MouseEvent) => {
          isDragging = true;
          previousX = event.clientX;
          previousY = event.clientY;
          resetIdleTimer();
        });

        renderer.domElement.addEventListener('mousemove', (event: MouseEvent) => {
          if (!isDragging) return;
          const deltaX = event.clientX - previousX;
          const deltaY = event.clientY - previousY;
          if (earthGroup) {
            earthGroup.rotation.y += deltaX * 0.01;
            earthGroup.rotation.x += deltaY * 0.01;
            earthGroup.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, earthGroup.rotation.x));
          }
          previousX = event.clientX;
          previousY = event.clientY;
          resetIdleTimer();
        });

        renderer.domElement.addEventListener('mouseup', () => {
          isDragging = false;
        });

        renderer.domElement.addEventListener('mouseleave', () => {
          isDragging = false;
        });

        function animate() {
          animationFrameId = requestAnimationFrame(animate);

          // 星空动态旋转
          updateStarBg(performance.now() * 0.001);

          // 进度条更新
          if (!autoRotate) {
            const elapsed = Date.now() - idleStart;
            setIdleProgress(Math.min(1, elapsed / AUTO_ROTATE_TIMEOUT));
          }

          lineAnimators.forEach(fn => fn());
          animatePorts();
          portLabelUpdaters.forEach(fn => fn());
          // 自动旋转逻辑
          if (autoRotate && earthGroup) {
            earthGroup.rotation.y += 0.002; // 沿赤道缓慢旋转
          }
          renderer.render(scene, camera);
        }
        animate();
      },
      function (xhr) {
        if (loadingBar && xhr.lengthComputable) {
          const percent = (xhr.loaded / xhr.total) * 100;
          loadingBar.style.width = percent + '%';
        }
      },
      function () {
        if (loadingBar) loadingBar.style.background = 'red';
      }
    );

    // 响应窗口大小变化
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', handleResize);

    // 任何用户操作都重置idle计时
    ['mousedown', 'mousemove', 'mouseup', 'mouseleave', 'keydown', 'touchstart', 'touchmove'].forEach(evt =>
      window.addEventListener(evt, resetIdleTimer)
    );

    // 清理
    return () => {
      window.removeEventListener('resize', handleResize);
      ['mousedown', 'mousemove', 'mouseup', 'mouseleave', 'keydown', 'touchstart', 'touchmove'].forEach(evt =>
        window.removeEventListener(evt, resetIdleTimer)
      );
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
      document.querySelectorAll('.port-label').forEach(el => el.remove());
      if (idleTimer) window.clearTimeout(idleTimer);
      cancelAnimationFrame(animationFrameId);
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
      <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />
    </>
  );
};
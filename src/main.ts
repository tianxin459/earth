import * as THREE from 'three';

// 创建场景
const scene = new THREE.Scene();

// 创建相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 3;

// 监听滑块调整相机距离
const zoomSlider = document.getElementById('zoom-slider') as HTMLInputElement | null;
if (zoomSlider) {
  zoomSlider.addEventListener('input', () => {
    camera.position.z = Number(zoomSlider.value);
  });
}

// 创建渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('app')?.appendChild(renderer.domElement);

// 添加光源
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

// 加载地球纹理
const textureLoader = new THREE.TextureLoader();
textureLoader.load(
  '/earth_atmos_2048.jpg',
  function (texture: THREE.Texture) {
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.MeshPhongMaterial({ map: texture });
    const earth = new THREE.Mesh(geometry, material);

    const radius = 1.01;

    function getLongitudeArcPoints(
      a: LatLng,
      b: LatLng,
      r: number,
      segments = 100
    ): THREE.Vector3[] {
      // 取起点纬度，插值经度
      const lat = a.lat;
      let lngStart = a.lng;
      let lngEnd = b.lng;

      // 处理跨越180度经线的情况，确保插值是最短路径
      if (Math.abs(lngEnd - lngStart) > 180) {
        if (lngEnd > lngStart) {
          lngStart += 360;
        } else {
          lngEnd += 360;
        }
      }

      const points: THREE.Vector3[] = [];
      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const lng = lngStart + (lngEnd - lngStart) * t;
        points.push(latLngToVector3(lat, lng, r));
      }
      return points;
    }

    // 用 Group 组合地球和线
    const earthGroup = new THREE.Group();
    earthGroup.add(earth);
    scene.add(earthGroup);

    // 加载多条线数据并绘制
    fetch('/lines.json')
      .then(res => res.json())
      .then((data) => {
        const routes = data.routes;
        routes.forEach((route: LatLng[]) => {
          if (route.length < 2) return;
          for (let i = 0; i < route.length - 1; i++) {
            const a = route[i];
            const b = route[i + 1];
            const arcPoints = getLongitudeArcPoints(a, b, radius, 128);
            const arcGeometry = new THREE.BufferGeometry().setFromPoints(arcPoints);
            const arcMaterial = new THREE.LineBasicMaterial({ color: "yellow" });
            const arcLine = new THREE.Line(arcGeometry, arcMaterial);
            earthGroup.add(arcLine);
          }
        });
      });

    //todo: 下面的海运路线有问题
    // 加载并显示海运线路
    fetch('/shipping_routes.json')
      .then((res) => res.json())
      .then((routes: [number, number][][]) => {
        routes.forEach((route: [number, number][]) => {
          const points = route.map(([lat, lng]) => latLngToVector3(lat, lng, radius + 0.05));
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const material = new THREE.LineBasicMaterial({ color: 0x00ffff, linewidth: 1 });
          const line = new THREE.Line(geometry, material);
          earthGroup.add(line);
        });
      });

    // 鼠标拖动旋转逻辑
    let isDragging = false;
    let previousX = 0;
    let previousY = 0;

    renderer.domElement.addEventListener('mousedown', (event: MouseEvent) => {
      isDragging = true;
      previousX = event.clientX;
      previousY = event.clientY;
    });

    renderer.domElement.addEventListener('mousemove', (event: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = event.clientX - previousX;
      const deltaY = event.clientY - previousY;
      earthGroup.rotation.y += deltaX * 0.01; // 水平旋转
      earthGroup.rotation.x += deltaY * 0.01; // 垂直旋转
      // 限制垂直旋转范围，防止翻转
      earthGroup.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, earthGroup.rotation.x));
      previousX = event.clientX;
      previousY = event.clientY;
    });

    renderer.domElement.addEventListener('mouseup', () => {
      isDragging = false;
    });

    renderer.domElement.addEventListener('mouseleave', () => {
      isDragging = false;
    });

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  }
);

// 响应窗口大小变化
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

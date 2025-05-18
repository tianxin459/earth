import * as THREE from 'three';

// 创建一个Three.js场景，作为所有3D对象的容器
const scene = new THREE.Scene();

// 创建透视相机，参数依次为：视场角、宽高比、近裁剪面、远裁剪面
// 目的是设置观察3D场景的视角和范围
const camera = new THREE.PerspectiveCamera(
  75, // 视场角，决定可视范围的大小
  window.innerWidth / window.innerHeight, // 宽高比，防止画面变形
  0.1, // 最近可见距离
  1000 // 最远可见距离
);
// 初始时拉近相机，只显示地球局部（1.5缩放）
camera.position.z = 1.5; // 1.5缩放

// 监听滑块调整相机距离，实现缩放交互
const zoomSlider = document.getElementById('zoom-slider') as HTMLInputElement | null;
if (zoomSlider) {
  zoomSlider.addEventListener('input', () => {
    camera.position.z = Number(zoomSlider.value); // 根据滑块值调整相机z轴位置
  });
}

// 创建WebGL渲染器，antialias参数开启抗锯齿，提升画质
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染区域大小为窗口大小
document.getElementById('app')?.appendChild(renderer.domElement); // 将渲染画布添加到页面

// 鼠标滚轮缩放操作
renderer.domElement.addEventListener('wheel', (event: WheelEvent) => {
  event.preventDefault();
  // 缩放速度
  const zoomSpeed = 0.2;
  // 计算新的相机z轴位置
  camera.position.z += event.deltaY * zoomSpeed * 0.01;
  // 限制缩放范围
  camera.position.z = Math.max(1.5, Math.min(10, camera.position.z));
}, { passive: false });

// 添加一个平行光源，参数为颜色和强度
// 目的是让地球表面有明暗效果，提升立体感
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 3, 5); // 设置光源位置
scene.add(light); // 将光源加入场景

// 经纬度类型定义
type LatLng = { lat: number; lng: number };

// 经纬度转球面坐标，参数为纬度、经度和球半径
// 目的是将地理坐标转换为Three.js中的3D坐标
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180); // 纬度转球坐标
  const theta = (lng + 180) * (Math.PI / 180); // 经度转球坐标
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta), // x
    radius * Math.cos(phi),                   // y
    radius * Math.sin(phi) * Math.sin(theta)  // z
  );
}

// 球面插值函数，返回 a 到 b 的球面插值点数组
function getSlerpPoints(a: THREE.Vector3, b: THREE.Vector3, segments: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    // 球面线性插值
    const p = a.clone().lerp(b, t).normalize().multiplyScalar(a.length());
    points.push(p);
  }
  return points;
}

// 让指定经纬度正对屏幕的工具函数
function orientGroupToLatLng(
  group: THREE.Group,
  lat: number,
  lng: number
) {
  // y轴旋转：让目标经度对准z轴正方向
  group.rotation.y = THREE.MathUtils.degToRad(lng + 180);
  // x轴旋转：让目标纬度对准赤道（z轴正方向），需负值
  group.rotation.x = -THREE.MathUtils.degToRad(lat);
}

// 加载多条线数据并绘制
function loadRoutes(earthGroup: THREE.Group, radius: number) {
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
      });

      // 加载港口
      if (data.ports) {
        loadPorts(earthGroup, radius, data.ports);
      }
    });
}

// 加载港口点并显示名称
function loadPorts(
  earthGroup: THREE.Group,
  radius: number,
  ports: { lat: number; lng: number; name: string }[]
) {
  const portSpheres: THREE.Mesh[] = [];
  ports.forEach((port) => {
    const portRadius = radius + 0.002;
    const portPos = latLngToVector3(port.lat, port.lng, portRadius);
    const sphereGeo = new THREE.SphereGeometry(0.015, 16, 16);
    const sphereMat = new THREE.MeshBasicMaterial({ color: "green" });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    sphere.position.copy(portPos);

    // 让球体“朝外”方向只露出一半
    const normal = portPos.clone().normalize();
    sphere.position.addScaledVector(normal, -0.0075);

    earthGroup.add(sphere);
    portSpheres.push(sphere);

    // 显示港口名称
    const div = document.createElement('div');
    div.className = 'port-label';
    div.textContent = port.name;
    div.style.position = 'absolute';
    div.style.color = 'lime';
    div.style.fontSize = '12px';
    div.style.pointerEvents = 'none';
    document.body.appendChild(div);

    // 更新标签位置
    function updateLabelPosition() {
      const worldPos = portPos.clone();
      earthGroup.localToWorld(worldPos);
      const cameraToPort = worldPos.clone().sub(camera.position).normalize();
      const normal = worldPos.clone().normalize();
      const isFront = cameraToPort.dot(normal) < 0;
      const vector = worldPos.project(camera);
      const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
      const y = (-vector.y * 0.5 + 0.5) * window.innerHeight;
      div.style.left = `${x}px`;
      div.style.top = `${y}px`;
      div.style.display = isFront ? 'block' : 'none';
    }
    // 每帧更新
    renderer.domElement.addEventListener('render', updateLabelPosition);
    if (!(window as any)._portLabels) (window as any)._portLabels = [];
    (window as any)._portLabels.push(updateLabelPosition);
  });

  // 港口点波纹动画
  if (!(window as any)._portSpheres) (window as any)._portSpheres = [];
  (window as any)._portSpheres.push(...portSpheres);
}

// 加载地球纹理贴图
const textureLoader = new THREE.TextureLoader();
textureLoader.load(
  '/earth_atmos_2048.jpg', // 贴图路径
  function (texture: THREE.Texture) {
    // 创建球体几何体，参数为半径、水平分段数、垂直分段数
    // 目的是生成一个高精度的球体用于贴图
    const geometry = new THREE.SphereGeometry(1, 64, 64);

    // 创建球体材质，将贴图赋给材质
    const material = new THREE.MeshPhongMaterial({ map: texture });

    // 创建地球网格对象，将几何体和材质结合
    const earth = new THREE.Mesh(geometry, material);

    const radius = 1.01; // 线条绘制时用的球半径，略大于地球表面

    // 创建一个Group，将地球和所有线条组合，便于整体变换
    const earthGroup = new THREE.Group();
    earthGroup.add(earth);

    // 让美国正对屏幕（美国中心大致：lat=39, lng=-98）
    // Ellis: 实际上的坐标是-35 -168
    orientGroupToLatLng(earthGroup, -35, -168);

    scene.add(earthGroup);

    // 加载线条和港口
    loadRoutes(earthGroup, radius);

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

    // 动画循环，持续渲染场景
    function animate() {
      requestAnimationFrame(animate);

      // 港口点波纹扩散动画
      const t = performance.now() * 0.002; // 时间参数
      const portSpheres: THREE.Mesh[] = (window as any)._portSpheres || [];
      portSpheres.forEach((sphere, i) => {
        // 波纹效果：周期性scale快速扩散再回落
        const phase = t + i * 0.5; // 每个点有相位差
        // 0~1的波峰，波峰时scale最大，之后迅速回落
        const ripple = Math.max(0, Math.sin(phase));
        // 让scale在1~2之间变化，波峰后迅速回落
        const scale = 1 + ripple * ripple * 1.2;
        sphere.scale.set(scale, scale, scale);
      });

      // 更新所有港口标签位置
      if ((window as any)._portLabels) {
        (window as any)._portLabels.forEach((fn: () => void) => fn());
      }

      renderer.render(scene, camera);
    }
    animate();
  }
);

// 响应窗口大小变化，保持画面比例和分辨率
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

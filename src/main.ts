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
camera.position.z = 3; // 相机沿z轴拉远，便于看到整个地球

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

    // 生成两点间球面插值点，用于绘制弧线
    function getLongitudeArcPoints(
      a: LatLng,
      b: LatLng,
      r: number,
      segments = 100 // 插值段数，越大越平滑
    ): THREE.Vector3[] {
      const lat = a.lat;
      let lngStart = a.lng;
      let lngEnd = b.lng;
      // 处理跨越180度经线的情况
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

    // 创建一个Group，将地球和所有线条组合，便于整体变换
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
            // 生成两点间的球面插值点
            const arcPoints = getLongitudeArcPoints(a, b, radius, 128);
            // 创建线条几何体
            const arcGeometry = new THREE.BufferGeometry().setFromPoints(arcPoints);
            // 创建线条材质，黄色
            const arcMaterial = new THREE.LineBasicMaterial({ color: "yellow" });
            // 创建线条对象
            const arcLine = new THREE.Line(arcGeometry, arcMaterial);
            earthGroup.add(arcLine);
          }
        });
      });

    // 加载并显示海运线路
    fetch('/shipping_routes.json')
      .then((res) => res.json())
      .then((routes: [number, number][][]) => {
        routes.forEach((route: [number, number][]) => {
          // 将每个点的经纬度转为球面坐标
          const points = route.map(([lat, lng]) => latLngToVector3(lat, lng, radius + 0.05));
          // 创建线条几何体
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          // 创建线条材质，青色
          const material = new THREE.LineBasicMaterial({ color: 0x00ffff, linewidth: 1 });
          // 创建线条对象
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

    // 动画循环，持续渲染场景
    function animate() {
      requestAnimationFrame(animate);
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

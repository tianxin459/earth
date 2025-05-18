import * as THREE from 'three';

/**
 * 在给定的 Three.js 场景中添加动态靛黑蓝星空背景
 * @param scene Three.js 场景对象
 * @returns (time: number) => void 动态更新星空旋转的函数，需在动画循环中调用
 */
export function createStarBg(scene: THREE.Scene) {
  const STAR_COUNT = 10000; // 星星数量
  const STAR_RADIUS = 10;   // 星空球体半径，远大于地球半径
  const starGeometry = new THREE.BufferGeometry(); // 用于存储星星点云的几何体
  const positions = new Float32Array(STAR_COUNT * 3); // 每个星星的三维坐标
  const colors = new Float32Array(STAR_COUNT * 3);    // 每个星星的 RGB 颜色

  // 星空主色调：靛黑蓝（如#0a1026）
  const baseColor = new THREE.Color(0x0a1026);

  // 随机生成每个星星的坐标和颜色
  for (let i = 0; i < STAR_COUNT; i++) {
    // 球面均匀分布算法
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;          // 经度
    const phi = Math.acos(2 * v - 1);       // 纬度
    const r = STAR_RADIUS;
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    // 靛黑蓝为主，星星颜色微微偏蓝白
    const color = baseColor.clone();
    // 亮度随机，部分星星更亮
    const brightness = 0.7 + Math.random() * 0.8;
    // 偏蓝白色调，lerp 到淡蓝白
    color.lerp(new THREE.Color(0xbfdfff), Math.random() * 0.3);
    color.multiplyScalar(brightness);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }
  // 设置点云的顶点坐标和颜色属性
  starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // 自定义 ShaderMaterial，实现动态旋转和圆形点渲染
  const starMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0.0 },   // 用于动画旋转
      size: { value: 0.1 },   // 点的基础像素大小（很小，突出宇宙感）
      opacity: { value: 0.85 } // 整体透明度
    },
    vertexShader: `
      uniform float time;
      uniform float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        // 星空整体绕Y轴缓慢旋转
        float angle = time * 0.02;
        mat3 rot = mat3(
          cos(angle), 0, sin(angle),
          0, 1, 0,
          -sin(angle), 0, cos(angle)
        );
        vec3 pos = rot * position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        // 距离缩放，保证远近星星大小合适
        gl_PointSize = size * (300.0 / length(gl_Position.xyz));
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      uniform float opacity;
      void main() {
        // 原型贴图：只显示圆形区域
        float d = length(gl_PointCoord - vec2(0.5));
        if (d > 0.5) discard;
        // 边缘柔和透明
        float alpha = smoothstep(0.5, 0.45, d) * opacity;
        gl_FragColor = vec4(vColor, alpha);
      }
    `,
    vertexColors: true,    // 启用每个点的颜色
    transparent: true,     // 允许透明
    depthWrite: false      // 不写入深度缓冲，避免遮挡地球
  });

  // 创建点云对象并加入场景
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);

  /**
   * 动画循环中调用，驱动星空旋转
   * @param time 秒为单位的动画时间
   */
  return (time: number) => {
    starMaterial.uniforms.time.value = time;
  };
}
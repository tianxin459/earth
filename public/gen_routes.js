// 用于生成routes测试数据的Node.js脚本
const cnPorts = [
  { "name": "Shanghai", "lat": 31.2304, "lng": 121.4737 },
  { "name": "Tianjin", "lat": 39.0328, "lng": 117.7360 },
  { "name": "Qingdao", "lat": 36.0671, "lng": 120.3826 },
  { "name": "Ningbo-Zhoushan", "lat": 29.8683, "lng": 121.5440 },
  { "name": "Guangzhou", "lat": 23.1107, "lng": 113.3172 },
  { "name": "Shenzhen", "lat": 22.5431, "lng": 114.0579 },
  { "name": "Xiamen", "lat": 24.4798, "lng": 118.0894 },
  { "name": "Dalian", "lat": 38.9140, "lng": 121.6147 }
];
const usPorts = [
  { "name": "Los Angeles", "lat": 33.7405, "lng": -118.2775 },
  { "name": "Long Beach", "lat": 33.7676, "lng": -118.1995 },
  { "name": "New York", "lat": 40.6840, "lng": -74.0419 },
  { "name": "Savannah", "lat": 32.0809, "lng": -81.0912 },
  { "name": "Houston", "lat": 29.7280, "lng": -95.0865 },
  { "name": "Seattle", "lat": 47.6019, "lng": -122.3355 },
  { "name": "Oakland", "lat": 37.7950, "lng": -122.2780 },
  { "name": "Charleston", "lat": 32.7831, "lng": -79.9337 }
];
// 典型太平洋航路节点
const seaNodes = [
  { name: "North Pacific", lat: 42, lng: 170 },
  { name: "Mid Pacific", lat: 35, lng: 180 },
  { name: "South Pacific", lat: 25, lng: 160 },
  { name: "Near Hawaii", lat: 21, lng: -157 },
  { name: "Aleutian", lat: 52, lng: 170 },
  { name: "Midway", lat: 28.2, lng: -177.4 }
];

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const routes = [];
for (let i = 0; i < 1000; i++) {
  const from = pick(cnPorts);
  const to = pick(usPorts);
  // 随机1~2个海运节点
  const nodeCount = Math.random() < 0.5 ? 1 : 2;
  let nodes = [];
  if (nodeCount === 1) {
    nodes = [pick(seaNodes)];
  } else {
    // 保证顺序合理
    let n1 = pick(seaNodes);
    let n2 = pick(seaNodes);
    while (n2 === n1) n2 = pick(seaNodes);
    // 按纬度排序，模拟更自然的路径
    nodes = [n1, n2].sort((a, b) => a.lat - b.lat);
  }
  routes.push([
    { lat: from.lat, lng: from.lng },
    ...nodes.map(n => ({ lat: n.lat, lng: n.lng })),
    { lat: to.lat, lng: to.lng }
  ]);
}
console.log(routes.map(r => JSON.stringify(r)).join(',\n'));
# Earth Visualization

基于 [Three.js](https://threejs.org/) 的地球可视化项目，展示地球表面及主要航运线路，并支持交互缩放与旋转。

## 技术栈

- [TypeScript](https://www.typescriptlang.org/)
- [Three.js](https://threejs.org/) —— 3D 可视化
- [Vite](https://vitejs.dev/) —— 前端开发与构建工具

## 项目结构

- `src/`：主要 TypeScript 源码
- `public/`：静态资源（地球贴图、航运线路数据等）
- `index.html`：入口 HTML 文件

## 启动与调试

1. 安装依赖

   ```sh
   npm install
   ```

2. 启动开发服务器（支持热更新和调试）

   ```sh
   npm run dev
   ```

   启动后访问 [http://localhost:5173](http://localhost:5173)（端口可能因环境不同而变化，终端会显示实际端口）。

3. 调试

   - 推荐使用 [Visual Studio Code](https://code.visualstudio.com/)。
   - 可直接在 `src/` 目录下设置断点，利用浏览器开发者工具调试 TypeScript 源码（Vite 支持源码映射）。
   - 调整地球缩放可用右上角滑块，鼠标拖拽旋转地球。

## 构建生产包

```sh
npm run build
```

构建输出在 `dist/` 目录。

---

如需自定义航运线路或地球贴图，请替换 `public/` 目录下的相关文件。
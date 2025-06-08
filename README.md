# Earth Visualization

A 3D Earth visualization project based on [Three.js](https://threejs.org/), displaying the Earth's surface with major shipping routes and supporting interactive zooming and rotation.

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Three.js](https://threejs.org/) — 3D visualization
- [Vite](https://vitejs.dev/) — Frontend development and build tool

## Project Structure

- `src/`: Main TypeScript source code
- `public/`: Static assets (Earth textures, shipping route data, etc.)
- `index.html`: Entry HTML file

## Development & Debugging

1. Install dependencies

   ```sh
   npm install
   ```

2. Start development server (with hot reload and debugging support)

   ```sh
   npm run dev
   ```

   After starting, visit [http://localhost:5173](http://localhost:5173) (port may vary depending on your environment, the terminal will display the actual port).

3. Debugging

   - [Visual Studio Code](https://code.visualstudio.com/) is recommended.
   - You can set breakpoints directly in the `src/` directory and debug TypeScript source code using browser developer tools (Vite supports source mapping).
   - Adjust Earth zoom using the slider in the top-right corner, and drag with mouse to rotate the Earth.

## Production Build

```sh
npm run build
```

Build output is in the `dist/` directory.

---

To customize shipping routes or Earth textures, replace the relevant files in the `public/` directory.
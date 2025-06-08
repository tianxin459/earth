# 🌍 Earth Visualization - Developer Guide

A comprehensive 3D globe visualization platform for maritime logistics and global trade analytics.

![Earth Visualization](https://img.shields.io/badge/React-18.2.0-blue) ![Three.js](https://img.shields.io/badge/Three.js-0.176.0-green) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue) ![Vite](https://img.shields.io/badge/Vite-6.3.5-purple)

## 🚀 Quick Start

### Prerequisites
- Node.js 16.0+ 
- npm 8.0+
- Modern browser with WebGL 2.0 support

### Installation
```bash
# Clone and install
git clone <repository-url>
cd earth
npm install

# Start development server
npm run dev
```

**🌐 Access: http://localhost:5173**

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── PieChart.tsx     # D3.js pie charts for KPIs
│   ├── Timeline.tsx     # Week navigation
│   └── Dashboard.tsx    # Analytics panel
├── config/              # Configuration files
│   ├── dayNightShader.ts # Custom GLSL shaders
│   └── utils.ts         # Utility functions
├── EarthLine.tsx        # 🌍 Core 3D globe component
└── App.tsx              # Main application
```

## 🔧 Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Production build with TypeScript |
| `npm run preview` | Preview production build |

## 🎯 Key Features

- **🌍 Interactive 3D Globe**: Real-time Earth with day/night cycles
- **🚢 Shipping Routes**: Dynamic arc visualization between ports
- **📊 Analytics Dashboard**: KPI charts and route statistics
- **📅 Timeline Navigation**: Week-by-week data exploration
- **📱 Responsive Design**: Collapsible UI for all screen sizes

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 18.2.0 |
| **Three.js** | 3D Graphics | 0.176.0 |
| **Globe.gl** | Globe Rendering | 2.41.4 |
| **D3.js** | Data Visualization | 7.9.0 |
| **TypeScript** | Type Safety | 5.8.3 |
| **Styled Components** | CSS-in-JS | 6.1.18 |
| **Vite** | Build Tool | 6.3.5 |

## 📂 Data Structure

### Route Data
```typescript
interface RouteData {
  fromPort: string;    // Source port
  toPort: string;      // Destination port
  poCount: number;     // Purchase orders
  cost: number;        // Route cost
  wmweek: string;      // Week identifier
}
```

### Port Data
```typescript
interface PortData {
  name: string;        // Port name
  lat: number;         // Latitude
  lng: number;         // Longitude
}
```

### Statistics Data
```json
{
  "wmweek": "202517",
  "sataistics": {
    "otif": { "value": 95.5, "unit": "%" },
    "ontimedelivery": { "value": 92.3, "unit": "%" },
    "instock": { "value": 88.7, "unit": "%" }
  }
}
```

## 🎨 Component Usage

### PieChart Component
```tsx
<PieChart 
  value={95.5} 
  title="OTIF" 
  width={120} 
  height={120} 
  unit="%" 
/>
```

### Timeline Component
```tsx
<Timeline 
  wmweeks={availableWeeks}
  currentWmweek={selectedWeek}
  onWmweekChange={handleWeekChange}
/>
```

## 🚀 Deployment

### GitHub Pages
```bash
# Build and deploy
npm run build
./github_pages_deploy.sh
```

### Static Hosting
```bash
# Build for production
npm run build

# Serve from dist/ directory
# Configure server for SPA routing
```

## 🔍 Performance Tips

### WebGL Optimization
- **Reduce Arc Resolution**: Lower `arcCurveResolution` for better FPS
- **Limit Labels**: Filter ports by traffic volume
- **Texture Compression**: Use optimized image formats

### Bundle Optimization
- **Code Splitting**: Components loaded on demand
- **Tree Shaking**: Unused code automatically removed
- **Asset Optimization**: Images compressed for web

## 🐛 Common Issues

### WebGL Not Supported
```typescript
// Check WebGL support
if (!canvas.getContext('webgl2')) {
  // Show fallback UI
}
```

### Performance on Low-End Devices
```typescript
// Detect device performance
const isLowEnd = /Android|iPhone|iPad/.test(navigator.userAgent);
if (isLowEnd) {
  // Reduce visual quality
  myGlobe.arcCurveResolution(32);
}
```

### Data Loading Errors
```typescript
try {
  const response = await fetch('/data/routes.json');
  if (!response.ok) throw new Error('Failed to load data');
  const data = await response.json();
} catch (error) {
  console.error('Data loading failed:', error);
  // Show error message to user
}
```

## 📊 Browser Support

| Browser | Minimum Version | WebGL Support |
|---------|----------------|---------------|
| Chrome | 90+ | ✅ Full Support |
| Firefox | 88+ | ✅ Full Support |
| Safari | 14+ | ⚠️ Limited Support |
| Edge | 90+ | ✅ Full Support |

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Development Guidelines
- **TypeScript**: All new code must be typed
- **Components**: Use functional components with hooks
- **Styling**: Use Styled Components for CSS-in-JS
- **Performance**: Consider WebGL performance implications
- **Testing**: Test on multiple browsers and devices

## 📄 Documentation

- **[📋 Complete Documentation](./PROJECT_DOCUMENTATION.md)** - Comprehensive project guide
- **[🥧 Pie Chart Implementation](./PIECHAR_IMPLEMENTATION.md)** - D3.js chart details
- **[📖 Component API](./PROJECT_DOCUMENTATION.md#-api-reference)** - Component interfaces
- **[🚀 Deployment Guide](./PROJECT_DOCUMENTATION.md#-deployment-guide)** - Production deployment

## 🔗 Useful Links

- **[Three.js Documentation](https://threejs.org/docs/)**
- **[Globe.gl API](https://github.com/vasturiano/globe.gl)**
- **[D3.js Examples](https://observablehq.com/@d3)**
- **[React TypeScript Guide](https://react-typescript-cheatsheet.netlify.app/)**
- **[Vite Configuration](https://vitejs.dev/config/)**

## 📧 Support

For questions or issues:
- **Check existing documentation**
- **Search GitHub issues**
- **Create new issue with detailed description**

---

**🌍 Built with passion for data visualization and global maritime analytics**

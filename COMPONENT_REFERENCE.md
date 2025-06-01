# 📦 Component Reference Guide

This guide provides detailed information about all React components in the Earth Visualization project.

## 🌍 Core Components

### EarthLine.tsx
**Main 3D globe visualization component**

```typescript
interface EarthLineProps {
  fromData: any[];           // Source port data
  toData: any[];            // Destination port data
  routeData: any[];         // Shipping route data
  isDashboardCollapsed: boolean; // Dashboard visibility state
}
```

**Key Features:**
- ✅ Three.js WebGL rendering
- ✅ Globe.gl integration
- ✅ Custom day/night shaders
- ✅ Interactive route arcs
- ✅ Multi-level port labels
- ✅ Auto-rotation with controls

**Usage:**
```tsx
<EarthLine 
  fromData={fromPorts}
  toData={toPorts}
  routeData={shippingRoutes}
  isDashboardCollapsed={isCollapsed}
/>
```

**Performance Notes:**
- Uses WebGL 2.0 for optimal rendering
- Implements LOD (Level of Detail) for arcs
- Throttles updates to 60fps
- Manages WebGL memory efficiently

---

### Dashboard.tsx
**Statistics and analytics panel**

```typescript
interface DashboardProps {
  routeData: any[];         // Route data for calculations
  isCollapsed: boolean;     // Panel visibility state
  onToggleCollapse: () => void; // Toggle callback
}
```

**Features:**
- 📊 Route statistics (count, cost, POs)
- 📈 Weekly KPI charts
- 🎛️ Collapsible interface
- 📱 Responsive layout

**Usage:**
```tsx
<Dashboard 
  routeData={routes}
  isCollapsed={collapsed}
  onToggleCollapse={handleToggle}
/>
```

---

## 📊 Visualization Components

### PieChart.tsx
**D3.js donut chart for KPI visualization**

```typescript
interface PieChartProps {
  value: number;            // Percentage (0-100)
  title: string;            // Chart title
  width?: number;           // Chart width (default: 120)
  height?: number;          // Chart height (default: 120)
  unit?: string;            // Unit display (default: '%')
}
```

**Technical Implementation:**
```typescript
// D3.js pie chart creation
const pie = d3.pie<typeof pieData[0]>()
  .value(d => d.value)
  .sort(null)
  .startAngle(-Math.PI / 2);

const arc = d3.arc<d3.PieArcDatum<typeof pieData[0]>>()
  .innerRadius(radius * 0.6)
  .outerRadius(radius);
```

**Usage Examples:**
```tsx
// OTIF Performance Chart
<PieChart value={95.5} title="OTIF" unit="%" />

// Custom Size Chart
<PieChart 
  value={87.2} 
  title="Delivery Rate" 
  width={100} 
  height={100} 
/>
```

**Styling:**
- Uses project color theme (#4dd0e1)
- Responsive SVG rendering
- Smooth animations on load
- Hover effects available

---

### StatisticsChart.tsx
**D3.js bar chart for detailed statistics**

```typescript
interface StatisticsChartProps {
  data: StatisticsData[];   // Statistics data array
  width?: number;           // Chart width (default: 280)
  height?: number;          // Chart height (default: 200)
}
```

**Features:**
- 📊 Animated bar chart
- 🖱️ Interactive tooltips
- 📏 Auto-scaling axes
- 🎨 Consistent theming

---

### Timeline.tsx
**Week navigation component**

```typescript
interface TimelineProps {
  wmweeks: string[];        // Available weeks array
  currentWmweek: string;    // Selected week
  onWmweekChange: (week: string) => void; // Change handler
}
```

**Features:**
- 📅 Linear timeline visualization
- 🔘 Interactive week dots
- ◀️▶️ Previous/Next navigation
- 📱 Responsive touch support

**Usage:**
```tsx
<Timeline 
  wmweeks={['202515', '202516', '202517']}
  currentWmweek="202516"
  onWmweekChange={setSelectedWeek}
/>
```

---

## 🏷️ UI Components

### Header.tsx
**Application header component**

```typescript
interface HeaderProps {
  title?: string; // Header title (default: "PO ANALYTICS VISUAL CENTER")
}
```

**Features:**
- 🎯 Fixed positioning
- 🌟 Backdrop blur effect
- 🎨 Consistent branding
- 📱 Responsive text

---

### WeeklyStatsDashboard.tsx
**Weekly KPI dashboard container**

```typescript
interface WeeklyStatsDashboardProps {
  data: StatisticsData[];   // Weekly statistics
  currentWeek?: string;     // Selected week
}
```

**Layout:**
```tsx
<WeeklyStatsDashboard data={statsData} currentWeek="202517">
  {/* Automatically renders 3 pie charts: */}
  {/* - OTIF Chart */}
  {/* - On Time Delivery Chart */}
  {/* - In Stock Chart */}
</WeeklyStatsDashboard>
```

---

## 🖱️ Tooltip Components

### PortTooltip.tsx
**Port information tooltip**

```typescript
interface PortTooltipProps {
  port: string;             // Port name
  cost: number;             // Total cost
  poCount: number;          // PO count
  type: "from" | "to";      // Port type
}
```

**Features:**
- 💰 Formatted cost display (K/M/B/T)
- 🎨 Color-coded by port type
- ✨ Glow effects based on data intensity
- 📊 Multiple data points display

---

### ArcTooltip.tsx
**Route arc tooltip**

```typescript
interface ArcTooltipProps {
  srcPort: string;          // Source port
  dstPort: string;          // Destination port
  poCount: number;          // Purchase orders
  cost: number;             // Route cost
}
```

**Visual Design:**
- 🌊 Source port (cyan highlight)
- 🎯 Destination port (magenta highlight)
- ➡️ Direction arrow
- 📈 Formatted statistics

---

## 🛠️ Utility Components

### PortTooltipRenderer.tsx & ArcTooltipRenderer.tsx
**Server-side rendering utilities for Globe.gl tooltips**

```typescript
// Convert React components to HTML strings
export const renderPortTooltip = (props): string => {
  return ReactDOMServer.renderToString(<PortTooltip {...props} />);
};

export const renderArcTooltip = (props): string => {
  return ReactDOMServer.renderToString(<ArcTooltip {...props} />);
};
```

**Usage in Globe.gl:**
```typescript
myGlobe
  .arcLabel((d) => renderArcTooltip({
    srcPort: d.srcPort,
    dstPort: d.dstPort,
    poCount: d.poCount,
    cost: d.cost
  }))
  .labelLabel((d) => renderPortTooltip({
    port: d.port,
    cost: d.totalCost,
    poCount: d.totalPOCount,
    type: d.type
  }));
```

---

## 🎨 Styling Guide

### Design System
```typescript
// Color Palette
const colors = {
  primary: '#4dd0e1',      // Cyan blue
  secondary: '#ffa500',    // Orange
  success: '#00ff00',      // Green
  warning: '#ff8c00',      // Dark orange
  error: '#ff0080',        // Magenta
  text: '#ebebeb',         // Light gray
  background: 'rgba(15, 25, 35, 0.8)' // Dark blue
};

// Typography
font-family: 'Courier New', monospace;
font-size: 12px;
letter-spacing: 0.5px;
text-transform: uppercase;
```

### Styled Components Patterns
```typescript
// Standard component wrapper
const ComponentContainer = styled.div`
  background: linear-gradient(135deg, 
    rgba(30, 35, 40, 0.8), 
    rgba(20, 25, 30, 0.8)
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(77, 208, 225, 0.2);
  border-radius: 12px;
  padding: 16px;
`;

// Interactive element
const InteractiveElement = styled.button`
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(77, 208, 225, 0.3);
  }
`;
```

---

## 🔧 Development Patterns

### Component Creation Template
```typescript
import React from 'react';
import styled from 'styled-components';

interface MyComponentProps {
  // Define props with TypeScript
}

const Container = styled.div`
  // Styled component styles
`;

const MyComponent: React.FC<MyComponentProps> = ({ ...props }) => {
  return (
    <Container>
      {/* Component JSX */}
    </Container>
  );
};

export default MyComponent;
```

### Hook Usage Patterns
```typescript
// State management
const [data, setData] = useState<DataType[]>([]);
const [loading, setLoading] = useState(true);

// Computed values
const processedData = useMemo(() => {
  return data.map(processFunction);
}, [data]);

// Side effects
useEffect(() => {
  loadData().then(setData);
}, []);

// Cleanup
useEffect(() => {
  return () => {
    cleanup();
  };
}, []);
```

### Performance Optimization
```typescript
// Memoize expensive calculations
const ExpensiveComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => 
    expensiveCalculation(data), [data]
  );
  
  return <div>{processedData}</div>;
});

// Callback memoization
const handleClick = useCallback((id: string) => {
  onItemClick(id);
}, [onItemClick]);
```

---

## 📚 Best Practices

### TypeScript Usage
- ✅ Define interfaces for all props
- ✅ Use generic types for reusable components
- ✅ Avoid `any` type when possible
- ✅ Export interfaces for external use

### Performance
- ✅ Use React.memo for pure components
- ✅ Implement useMemo for expensive calculations
- ✅ Use useCallback for event handlers
- ✅ Clean up resources in useEffect cleanup

### Accessibility
- ✅ Use semantic HTML elements
- ✅ Add ARIA labels for screen readers
- ✅ Ensure keyboard navigation support
- ✅ Maintain color contrast ratios

### Testing
- ✅ Write unit tests for utility functions
- ✅ Test component rendering with different props
- ✅ Mock external dependencies
- ✅ Test user interactions

---

*This component reference provides the foundation for understanding and extending the Earth Visualization project's React component architecture.*

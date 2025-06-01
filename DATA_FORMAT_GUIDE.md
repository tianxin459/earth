# 📊 Data Format & API Guide

This guide explains all data structures, formats, and APIs used in the Earth Visualization project.

## 📋 Table of Contents
1. [Data Sources](#-data-sources)
2. [Core Data Structures](#-core-data-structures)
3. [API Endpoints](#-api-endpoints)
4. [Data Processing](#-data-processing)
5. [Data Validation](#-data-validation)
6. [Custom Data Integration](#-custom-data-integration)

---

## 📁 Data Sources

### Static Data Files (JSON)
All data files are located in the `public/data/` directory and loaded via HTTP requests.

| File | Description | Update Frequency |
|------|-------------|------------------|
| `from.json` | Source ports with coordinates | Static |
| `to.json` | Destination ports with coordinates | Static |
| `route.json` | Shipping routes with costs/POs | Weekly |
| `wmweek.json` | Available weeks for navigation | Weekly |
| `statistics.json` | KPI data (OTIF, delivery, stock) | Weekly |
| `statistics_detail.json` | Detailed performance metrics | Weekly |

---

## 🏗️ Core Data Structures

### 1. Port Data Structure

#### Source Ports (`from.json`)
```typescript
interface SourcePort {
  name: string;           // Port name (e.g., "Shanghai")
  lat: number;            // Latitude in decimal degrees
  lng: number;            // Longitude in decimal degrees
}
```

**Example:**
```json
[
  {
    "name": "Shanghai",
    "lat": 31.2304,
    "lng": 121.4737
  },
  {
    "name": "Ningbo",
    "lat": 29.8683,
    "lng": 121.5440
  }
]
```

#### Destination Ports (`to.json`)
```typescript
interface DestinationPort {
  idc: string;            // Port identifier code
  lat: number;            // Latitude in decimal degrees
  lng: number;            // Longitude in decimal degrees
}
```

**Example:**
```json
[
  {
    "idc": "USLAX",
    "lat": 33.7405,
    "lng": -118.2775
  },
  {
    "idc": "USNYC",
    "lat": 40.6840,
    "lng": -74.0419
  }
]
```

### 2. Route Data Structure

#### Shipping Routes (`route.json`)
```typescript
interface ShippingRoute {
  fromPort: string;       // Source port name (matches from.json)
  toPort: string;         // Destination port code (matches to.json)
  poCount: number;        // Purchase order count
  cost: number;           // Route cost in USD
  wmweek: string;         // Week identifier (YYYYWW format)
}
```

**Example:**
```json
[
  {
    "fromPort": "Shanghai",
    "toPort": "USLAX",
    "poCount": 145,
    "cost": 2500000,
    "wmweek": "202517"
  }
]
```

### 3. Statistics Data Structure

#### Weekly KPIs (`statistics.json`)
```typescript
interface WeeklyStatistics {
  wmweek: string;         // Week identifier (YYYYWW)
  sataistics: {           // Statistics object (note: typo preserved for compatibility)
    [key: string]: {
      description: string; // Human-readable description
      value: number;       // Numeric value
      unit: string;        // Unit of measurement
    }
  }
}
```

**Standard KPIs:**
- `otif`: On Time In Full percentage
- `ontimedelivery`: On-time delivery percentage  
- `instock`: In-stock percentage
- `ordercreation_qty`: Order creation quantity

**Example:**
```json
[
  {
    "wmweek": "202517",
    "sataistics": {
      "otif": {
        "description": "On Time In Full - A measure of delivery performance.",
        "value": 95.5,
        "unit": "%"
      },
      "ontimedelivery": {
        "description": "Percentage of orders delivered on time.",
        "value": 92.3,
        "unit": "%"
      },
      "instock": {
        "description": "Percentage of items in stock.",
        "value": 88.7,
        "unit": "%"
      }
    }
  }
]
```

### 4. Week Navigation Data

#### Available Weeks (`wmweek.json`)
```typescript
type WeekIdentifier = string; // Format: YYYYWW (e.g., "202517")
```

**Example:**
```json
[
  "202515",
  "202516", 
  "202517",
  "202518"
]
```

**Week Format Convention:**
- `YYYY`: 4-digit year
- `WW`: 2-digit week number (01-53)
- Example: `202517` = Year 2025, Week 17

---

## 🌐 API Endpoints

### Data Loading Endpoints

| Endpoint | Method | Response Type | Description |
|----------|---------|---------------|-------------|
| `/data/from.json` | GET | `SourcePort[]` | Source port coordinates |
| `/data/to.json` | GET | `DestinationPort[]` | Destination port coordinates |
| `/data/route.json` | GET | `ShippingRoute[]` | Shipping route data |
| `/data/wmweek.json` | GET | `WeekIdentifier[]` | Available weeks |
| `/data/statistics.json` | GET | `WeeklyStatistics[]` | KPI statistics |

### Loading Implementation
```typescript
// Data loading utility
async function loadData<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to load ${endpoint}:`, error);
    throw error;
  }
}

// Usage examples
const fromPorts = await loadData<SourcePort[]>('/data/from.json');
const toPorts = await loadData<DestinationPort[]>('/data/to.json');
const routes = await loadData<ShippingRoute[]>('/data/route.json');
```

### Error Handling
```typescript
// Comprehensive error handling
const [loadingState, setLoadingState] = useState({
  from: { loading: true, error: null, data: null },
  to: { loading: true, error: null, data: null },
  routes: { loading: true, error: null, data: null }
});

const loadAllData = async () => {
  const endpoints = [
    { key: 'from', url: '/data/from.json' },
    { key: 'to', url: '/data/to.json' },
    { key: 'routes', url: '/data/route.json' }
  ];

  for (const endpoint of endpoints) {
    try {
      const data = await loadData(endpoint.url);
      setLoadingState(prev => ({
        ...prev,
        [endpoint.key]: { loading: false, error: null, data }
      }));
    } catch (error) {
      setLoadingState(prev => ({
        ...prev,
        [endpoint.key]: { loading: false, error: error.message, data: null }
      }));
    }
  }
};
```

---

## ⚙️ Data Processing

### Port Data Processing

#### Coordinate Validation
```typescript
function validateCoordinates(lat: number, lng: number): boolean {
  return (
    typeof lat === 'number' && 
    typeof lng === 'number' &&
    lat >= -90 && lat <= 90 &&
    lng >= -180 && lng <= 180 &&
    !isNaN(lat) && !isNaN(lng)
  );
}
```

#### Port Mapping
```typescript
// Create lookup maps for efficient port matching
function createPortMaps(fromData: SourcePort[], toData: DestinationPort[]) {
  const fromMap = new Map(fromData.map(port => [port.name, port]));
  const toMap = new Map(toData.map(port => [port.idc, port]));
  
  return { fromMap, toMap };
}
```

### Route Data Processing

#### Route Enrichment
```typescript
interface EnrichedRoute extends ShippingRoute {
  srcPortInfo: { lat: number; lng: number };
  dstPortInfo: { lat: number; lng: number };
  distance?: number;
}

function enrichRoutes(
  routes: ShippingRoute[],
  fromMap: Map<string, SourcePort>,
  toMap: Map<string, DestinationPort>
): EnrichedRoute[] {
  return routes
    .map(route => {
      const srcPort = fromMap.get(route.fromPort);
      const dstPort = toMap.get(route.toPort);
      
      if (!srcPort || !dstPort) {
        console.warn(`Missing port data for route: ${route.fromPort} → ${route.toPort}`);
        return null;
      }
      
      return {
        ...route,
        srcPortInfo: { lat: srcPort.lat, lng: srcPort.lng },
        dstPortInfo: { lat: dstPort.lat, lng: dstPort.lng }
      };
    })
    .filter(route => route !== null);
}
```

#### Statistics Calculation
```typescript
interface RouteStatistics {
  totalRoutes: number;
  totalCost: number;
  totalPOCount: number;
  avgCostPerRoute: number;
  avgPOCountPerRoute: number;
  costByPortType: {
    from: Record<string, number>;
    to: Record<string, number>;
  };
}

function calculateRouteStatistics(routes: EnrichedRoute[]): RouteStatistics {
  const totalRoutes = routes.length;
  const totalCost = routes.reduce((sum, route) => sum + route.cost, 0);
  const totalPOCount = routes.reduce((sum, route) => sum + route.poCount, 0);
  
  const costByPortType = {
    from: {},
    to: {}
  };
  
  routes.forEach(route => {
    // Aggregate costs by source port
    costByPortType.from[route.fromPort] = 
      (costByPortType.from[route.fromPort] || 0) + route.cost;
      
    // Aggregate costs by destination port
    costByPortType.to[route.toPort] = 
      (costByPortType.to[route.toPort] || 0) + route.cost;
  });
  
  return {
    totalRoutes,
    totalCost,
    totalPOCount,
    avgCostPerRoute: totalRoutes > 0 ? totalCost / totalRoutes : 0,
    avgPOCountPerRoute: totalRoutes > 0 ? totalPOCount / totalRoutes : 0,
    costByPortType
  };
}
```

### Geographic Calculations

#### Great Circle Distance
```typescript
function greatCircleDistance(
  start: { lat: number; lng: number },
  end: { lat: number; lng: number }
): number {
  const toRadians = (degrees: number) => degrees * (Math.PI / 180);
  
  const lat1 = toRadians(start.lat);
  const lat2 = toRadians(end.lat);
  const deltaLat = toRadians(end.lat - start.lat);
  const deltaLng = toRadians(end.lng - start.lng);
  
  const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
            
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
  return c; // Returns distance in radians
}
```

#### Shortest Path Calculation
```typescript
function getShortestPath(
  start: { lat: number; lng: number },
  end: { lat: number; lng: number }
) {
  // Normalize longitudes to [-180, 180]
  const normalizeLng = (lng: number) => ((lng + 540) % 360) - 180;
  
  const startLng = normalizeLng(start.lng);
  const endLng = normalizeLng(end.lng);
  
  // Calculate shortest longitude difference
  let lngDiff = endLng - startLng;
  if (Math.abs(lngDiff) > 180) {
    lngDiff = lngDiff > 0 ? lngDiff - 360 : lngDiff + 360;
  }
  
  return {
    start: { lat: start.lat, lng: startLng },
    end: { lat: end.lat, lng: startLng + lngDiff }
  };
}
```

---

## ✅ Data Validation

### Schema Validation
```typescript
// Port validation schema
function validateSourcePort(port: any): port is SourcePort {
  return (
    typeof port === 'object' &&
    typeof port.name === 'string' &&
    port.name.length > 0 &&
    typeof port.lat === 'number' &&
    typeof port.lng === 'number' &&
    validateCoordinates(port.lat, port.lng)
  );
}

function validateDestinationPort(port: any): port is DestinationPort {
  return (
    typeof port === 'object' &&
    typeof port.idc === 'string' &&
    port.idc.length > 0 &&
    typeof port.lat === 'number' &&
    typeof port.lng === 'number' &&
    validateCoordinates(port.lat, port.lng)
  );
}

// Route validation schema
function validateRoute(route: any): route is ShippingRoute {
  return (
    typeof route === 'object' &&
    typeof route.fromPort === 'string' &&
    typeof route.toPort === 'string' &&
    typeof route.poCount === 'number' &&
    typeof route.cost === 'number' &&
    typeof route.wmweek === 'string' &&
    route.poCount >= 0 &&
    route.cost >= 0 &&
    /^\d{6}$/.test(route.wmweek) // YYYYWW format
  );
}
```

### Data Sanitization
```typescript
function sanitizeNumericValue(value: any, defaultValue: number = 0): number {
  const num = parseFloat(value);
  return isNaN(num) || !isFinite(num) ? defaultValue : Math.max(0, num);
}

function sanitizeString(value: any): string {
  return typeof value === 'string' ? value.trim() : '';
}

function sanitizeRoute(route: any): ShippingRoute | null {
  try {
    const sanitized = {
      fromPort: sanitizeString(route.fromPort),
      toPort: sanitizeString(route.toPort),
      poCount: sanitizeNumericValue(route.poCount),
      cost: sanitizeNumericValue(route.cost),
      wmweek: sanitizeString(route.wmweek)
    };
    
    return validateRoute(sanitized) ? sanitized : null;
  } catch (error) {
    console.warn('Failed to sanitize route:', route, error);
    return null;
  }
}
```

---

## 🔧 Custom Data Integration

### Adding New Data Sources

#### 1. Define New Data Structure
```typescript
// Add to types/data.ts
interface CustomMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  category: 'performance' | 'cost' | 'quality';
  timestamp: string;
}
```

#### 2. Create Data File
```json
// public/data/custom-metrics.json
[
  {
    "id": "fuel-efficiency",
    "name": "Fuel Efficiency",
    "value": 85.2,
    "unit": "%",
    "category": "performance",
    "timestamp": "2025-06-01T00:00:00Z"
  }
]
```

#### 3. Add Loading Logic
```typescript
// In App.tsx or custom hook
const [customMetrics, setCustomMetrics] = useState<CustomMetric[]>([]);

useEffect(() => {
  loadData<CustomMetric[]>('/data/custom-metrics.json')
    .then(setCustomMetrics)
    .catch(error => console.error('Failed to load custom metrics:', error));
}, []);
```

#### 4. Create Visualization Component
```typescript
// components/CustomMetricsChart.tsx
interface CustomMetricsChartProps {
  data: CustomMetric[];
  category?: string;
}

const CustomMetricsChart: React.FC<CustomMetricsChartProps> = ({ 
  data, 
  category 
}) => {
  const filteredData = useMemo(() => 
    category ? data.filter(m => m.category === category) : data,
    [data, category]
  );
  
  // D3.js visualization implementation
  // ...
};
```

### Data Update Workflows

#### Automated Data Updates
```typescript
// Polling for data updates
function useDataPolling(endpoint: string, interval: number = 60000) {
  const [data, setData] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  
  useEffect(() => {
    const pollData = async () => {
      try {
        const response = await fetch(`${endpoint}?t=${Date.now()}`);
        const newData = await response.json();
        setData(newData);
        setLastUpdate(Date.now());
      } catch (error) {
        console.error('Data polling failed:', error);
      }
    };
    
    // Initial load
    pollData();
    
    // Set up polling interval
    const intervalId = setInterval(pollData, interval);
    
    return () => clearInterval(intervalId);
  }, [endpoint, interval]);
  
  return { data, lastUpdate };
}
```

#### Real-time Data Integration
```typescript
// WebSocket data updates
function useWebSocketData(url: string) {
  const [data, setData] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('connecting');
  
  useEffect(() => {
    const ws = new WebSocket(url);
    
    ws.onopen = () => setConnectionStatus('connected');
    ws.onclose = () => setConnectionStatus('disconnected');
    ws.onerror = () => setConnectionStatus('error');
    
    ws.onmessage = (event) => {
      try {
        const newData = JSON.parse(event.data);
        setData(newData);
      } catch (error) {
        console.error('Failed to parse WebSocket data:', error);
      }
    };
    
    return () => {
      ws.close();
    };
  }, [url]);
  
  return { data, connectionStatus };
}
```

---

## 📝 Data Format Examples

### Complete Route Data Example
```json
{
  "routes": [
    {
      "fromPort": "Shanghai",
      "toPort": "USLAX",
      "poCount": 145,
      "cost": 2500000,
      "wmweek": "202517"
    }
  ],
  "metadata": {
    "generated": "2025-06-01T10:00:00Z",
    "version": "1.2.0",
    "total_routes": 1,
    "data_quality": "validated"
  }
}
```

### Statistics with Extended Metrics
```json
{
  "wmweek": "202517",
  "sataistics": {
    "otif": {
      "description": "On Time In Full - A measure of delivery performance.",
      "value": 95.5,
      "unit": "%",
      "target": 95.0,
      "trend": "improving"
    },
    "custom_metric": {
      "description": "Custom business metric",
      "value": 87.3,
      "unit": "score",
      "target": 90.0,
      "trend": "stable"
    }
  }
}
```

---

*This data format guide provides comprehensive information for understanding, validating, and extending the data structures used throughout the Earth Visualization project.*

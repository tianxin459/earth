export interface PortInfo {
  lat: number;
  lng: number;
}
export interface FromPortInfo extends PortInfo {
  name: string;
}
export interface ToPortInfo extends PortInfo {
  portname: string;
  idc: number;
}

export interface TypePortInfo extends PortInfo {
  type: "from" | "to";
  port: string | number;
}

export interface WeekOrder {
  fromPort: string;
  toPort: number;
  poCount: number;
  cost: number;
}

export interface WeekOrderCollection {
  wmweek: string;
  routeData: WeekOrder[];
}

export interface StatisticsData {
  wmweek: string;
  statistics: {
    [key: string]: {
      description: string;
      value: number;
      unit: string;
    };
  };
}

export interface WeekOrderRouteInfo extends WeekOrder {
  srcPort: string;
  dstPort: number;
  srcPortInfo: PortInfo;
  dstPortInfo: PortInfo;
}

export interface ArcRouteInfo extends WeekOrderRouteInfo {
  srcLat: number;
  srcLng: number;
  dstLat: number;
  dstLng: number;
  // 添加优化字段
  distance: number;
  costCategory: "high" | "medium" | "low";
  // 优先级字段用于渲染顺序
  priority: number;
}

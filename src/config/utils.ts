import { Vector3 } from "three";

// Returns the sun's longitude and declination angle based on current Beijing time
export function getSunPosition(): [number, number] {
  // Get current Beijing time
  const now = new Date();
  const beijingOffset = 8 * 60; // Beijing is UTC+8
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const beijing = new Date(utc + beijingOffset * 60000);

  // Sun longitude: At Beijing noon, the sun is at 120°E
  const hours = beijing.getHours() + beijing.getMinutes() / 60;
  const lng = 120 - (hours - 12) * 15;

  // Sun declination angle calculation
  const dayOfYear = Math.floor(
    (beijing.getTime() - new Date(beijing.getFullYear(), 0, 0).getTime()) /
      86400000
  );
  // Approximate declination angle formula
  const decl = -23.44 * Math.cos(((2 * Math.PI) / 365) * (dayOfYear + 10));
  return [lng, decl];
}

// Calculate sun direction as a Vector3
export const calculateSunDirection = () => {
  const [lng, lat] = getSunPosition();
  // Convert latitude and longitude to spherical coordinates
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((90 - lng) * Math.PI) / 180;
  // Return direction vector
  return new Vector3(
    Math.sin(phi) * Math.cos(theta),
    Math.cos(phi),
    Math.sin(phi) * Math.sin(theta)
  );
};

export function getTotals(d: any, fromPortTotals: any, toPortTotals: any) {
  if (d.type === "from") {
    return fromPortTotals[d.port] || { totalCost: 0, totalPOCount: 0 };
  } else if (d.type === "to") {
    return toPortTotals[d.port] || { totalCost: 0, totalPOCount: 0 };
  } else {
    return { totalCost: 0, totalPOCount: 0 };
  }
}

  export const formatWMWeek = (wmweek: string) => {
    if (wmweek.length === 6) {
      const year = wmweek.substring(0, 4);
      const week = wmweek.substring(4);
      return `${year}-${week}`;
    }
    return wmweek;
  };
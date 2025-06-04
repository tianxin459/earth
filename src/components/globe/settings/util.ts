import _ from "lodash";
import type {
    FromPortInfo,
    ToPortInfo,
    WeekOrder,
    WeekOrderRouteInfo,
    ArcRouteInfo,
    TypePortInfo,
} from "../../../type";

// Helper function to calculate great circle distance in radians
export function greatCircleDistance(
    start: { lat: number; lng: number },
    end: { lat: number; lng: number }
): number {
    const lat1 = (start.lat * Math.PI) / 180;
    const lat2 = (end.lat * Math.PI) / 180;
    const deltaLat = ((end.lat - start.lat) * Math.PI) / 180;
    const deltaLng = ((end.lng - start.lng) * Math.PI) / 180;

    const a =
        Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
        Math.cos(lat1) *
            Math.cos(lat2) *
            Math.sin(deltaLng / 2) *
            Math.sin(deltaLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return c; // Returns distance in radians
}

// Helper function to find the shortest great circle path avoiding poles
export function getGreatCirclePath(
    start: { lat: number; lng: number },
    end: { lat: number; lng: number }
) {
    // Normalize longitudes to [-180, 180]
    const normalizeLng = (lng: number) => ((lng + 540) % 360) - 180;

    const startLng = normalizeLng(start.lng);
    const endLng = normalizeLng(end.lng);

    // Calculate the shortest longitude difference
    let lngDiff = endLng - startLng;
    if (Math.abs(lngDiff) > 180) {
        lngDiff = lngDiff > 0 ? lngDiff - 360 : lngDiff + 360;
    }

    const finalEndLng = startLng + lngDiff;

    return {
        start: { lat: start.lat, lng: startLng },
        end: { lat: end.lat, lng: finalEndLng },
    };
}

export function getTotals(d: any, fromPortTotals: any, toPortTotals: any) {
    if (d.type === "from") {
        return fromPortTotals[d.port] || { totalCost: 0, totalPOCount: 0 };
    } else if (d.type === "to") {
        return toPortTotals[d.port] || { totalCost: 0, totalPOCount: 0 };
    } else {
        return { totalCost: 0, totalPOCount: 0 };
    }
}

export const toTypeMap = (fromData: FromPortInfo[], toData: ToPortInfo[]) => {
    const fromMap = new Map<string, TypePortInfo>(
        fromData.map((item) => [
            item.name,
            {
                port: item.name,
                lat: item.lat,
                lng: item.lng,
                type: "from",
            },
        ])
    );
    const toMap = new Map<number, TypePortInfo>(
        toData.map((item) => [
            item.idc,
            {
                port: item.idc,
                lat: item.lat,
                lng: item.lng,
                type: "to",
            },
        ])
    );
    return { fromMap, toMap };
};

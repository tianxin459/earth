/**
 * 地球两点连线圆弧设置
 */

import type { GlobeInstance } from "globe.gl";
import type {
    ArcRouteInfo,
    FromPortInfo,
    ToPortInfo,
    WeekOrder,
    WeekOrderRouteInfo,
} from "../../../type";
import _ from "lodash";
import { renderArcTooltip } from "../../ArcTooltipRenderer";
import { getGreatCirclePath, greatCircleDistance, toTypeMap } from "./util";

export const setArcs = (globe: GlobeInstance, arcsData: ArcRouteInfo[]) => {
    globe
        .arcsData(arcsData)
        .arcLabel((d) => {
            const route = d as ArcRouteInfo;
            return renderArcTooltip({
                srcPort: route.srcPort,
                dstPort: route.dstPort,
                poCount: route.poCount,
                cost: route.cost,
            });
        })
        .arcStartLat((d) => (d as ArcRouteInfo).srcLat)
        .arcStartLng((d) => (d as ArcRouteInfo).srcLng)
        .arcEndLat((d) => (d as ArcRouteInfo).dstLat)
        .arcEndLng((d) => (d as ArcRouteInfo).dstLng)
        // Increase resolution for smoother arcs
        .arcCurveResolution(128)
        .arcAltitude((d) => {
            const route = d as ArcRouteInfo;
            // Calculate great circle distance between ports
            const distance = greatCircleDistance(
                { lat: +route.srcPortInfo.lat, lng: +route.srcPortInfo.lng },
                { lat: +route.dstPortInfo.lat, lng: +route.dstPortInfo.lng }
            );

            // 调整高度设置，确保弧线始终在地球表面之上
            const minAltitude = 0.2; // 最小高度，短距离连线
            const maxAltitude = 0.3; // 最大高度，长距离连线

            // 根据大圆距离计算标准化距离
            const normalizedDistance = distance / Math.PI;

            // 使用更平滑的曲线函数
            const baseAltitude =
                minAltitude +
                (maxAltitude - minAltitude) *
                    (0.5 +
                        0.5 *
                            Math.sin(
                                normalizedDistance * Math.PI - Math.PI / 2
                            ));

            // 为非常短的距离设置最小可见高度
            if (distance < 0.05) {
                // 距离小于约3度
                return Math.max(0.01, minAltitude);
            }

            // 为跨洋航线适当增加高度，但保持合理范围
            if (distance > Math.PI * 0.4) {
                // 距离大于72度
                return Math.min(baseAltitude * 1.1, maxAltitude);
            }

            return baseAltitude;
        })
        // 完全移除自动缩放，使用我们的自定义高度计算
        .arcAltitudeAutoScale(0) // 完全禁用自动缩放
        // Arc animation and color
        .arcDashLength(0.25)
        .arcDashGap(1)
        .arcDashInitialGap(() => Math.random())
        .arcDashAnimateTime(2000)
        .arcColor(() => [`rgba(0, 255, 0, 1)`, `rgba(255, 0, 0, 1)`])
        .arcsTransitionDuration(0);
    return globe;
};


export const convertArcData = (
    fromData: FromPortInfo[],
    toData: ToPortInfo[],
    routeData: WeekOrder[],
    selectedPorts: string[]
) => {
    // Map ports for quick lookup
    const { fromMap, toMap } = toTypeMap(fromData, toData);
    // Build route data with port info
    const routes: WeekOrderRouteInfo[] = [];
    let matchedRoutes = 0;
    let unmatchedRoutes = 0;

    routeData.forEach((item) => {
        const from = fromMap.get(item.fromPort); // fromPort是字符串
        const to = toMap.get(item.toPort); // toPort是数字，需要匹配idc

        // 检查是否应该显示这条路线
        const shouldShowRoute =
            selectedPorts.includes(item.fromPort) ||
            selectedPorts.includes(item.toPort.toString());

        if (from && to && shouldShowRoute) {
            routes.push({
                srcPort: item.fromPort,
                dstPort: item.toPort,
                srcPortInfo: { lat: from.lat, lng: from.lng },
                dstPortInfo: { lat: to.lat, lng: to.lng },
                ...item,
            });
            matchedRoutes++;
        } else if (!from || !to) {
            unmatchedRoutes++;
            // Debug unmatched routes
            if (!from) console.warn(`From port not found: ${item.fromPort}`);
            if (!to) console.warn(`To port not found: ${item.toPort}`);
        }
    });

    // 主业务连线数据 - 优化性能和视觉效果
    const arcRoutes = routes
        .map((d) => {
            // Use great circle path for realistic routes
            const path = getGreatCirclePath(
                { lat: +d.srcPortInfo.lat, lng: +d.srcPortInfo.lng },
                { lat: +d.dstPortInfo.lat, lng: +d.dstPortInfo.lng }
            );
            const distance = greatCircleDistance(
                { lat: +d.srcPortInfo.lat, lng: +d.srcPortInfo.lng },
                { lat: +d.dstPortInfo.lat, lng: +d.dstPortInfo.lng }
            );

            return {
                ...d,
                srcLat: path.start.lat,
                srcLng: path.start.lng,
                dstLat: path.end.lat,
                dstLng: path.end.lng,
                // 添加优化字段
                distance: distance,
                costCategory:
                    d.cost > 100000
                        ? "high"
                        : d.cost > 50000
                        ? "medium"
                        : "low",
                // 优先级字段用于渲染顺序
                priority: d.cost > 200000 ? 3 : d.cost > 100000 ? 2 : 1,
            } as ArcRouteInfo;
        })
        .sort((a, b) => b.priority - a.priority); // 按优先级排序，高成本连线优先渲染

    return {
        arcRoutes,
        routes
    };
};

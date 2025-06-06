import type { GlobeInstance } from "globe.gl";
import { BufferGeometry, Group, Line, LineBasicMaterial, Vector3 } from "three";
import { renderPortTooltip } from "../../PortTooltipRenderer";
import { getTotals, greatCircleDistance, toTypeMap } from "./util";
import type {
    FromPortInfo,
    ToPortInfo,
    WeekOrderRouteInfo,
} from "../../../type";
import _ from "lodash";

export const setLabels = (
    globe: GlobeInstance,
    fromData: FromPortInfo[],
    toData: ToPortInfo[],
    routes: WeekOrderRouteInfo[]
) => {
    const { labels, fromPortTotals, toPortTotals, labelAltitudes } =
        convertLabelData(fromData, toData, routes);
    globe
        .labelsData(labels)
        .labelLat((d: any) => d.lat)
        .labelLng((d: any) => d.lng)
        .labelText((d: any) => {
            const totals = getTotals(d, fromPortTotals, toPortTotals);

            // Format cost with appropriate unit
            const formatCost = (cost: number) => {
                if (cost >= 1e12) {
                    return `$${(cost / 1e12).toFixed(2)}T`;
                } else if (cost >= 1e9) {
                    return `$${(cost / 1e9).toFixed(2)}B`;
                } else if (cost >= 1e6) {
                    return `$${(cost / 1e6).toFixed(2)}M`;
                } else if (cost >= 1e3) {
                    return `$${(cost / 1e3).toFixed(2)}K`;
                } else {
                    return `$${cost.toFixed(2)}`;
                }
            };

            return `${d.port}\n(${formatCost(totals.totalCost)})`;
        })
        // Label size based on total cost
        .labelSize((d: any) => {
            const totals = getTotals(d, fromPortTotals, toPortTotals);
            // 增加标签大小，提高可读性
            return Math.max(
                1.0,
                Math.min(3.0, Math.sqrt(totals.totalCost) * 5e-4)
            );
        })
        // Dot radius based on total cost
        .labelDotRadius((d: any) => {
            const totals = getTotals(d, fromPortTotals, toPortTotals);
            const minRadius = 0.12;
            const maxRadius = 1;
            const scale = Math.sqrt(totals.totalCost) * 2e-3;
            return Math.max(minRadius, Math.min(maxRadius, scale));
        })
        // Label color by port type
        .labelColor((d: any) =>
            d.type === "from" ? "#00ffe7" : "rgba(255, 165, 0, 0.9)"
        )
        .labelResolution(8) // 提高分辨率，从3改为8，使标签更清晰
        .labelAltitude((d: any) => labelAltitudes[d.port] || 0)
        .labelDotOrientation("top")
        .labelIncludeDot(true)
        // Custom HTML label tooltip using styled component
        .labelLabel((d: any) => {
            const totals = getTotals(d, fromPortTotals, toPortTotals);

            return renderPortTooltip({
                port: d.port,
                cost: totals.totalCost,
                poCount: totals.totalPOCount,
                type: d.type,
            });
        })
        .labelsTransitionDuration(0);

    // --- BEGIN: Add vertical lines from earth surface to label dots ---
    let labelLinesGroup: Group | null = null;
    if (globe.scene().getObjectByName("labelLinesGroup")) {
        labelLinesGroup = globe
            .scene()
            .getObjectByName("labelLinesGroup") as Group;
        globe.scene().remove(labelLinesGroup);
    }
    labelLinesGroup = new Group();
    labelLinesGroup.name = "labelLinesGroup";
    const RADIUS = globe.getGlobeRadius ? globe.getGlobeRadius() : 1; // fallback to 1 if not available
    labels.forEach((d) => {
        const alt = labelAltitudes[d.port] || 0;
        if (alt > 0) {
            // Convert lat/lng to 3D positions
            const latRad = (d.lat * Math.PI) / 180;
            const lngRad = (d.lng * Math.PI) / 180;
            // Surface point
            const r0 = RADIUS;
            const x0 = r0 * Math.cos(latRad) * Math.sin(lngRad);
            const y0 = r0 * Math.sin(latRad);
            const z0 = r0 * Math.cos(latRad) * Math.cos(lngRad);
            // Label dot point (globe.gl altitude is relative to radius)
            const r1 = RADIUS * (1 + alt);
            const x1 = r1 * Math.cos(latRad) * Math.sin(lngRad);
            const y1 = r1 * Math.sin(latRad);
            const z1 = r1 * Math.cos(latRad) * Math.cos(lngRad);
            // Create geometry
            const geometry = new BufferGeometry().setFromPoints([
                new Vector3(x0, y0, z0),
                new Vector3(x1, y1, z1),
            ]);
            const material = new LineBasicMaterial({
                color: 0xffa500,
                linewidth: 2,
            });
            const line = new Line(geometry, material);
            labelLinesGroup.add(line);
        }
    });
    globe.scene().add(labelLinesGroup);
};

const LABEL_BASE_ALT = 0;
const LABEL_STEP_ALT = 0.1;
const LABEL_DIST_THRESHOLD = 4;
const LABEL_MAX_LAYER = 4;

export const convertLabelData = (
    fromData: FromPortInfo[],
    toData: ToPortInfo[],
    routes: WeekOrderRouteInfo[]
) => {
    const { fromMap, toMap } = toTypeMap(fromData, toData);

    // Group and sum cost/PO count by port
    const fromPOCountCostGroup = _.groupBy(routes, "srcPort");
    const toPOCountCostGroup = _.groupBy(routes, "dstPort");
    const fromPortTotals = _.mapValues(fromPOCountCostGroup, (items) => ({
        totalCost: Math.round(_.sumBy(items, "cost")),
        totalPOCount: Math.round(_.sumBy(items, "poCount")),
    }));
    const toPortTotals = _.mapValues(toPOCountCostGroup, (items) => ({
        totalCost: Math.round(_.sumBy(items, "cost")),
        totalPOCount: Math.round(_.sumBy(items, "poCount")),
    }));

    // Combine all ports and filter those with totalCost > 0
    const allPorts = [
        ...Array.from(fromMap.values()),
        ...Array.from(toMap.values()),
    ];
    const filteredPorts = allPorts.filter((d) => {
        const totals =
            d.type === "from"
                ? fromPortTotals[d.port]
                : d.type === "to"
                ? toPortTotals[d.port]
                : undefined;
        return totals && totals.totalCost > 0;
    });

    const labelAltitudes: Record<string, number> = {};

    const sortedPorts = filteredPorts.concat([]).sort((a, b) => {
        const ta = getTotals(a, fromPortTotals, toPortTotals).totalCost;
        const tb = getTotals(b, fromPortTotals, toPortTotals).totalCost;
        return tb - ta;
    });

    for (let i = 0; i < sortedPorts.length; i++) {
        const p = sortedPorts[i];
        let layer = 0;
        for (let j = 0; j < i; j++) {
            const q = sortedPorts[j];
            const dist =
                (greatCircleDistance(
                    { lat: p.lat, lng: p.lng },
                    { lat: q.lat, lng: q.lng }
                ) *
                    180) /
                Math.PI;
            if (
                dist < LABEL_DIST_THRESHOLD &&
                labelAltitudes[q.port] / LABEL_STEP_ALT === layer
            ) {
                layer++;
                if (layer > LABEL_MAX_LAYER) break;
            }
        }
        // 第一层直接为 0，后续层级递增
        labelAltitudes[p.port] =
            layer === 0 ? 0 : LABEL_BASE_ALT + layer * LABEL_STEP_ALT;
    }

    return {
        labelAltitudes,
        labels: filteredPorts,
        fromPortTotals,
        toPortTotals,
    };
};

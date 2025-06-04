import { useEffect, useRef } from "react";
import type { GlobeInstance } from "globe.gl";
import { initGlobe } from "./settings/init";
import { setMaterial } from "./settings/material";
import { convertArcData, setArcs } from "./settings/arc";
import { setLabels } from "./settings/label";
import { applyControls } from "./settings/control";
import { useAppSelector } from "../../redux/hook";
import { styled } from "styled-components";

const GlobeContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;

    .float-tooltip-kap {
        z-index: 2;
    }
    canvas {
        z-index: 1;
    }
`;

export const GlobeEarth = (props: { isDashboardCollapsed: boolean }) => {
    const refContainer = useRef<HTMLDivElement>(null);
    const refGlobe = useRef<GlobeInstance>(null);

    const fromData = useAppSelector((state) => state.loader.data?.from);
    const toData = useAppSelector((state) => state.loader.data?.to);
    const routeData = useAppSelector(
        (state) =>
            state.loader.data?.week.find(
                (item) => item.wmweek === state.week.currentWeek
            )?.routeData
    );
    const selectedPorts = useAppSelector((state) => state.ports.selectedPorts);

    const setGlobe = () => {
        const globe = refGlobe.current!;
        if (!fromData || !toData || !routeData) {
            globe.arcsData([]).labelsData([]);
            return;
        }
        const { arcRoutes, routes } = convertArcData(
            fromData!,
            toData!,
            routeData!,
            selectedPorts
        );
        setArcs(globe, arcRoutes);
        setLabels(globe, fromData!, toData!, routes);
    };

    useEffect(() => {
        refGlobe.current = initGlobe(refContainer.current!);
        const timer = setMaterial(refGlobe.current);
        applyControls(refGlobe.current, refContainer.current!);
        setGlobe();
        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        setGlobe();
    }, [fromData, toData, routeData, selectedPorts]);

    useEffect(() => {
        if (refGlobe.current && refContainer.current) {
            const renderer = refGlobe.current.renderer();
            const container = refContainer.current;
            const containerWidth = container.clientWidth;

            if (props.isDashboardCollapsed) {
                // Center the globe when dashboard is collapsed - use transform for smooth transition
                renderer.domElement.style.transform = "translateX(0%)";
            } else {
                // Move the globe 20% to the left when dashboard is expanded
                renderer.domElement.style.transform = `translateX(-${
                    containerWidth * 0.1
                }px)`;
            }
        }
    }, [props.isDashboardCollapsed]);

    return <GlobeContainer ref={refContainer} />;
};

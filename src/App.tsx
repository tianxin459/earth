import React, { useState, useEffect, useMemo } from "react";
import Dashboard from "./Dashboard";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { selectAllPorts } from "./redux/store";
import PortsSidebar from "./components/PortsSidebar";
import { BottomBar } from "./components/bar/BottomBar";
import { TopBar } from "./components/bar/TopBar";
import { useWeekDataLoader } from "./hooks/loader";
import { GlobeEarth } from "./components/globe/Earth";
import styled from "styled-components";

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: radial-gradient(ellipse at center, #10131a 0%, #05070d 100%);
`;
const AppBody = styled.div`
    width: 100%;
    height: calc(100% - 80px);
    display: flex;
    flex-direction: column;
`;

const App: React.FC = () => {
    const [isDashboardCollapsed, setIsDashboardCollapsed] =
        useState<boolean>(false);
    const [isPortSidebarCollapsed, setIsPortSidebarCollapsed] =
        useState<boolean>(true); // Start with collapsed state

    const loadData = useWeekDataLoader();

    const currentWmweek = useAppSelector((state) => state.week.currentWeek);
    const dispatch = useAppDispatch();

    const handleToggleCollapse = () => {
        setIsDashboardCollapsed(!isDashboardCollapsed);
    };

    const wmweekData = useAppSelector((state) =>
        state.loader.data?.week.find((item) => item.wmweek === currentWmweek)
    );
    // Extract unique ports from routeData
    const allPorts = useMemo(() => {
        const uniquePorts = new Set<string>();
        wmweekData?.routeData.forEach((route) => {
            uniquePorts.add(route.fromPort);
            uniquePorts.add(route.toPort.toString());
        });
        return Array.from(uniquePorts).sort();
    }, [wmweekData]);

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        dispatch(selectAllPorts(allPorts.concat([])));
    }, [allPorts]);

    const handlePortSidebarToggle = () => {
        setIsPortSidebarCollapsed(!isPortSidebarCollapsed);
    };

    return (
        <AppContainer>
            <TopBar />
            <AppBody>
                <Dashboard
                    isCollapsed={isDashboardCollapsed}
                    onToggleCollapse={handleToggleCollapse}
                />
                <PortsSidebar
                    isCollapsed={isPortSidebarCollapsed}
                    onToggleCollapse={handlePortSidebarToggle}
                    ports={allPorts}
                />
                <GlobeEarth isDashboardCollapsed={isDashboardCollapsed} />
            </AppBody>
            <BottomBar />
        </AppContainer>
    );
};

export default App;

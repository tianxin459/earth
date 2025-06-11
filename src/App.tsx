import React, { useState, useEffect, useMemo, useRef } from "react";
import Dashboard from "./Dashboard";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { selectAllPorts, setPorts } from "./redux/store";
import PortsSidebar from "./components/PortsSidebar";
import { BottomBar } from "./components/bar/BottomBar";
import { TopBar } from "./components/bar/TopBar";
import { useAISummary, useWeekDataLoader } from "./hooks/loader";
import { GlobeEarth } from "./components/globe/Earth";
import styled from "styled-components";
import AISummaryChat from "./components/AISummaryChat";

interface RegionOption {
    id: string;
    name: string;
    viewpoint: {
        lat: number;
        lng: number;
        altitude: number;
    };
}

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
    position: relative;
`;

const App: React.FC = () => {
    const [isDashboardCollapsed, setIsDashboardCollapsed] = useState<boolean>(false);
    const [isPortSidebarCollapsed, setIsPortSidebarCollapsed] = useState<boolean>(true);
    const [selectedDemo, setSelectedDemo] = useState<string | null>(null);
    const [selectedRegion, setSelectedRegion] = useState<RegionOption | null>(null);
    const [showHelp, setShowHelp] = useState<boolean>(false);

    const loadData = useWeekDataLoader();
    const currentWmweek = useAppSelector((state) => state.week.currentWeek);
    const dispatch = useAppDispatch();

    const wmweekData = useAppSelector((state) =>
        state.loader.data?.week.find((item) => item.wmweek === currentWmweek)
    );

    // Extract unique ports from routeData
    const allPorts = useMemo(() => {
        const uniquePorts = new Set<string>();
        const fromPorts = new Set<string>();
        const toPorts = new Set<string>();
        wmweekData?.routeData.forEach((route) => {
            uniquePorts.add(route.fromPort);
            fromPorts.add(route.fromPort);
            uniquePorts.add(route.toPort.toString());
            toPorts.add(route.toPort.toString());
        });
        return {
            allPorts: Array.from(uniquePorts).sort(),
            fromPorts: Array.from(fromPorts).sort((a, b) => b.length - a.length),
            toPorts: Array.from(toPorts).sort((a, b) => b.length - a.length),
        };
    }, [wmweekData]);

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        dispatch(setPorts({ from: allPorts.fromPorts, to: allPorts.toPorts }));
        dispatch(selectAllPorts(allPorts.allPorts.concat([])));
    }, [allPorts]);

    const handleToggleCollapse = () => {
        setIsDashboardCollapsed(!isDashboardCollapsed);
    };

    const handlePortSidebarToggle = () => {
        setIsPortSidebarCollapsed(!isPortSidebarCollapsed);
    };

    const handleDemoSelect = (demoId: string) => {
        setSelectedDemo(demoId);
        console.log('Demo selected:', demoId);
    };

    const handleRegionSelect = (region: RegionOption) => {
        setSelectedRegion(region);
        console.log('Region selected:', region);
    };

    const handleHelpToggle = () => {
        setShowHelp(!showHelp);
    };

    useAISummary();

    return (
        <AppContainer>
            <TopBar 
                onMenuClick={handlePortSidebarToggle}
                onDemoSelect={handleDemoSelect}
                onRegionSelect={handleRegionSelect}
                onHelpToggle={handleHelpToggle}
            />
            <AppBody>
                <Dashboard
                    isCollapsed={isDashboardCollapsed}
                    onToggleCollapse={handleToggleCollapse}
                />
                <PortsSidebar
                    isCollapsed={isPortSidebarCollapsed}
                    onToggleCollapse={handlePortSidebarToggle}
                />
                <GlobeEarth 
                    isDashboardCollapsed={isDashboardCollapsed} 
                    isPortSidebarCollapsed={isPortSidebarCollapsed}
                    selectedDemo={selectedDemo}
                    selectedRegion={selectedRegion}
                    onDemoComplete={() => setSelectedDemo(null)}
                    onRegionComplete={() => setSelectedRegion(null)}
                    showHelp={showHelp}
                    onHelpToggle={handleHelpToggle}
                />
                <AISummaryChat />
            </AppBody>
            <BottomBar />
        </AppContainer>
    );
};

export default App;

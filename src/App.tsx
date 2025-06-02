import React, { useState, useEffect } from "react";
import EarthLine from "./EarthLine";
import ControlPanel from "./ControlPanel";
import Dashboard from "./Dashboard";
import Timeline from "./components/Timeline";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { setCurrentWeek } from "./redux/store";

const base = import.meta.env.BASE_URL || "/";

const FullScreenOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(ellipse at center, #10131a 0%, #05070d 100%);
  color: #fff;
  font-size: 1.2em;
`;

const MessageBox = styled.div<{ borderColor: string; titleColor: string }>`
  background: rgba(24, 28, 47, 0.95);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid ${(props) => props.borderColor};
  text-align: center;
  backdrop-filter: blur(5px);

  h3 {
    color: ${(props) => props.titleColor};
    margin-bottom: 10px;
  }
`;

const RetryButton = styled.button`
  background: #00ffe7;
  color: #000;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: #00d4b8;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const App: React.FC = () => {
  const [fromData, setFromData] = useState<any[]>([]);
  const [toData, setToData] = useState<any[]>([]);
  const [routeData, setRouteData] = useState<any[]>([]);
  const [wmweekData, setWmweekData] = useState<any[]>([]);
  const [availableWmweeks, setAvailableWmweeks] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDashboardCollapsed, setIsDashboardCollapsed] =
    useState<boolean>(false);

  const currentWmweek = useAppSelector((state) => state.week.currentWeek);
  const dispatch = useAppDispatch();

  const handleToggleCollapse = () => {
    setIsDashboardCollapsed(!isDashboardCollapsed);
  };

  const loadData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const [fromResponse, toResponse, wmweekResponse] = await Promise.all([
        fetch(`${base}from.json`),
        fetch(`${base}to.json`),
        fetch(`${base}wmweekData.json`),
      ]);

      if (!fromResponse.ok || !toResponse.ok || !wmweekResponse.ok) {
        throw new Error("Failed to fetch data");
      }

      const [fromResult, toResult, wmweekResult] = await Promise.all([
        fromResponse.json(),
        toResponse.json(),
        wmweekResponse.json(),
      ]);

      // Set static port data (doesn't change between weeks)
      setFromData(fromResult);
      setToData(toResult);
      setWmweekData(wmweekResult);

      // Extract available wmweeks and set the first one as current
      const wmweeks = wmweekResult.map((item: any) => item.wmweek);
      console.log("Loaded wmweeks:", wmweeks);
      console.log("Loaded wmweek data:", wmweekResult);
      setAvailableWmweeks(wmweeks);
      if (wmweeks.length > 0) {
        dispatch(setCurrentWeek(wmweeks[0]));
        setRouteData(wmweekResult[0].routeData || []);
        console.log("Initial route data:", wmweekResult[0].routeData);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      console.error("Error loading data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWmweekChange = (wmweek: string) => {
    const selectedWeekData = wmweekData.find(
      (item: any) => item.wmweek === wmweek
    );
    if (selectedWeekData) {
      console.log(`Switching to wmweek: ${wmweek}`, selectedWeekData);
      dispatch(setCurrentWeek(wmweek));
      setRouteData(selectedWeekData.routeData || []);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Add keyboard navigation for wmweeks
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!availableWmweeks.length || !currentWmweek) return;

      const currentIndex = availableWmweeks.indexOf(currentWmweek);

      if (event.key === "ArrowLeft" && currentIndex > 0) {
        handleWmweekChange(availableWmweeks[currentIndex - 1]);
      } else if (
        event.key === "ArrowRight" &&
        currentIndex < availableWmweeks.length - 1
      ) {
        handleWmweekChange(availableWmweeks[currentIndex + 1]);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [availableWmweeks, currentWmweek]);

  // 渲染错误状态
  if (error) {
    return (
      <FullScreenOverlay>
        <MessageBox borderColor="#ff0080" titleColor="#ff0080">
          <h3>Error Loading Data</h3>
          <p>{error}</p>
          <RetryButton onClick={loadData}>Retry</RetryButton>
        </MessageBox>
      </FullScreenOverlay>
    );
  }

  // 渲染加载状态
  if (isLoading) {
    return (
      <FullScreenOverlay>
        <MessageBox borderColor="#00ffe7" titleColor="#00ffe7">
          <h3>Loading Data...</h3>
          <p>Please wait while we load the shipping data.</p>
        </MessageBox>
      </FullScreenOverlay>
    );
  }

  // 渲染主界面
  const hasData =
    fromData.length > 0 && toData.length > 0 && routeData.length > 0;
  const hasWmweekData = availableWmweeks.length > 0 && currentWmweek;

  return (
    <>
      <ControlPanel
        isLoading={isLoading}
        onRefreshData={loadData}
        currentWmweek={currentWmweek}
      />
      <Dashboard
        isCollapsed={isDashboardCollapsed}
        onToggleCollapse={handleToggleCollapse}
      />
      {hasData && (
        <EarthLine
          fromData={fromData}
          toData={toData}
          routeData={routeData}
          isDashboardCollapsed={isDashboardCollapsed}
        />
      )}
      {hasWmweekData && <Timeline wmweeks={availableWmweeks} />}
    </>
  );
};

export default App;

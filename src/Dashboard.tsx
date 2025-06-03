import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import WeeklyStatsDashboard from "./components/WeeklyStatsDashboard.tsx";
import HistoricalCharts from "./components/HistoricalCharts";
import POStats from "./components/POStats";
import { useAppDispatch, useAppSelector } from "./redux/hook.ts";
import { setCurrentWeek } from "./redux/store.ts";
import { base } from "./config/constants.ts";
interface StatisticsData {
  wmweek: string;
  statistics: {
    [key: string]: {
      description: string;
      value: number;
      unit: string;
    };
  };
}

interface DashboardProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const DashboardContainer = styled.div`
  position: fixed;
  top: calc(41px + 25px); /* Header height + top margin */
  right: 25px;
  bottom: 25px;
  width: 20%;
  color: #4dd0e1;
  background: rgba(15, 25, 35, 0.6);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(77, 208, 225, 0.3);
  border-radius: 12px;
  z-index: 999; /* Lower than header */
  font-family: "Courier New", monospace;
  overflow: hidden;
`;

const MainContent = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden; /* Prevent scrolling of main container */
`;

const CollapseButton = styled.button<{ $collapsed: boolean }>`
  position: fixed;
  top: 50%;
  right: ${(props) => (props.$collapsed ? "25px" : "21.5%")};
  transform: translateY(-50%);
  width: 30px; /* 增大按钮 */
  height: 30px;
  background: linear-gradient(
    135deg,
    rgba(15, 25, 35, 0.9),
    rgba(25, 35, 45, 0.9)
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(77, 208, 225, 0.4);
  border-radius: 6px;
  color: #4dd0e1;
  font-size: 11px; /* 增大字体 */
  font-weight: 700; /* 增加字体粗细 */
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(77, 208, 225, 0.1);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(77, 208, 225, 0.1) 50%,
      transparent 70%
    );
    border-radius: 6px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(25, 35, 45, 0.95),
      rgba(35, 45, 55, 0.95)
    );
    border-color: rgba(77, 208, 225, 0.7);
    transform: translateY(-50%) translateX(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4), 0 0 20px rgba(77, 208, 225, 0.2),
      inset 0 1px 0 rgba(77, 208, 225, 0.2);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-50%) translateX(0px) scale(0.95);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const Dashboard: React.FC<DashboardProps> = ({
  isCollapsed,
  onToggleCollapse,
}) => {
  const [statisticsData, setStatisticsData] = useState<StatisticsData[]>([]);

  // Use Redux for currentWeek
  const currentWeek = useAppSelector((state) => state.week.currentWeek);
  const dispatch = useAppDispatch();

  // Handle week selection from HistoricalCharts
  const handleWeekSelect = (wmweek: string) => {
    dispatch(setCurrentWeek(wmweek));
  };

  // Load statistics data
  useEffect(() => {
    const loadData = async () => {
      try {
        // Load statistics data
        const statisticsResponse = await fetch(`${base}data/statistics.json`);
        const statisticsData = await statisticsResponse.json();
        setStatisticsData(statisticsData);

        // Set current week to the latest available week (highest wmweek)
        if (statisticsData.length > 0) {
          const latestWeek = statisticsData
            .map((d: StatisticsData) => d.wmweek)
            .sort()
            .reverse()[0]; // Get the latest week
          dispatch(setCurrentWeek(latestWeek));
        }
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    };

    loadData();
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toFixed(0);
  };

  return (
    <>
      <Header />
      {!isCollapsed && (
        <DashboardContainer>
          <MainContent>
            {statisticsData.length > 0 && (
              <WeeklyStatsDashboard data={statisticsData} />
            )}
            <POStats formatNumber={formatNumber} currentWeek={currentWeek} />
            {statisticsData.length > 0 && (
              <HistoricalCharts onWeekSelect={handleWeekSelect} />
            )}
          </MainContent>
        </DashboardContainer>
      )}
      <CollapseButton $collapsed={isCollapsed} onClick={onToggleCollapse}>
        {isCollapsed ? "◀" : "▶"}
      </CollapseButton>
    </>
  );
};

export default Dashboard;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import WeeklyStatsDashboard from "./components/WeeklyStatsDashboard.tsx";
import HistoricalCharts from "./components/HistoricalCharts";
import POStats from "./components/POStats";;

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
  font-family: 'Courier New', monospace;
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
  right: ${props => props.$collapsed ? '25px' : '22%'};
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: rgba(15, 25, 35, 0.8);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(77, 208, 225, 0.3);
  border-radius: 50%;
  color: #4dd0e1;
  font-size: 16px;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(30, 35, 40, 0.9);
    border-color: rgba(77, 208, 225, 0.5);
    transform: translateY(-50%) scale(1.1);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;

const Dashboard: React.FC<DashboardProps> = ({ isCollapsed, onToggleCollapse }) => {
  const [statisticsData, setStatisticsData] = useState<StatisticsData[]>([]);
  const [currentWeek, setCurrentWeek] = useState<string>("");

  // Handle week selection from HistoricalCharts
  const handleWeekSelect = (wmweek: string) => {
    setCurrentWeek(wmweek);
  };

  // Load statistics data
  useEffect(() => {
    const loadData = async () => {
      try {
        // Load statistics data
        const statisticsResponse = await fetch('/data/statistics.json');
        const statisticsData = await statisticsResponse.json();
        setStatisticsData(statisticsData);
        
        // Set current week to the latest available week (highest wmweek)
        if (statisticsData.length > 0) {
          const latestWeek = statisticsData
            .map((d: StatisticsData) => d.wmweek)
            .sort()
            .reverse()[0]; // Get the latest week
          setCurrentWeek(latestWeek);
        }
      } catch (error) {
        console.error('Failed to load data:', error);
      }
    };

    loadData();
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toFixed(0);
  };

  return (
    <>
      <Header />
      {!isCollapsed && (
        <DashboardContainer>
          <MainContent>
            {statisticsData.length > 0 && (
              <WeeklyStatsDashboard 
                data={statisticsData} 
                currentWeek={currentWeek}
              />
            )}
            <POStats 
              formatNumber={formatNumber} 
              currentWeek={currentWeek}
            />
            {statisticsData.length > 0 && (
              <HistoricalCharts onWeekSelect={handleWeekSelect} />
            )}
          </MainContent>
        </DashboardContainer>
      )}
      <CollapseButton $collapsed={isCollapsed} onClick={onToggleCollapse}>
        {isCollapsed ? '◀' : '▶'}
      </CollapseButton>
    </>
  );
};

export default Dashboard;
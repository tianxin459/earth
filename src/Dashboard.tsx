import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import WeeklyStatsDashboard from "./components/WeeklyStatsDashboard.tsx";

interface StatisticsData {
  wmweek: string;
  sataistics: {
    [key: string]: {
      description: string;
      value: number;
      unit: string;
    };
  };
}

interface DashboardProps {
  routeData: any[];
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
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  box-sizing: border-box;
`;

const StatsContainer = styled.div`
  background: linear-gradient(135deg, rgba(30, 35, 40, 0.8), rgba(20, 25, 30, 0.8));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(77, 208, 225, 0.2);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 12px;
  height: 200px;
`;

const StatsCard = styled.div`
  background: linear-gradient(135deg, rgba(40, 45, 50, 0.9), rgba(30, 35, 40, 0.9));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(77, 208, 225, 0.15);
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 
      0 4px 12px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border-color: rgba(77, 208, 225, 0.3);
    background: linear-gradient(135deg, rgba(45, 50, 55, 0.95), rgba(35, 40, 45, 0.95));
  }
`;

const StatsLabel = styled.div`
  font-size: 11px;
  opacity: 0.7;
  margin-bottom: 8px;
  color: #ebebeb;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const StatsValue = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #4dd0e1;
  text-shadow: 0 0 10px rgba(77, 208, 225, 0.3);
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

const Dashboard: React.FC<DashboardProps> = ({ routeData, isCollapsed, onToggleCollapse }) => {
  const [statisticsData, setStatisticsData] = useState<StatisticsData[]>([]);
  const [currentWeek, setCurrentWeek] = useState<string>("");

  // Load statistics data
  useEffect(() => {
    const loadStatistics = async () => {
      try {
        const response = await fetch('/data/statistics.json');
        const data = await response.json();
        setStatisticsData(data);
        // Set current week to the first available week
        if (data.length > 0) {
          setCurrentWeek(data[0].wmweek);
        }
      } catch (error) {
        console.error('Failed to load statistics:', error);
      }
    };

    loadStatistics();
  }, []);
  const stats = useMemo(() => {
    if (!routeData || routeData.length === 0) {
      return {
        totalRoutes: 0,
        totalCost: 0,
        totalPOCount: 0,
        avgCostPerRoute: 0,
        avgPOCountPerRoute: 0,
        topRoutes: [],
        costDistribution: { low: 0, medium: 0, high: 0 }
      };
    }

    const totalRoutes = routeData.length;
    const totalCost = routeData.reduce((sum, route) => sum + (route.cost || 0), 0);
    const totalPOCount = routeData.reduce((sum, route) => sum + (route.poCount || 0), 0);
    const avgCostPerRoute = totalCost / totalRoutes;
    const avgPOCountPerRoute = totalPOCount / totalRoutes;

    // Top 5 routes by cost
    const topRoutes = [...routeData]
      .sort((a, b) => (b.cost || 0) - (a.cost || 0))
      .slice(0, 5);

    // Cost distribution
    const costDistribution = routeData.reduce((dist, route) => {
      const cost = route.cost || 0;
      if (cost < 50000) dist.low++;
      else if (cost < 200000) dist.medium++;
      else dist.high++;
      return dist;
    }, { low: 0, medium: 0, high: 0 });

    return {
      totalRoutes,
      totalCost,
      totalPOCount,
      avgCostPerRoute,
      avgPOCountPerRoute,
      topRoutes,
      costDistribution
    };
  }, [routeData]);

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
            <StatsContainer>
              <StatsGrid>
                <StatsCard>
                  <StatsLabel>ACTIVE ROUTES</StatsLabel>
                  <StatsValue>{formatNumber(stats.totalRoutes)}</StatsValue>
                </StatsCard>

                <StatsCard>
                  <StatsLabel>TOTAL COST</StatsLabel>
                  <StatsValue>${formatNumber(stats.totalCost)}</StatsValue>
                </StatsCard>

                <StatsCard>
                  <StatsLabel>PURCHASE ORDERS</StatsLabel>
                  <StatsValue>{formatNumber(stats.totalPOCount)}</StatsValue>
                </StatsCard>

                <StatsCard>
                  <StatsLabel>AVG COST</StatsLabel>
                  <StatsValue>${formatNumber(stats.avgCostPerRoute)}</StatsValue>
                </StatsCard>
              </StatsGrid>
            </StatsContainer>
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
import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { useAppSelector } from "../redux/hook";

interface POStatsProps {
  formatNumber: (num: number) => string;
  currentWeek?: string;
}

const StatsContainer = styled.div`
  background: linear-gradient(
    135deg,
    rgba(30, 35, 40, 0.8),
    rgba(20, 25, 30, 0.8)
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(77, 208, 225, 0.2);
  border-radius: 8px;
  padding: 6px;
  margin-bottom: 8px;
`;

const WeekHeader = styled.div`
  color: #4dd0e1;
  font-size: 9px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.8;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  height: auto;
`;

const StatsCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(40, 45, 50, 0.9),
    rgba(30, 35, 40, 0.9)
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(77, 208, 225, 0.15);
  border-radius: 4px;
  padding: 4px 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  min-height: 28px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border-color: rgba(77, 208, 225, 0.3);
    background: linear-gradient(
      135deg,
      rgba(45, 50, 55, 0.95),
      rgba(35, 40, 45, 0.95)
    );
  }
`;

const StatsLabel = styled.div`
  font-size: 9px; /* 增大字体 */
  opacity: 0.8; /* 增加不透明度 */
  color: #ebebeb;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600; /* 增加字体粗细 */
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const StatsValue = styled.div`
  font-size: 13px; /* 增大字体 */
  font-weight: 700; /* 增加字体粗细 */
  color: #4dd0e1;
  text-shadow: 0 0 8px rgba(77, 208, 225, 0.4); /* 增强阴影 */
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const POStats: React.FC<POStatsProps> = ({ formatNumber, currentWeek }) => {
  const [loading, setLoading] = useState(false);

  const wmweekData = useAppSelector((state) => {
    return state.loader.data?.week ?? [];
  });

  // Calculate stats based on current week
  const stats = useMemo(() => {
    if (!currentWeek || wmweekData.length === 0) {
      return {
        totalRoutes: 0,
        totalCost: 0,
        totalPOCount: 0,
        avgCostPerRoute: 0,
      };
    }

    // Get route data for the current week
    const currentWeekRouteData =
      wmweekData?.find((weekData) => weekData.wmweek === currentWeek)
        ?.routeData || [];

    if (!currentWeekRouteData || currentWeekRouteData.length === 0) {
      return {
        totalRoutes: 0,
        totalCost: 0,
        totalPOCount: 0,
        avgCostPerRoute: 0,
      };
    }

    const totalRoutes = currentWeekRouteData.length;
    const totalCost = currentWeekRouteData.reduce(
      (sum: number, route: any) => sum + (route.cost || 0),
      0
    );
    const totalPOCount = currentWeekRouteData.reduce(
      (sum: number, route: any) => sum + (route.poCount || 0),
      0
    );
    const avgCostPerRoute = totalRoutes > 0 ? totalCost / totalRoutes : 0;

    return {
      totalRoutes,
      totalCost,
      totalPOCount,
      avgCostPerRoute,
    };
  }, [wmweekData, currentWeek]);

  const statsData = [
    { label: "ROUTES", value: formatNumber(stats.totalRoutes) },
    { label: "COST", value: `$${formatNumber(stats.totalCost)}` },
    { label: "ORDERS", value: formatNumber(stats.totalPOCount) },
    { label: "AVG", value: `$${formatNumber(stats.avgCostPerRoute)}` },
  ];

  if (loading) {
    return (
      <StatsContainer>
        <WeekHeader>Loading PO Stats...</WeekHeader>
        <StatsGrid>
          {[1, 2, 3, 4].map((index) => (
            <StatsCard key={index}>
              <StatsLabel>---</StatsLabel>
              <StatsValue>--</StatsValue>
            </StatsCard>
          ))}
        </StatsGrid>
      </StatsContainer>
    );
  }

  return (
    <StatsContainer>
      {currentWeek && <WeekHeader>PO Stats - Week {currentWeek}</WeekHeader>}
      <StatsGrid>
        {statsData.map((stat, index) => (
          <StatsCard key={index}>
            <StatsLabel>{stat.label}</StatsLabel>
            <StatsValue>{stat.value}</StatsValue>
          </StatsCard>
        ))}
      </StatsGrid>
    </StatsContainer>
  );
};

export default POStats;

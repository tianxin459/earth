import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { base } from "../config/constants";

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
  font-size: 8px;
  opacity: 0.7;
  color: #ebebeb;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const StatsValue = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #4dd0e1;
  text-shadow: 0 0 10px rgba(77, 208, 225, 0.3);
`;

const POStats: React.FC<POStatsProps> = ({ formatNumber, currentWeek }) => {
  const [wmweekData, setWmweekData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Load wmweek data
  useEffect(() => {
    const loadWmweekData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${base}wmweekData.json`);
        const data = await response.json();
        setWmweekData(data ?? []);
      } catch (error) {
        console.error("Failed to load wmweek data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadWmweekData();
  }, []);

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

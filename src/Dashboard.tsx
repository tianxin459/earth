import React, { useMemo } from "react";
import styled from "styled-components";
import Header from "./components/Header";

interface DashboardProps {
  routeData: any[];
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

const StatsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  justify-content: space-between;
`;

const StatsCard = styled.div`
  background: linear-gradient(135deg, rgba(30, 35, 40, 0.8), rgba(20, 25, 30, 0.8));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(77, 208, 225, 0.2);
  border-radius: 12px;
  padding: 12px 16px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  min-height: 0;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 6px 20px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
    border-color: rgba(77, 208, 225, 0.4);
    background: linear-gradient(135deg, rgba(35, 40, 45, 0.9), rgba(25, 30, 35, 0.9));
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

const Dashboard: React.FC<DashboardProps> = ({ routeData }) => {
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
      <DashboardContainer>
        <MainContent>
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
        </MainContent>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
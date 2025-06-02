import React from 'react';
import styled from 'styled-components';
import PieChart from './PieChart';

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

interface WeeklyStatsDashboardProps {
  data: StatisticsData[];
  currentWeek?: string;
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const PieChartsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4px;
  align-items: stretch; /* Changed to stretch for consistent heights */
  justify-items: center;
  min-height: 80px; /* Reduced from 100px */
`;

const WeekSelector = styled.div`
  background: linear-gradient(135deg, rgba(30, 35, 40, 0.8), rgba(20, 25, 30, 0.8));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(77, 208, 225, 0.2);
  border-radius: 8px;
  padding: 6px;
  margin-bottom: 6px;
  
  .week-title {
    color: #4dd0e1;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

const WeeklyStatsDashboard: React.FC<WeeklyStatsDashboardProps> = ({ 
  data, 
  currentWeek 
}) => {
  // Find current week data
  const currentWeekData = data.find(item => item.wmweek === currentWeek);
  
  if (!currentWeekData) {
    return (
      <DashboardContainer>
        <WeekSelector>
          <div className="week-title">No Data Available</div>
        </WeekSelector>
      </DashboardContainer>
    );
  }

  const stats = currentWeekData.statistics;

  return (
    <DashboardContainer>
      <WeekSelector>
        <div className="week-title">Week {currentWeek}</div>
      </WeekSelector>
      
      <PieChartsContainer>
        {/* OTIF Pie Chart */}
        {stats.otif && (
          <PieChart
            value={stats.otif.value}
            title="OTIF"
            width={70}
            height={70}
            unit={stats.otif.unit}
          />
        )}
        
        {/* On Time Delivery Pie Chart */}
        {stats.ontimedelivery && (
          <PieChart
            value={stats.ontimedelivery.value}
            title="On Time Delivery"
            width={70}
            height={70}
            unit={stats.ontimedelivery.unit}
          />
        )}
        
        {/* In Stock Pie Chart */}
        {stats.instock && (
          <PieChart
            value={stats.instock.value}
            title="In Stock"
            width={70}
            height={70}
            unit={stats.instock.unit}
          />
        )}
      </PieChartsContainer>
    </DashboardContainer>
  );
};

export default WeeklyStatsDashboard;

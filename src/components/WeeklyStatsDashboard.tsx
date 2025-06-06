import React from "react";
import styled from "styled-components";
import PieChart from "./PieChart";
import { useAppSelector } from "../redux/hook";
import { formatWMWeek } from "../config/utils";

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
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(20, 25, 30, 0.95),
    rgba(30, 35, 40, 0.95)
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(77, 208, 225, 0.3);
  border-radius: 6px;
  padding: 8px 12px;
  margin-bottom: 6px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(77, 208, 225, 0.1);
  transition: all 0.2s ease;

  /* Subtle inner glow */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(77, 208, 225, 0.05),
      rgba(0, 255, 136, 0.03),
      rgba(77, 208, 225, 0.05)
    );
    border-radius: 6px;
    z-index: 0;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .week-label {
    position: relative;
    z-index: 1;
    color: rgba(77, 208, 225, 0.9); /* 增加不透明度 */
    font-size: 8px; /* 增大字体 */
    font-weight: 700; /* 增加字体粗细 */
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.8px; /* 减少字间距 */
    margin-bottom: 2px;
    font-family: "Arial", "Helvetica", "Courier New", monospace;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .week-number {
    position: relative;
    z-index: 1;
    color: #00ff88;
    font-size: 15px; /* 增大字体 */
    font-weight: 900;
    text-align: center;
    font-family: "Arial", "Helvetica", "Courier New", monospace;
    letter-spacing: 1px; /* 减少字间距 */
    text-shadow: 0 0 6px rgba(0, 255, 136, 0.4), 0 0 12px rgba(0, 255, 136, 0.2); /* 增强阴影 */
    transition: all 0.2s ease;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;

    /* Elegant corner accents */
    // &::before {
    //   content: "‹";
    //   position: absolute;
    //   top: 50%;
    //   left: -12px;
    //   transform: translateY(-50%);
    //   font-size: 12px;
    //   color: rgba(77, 208, 225, 0.6);
    //   transition: color 0.3s ease;
    // }

    // &::after {
    //   content: "›";
    //   position: absolute;
    //   top: 50%;
    //   right: -12px;
    //   transform: translateY(-50%);
    //   font-size: 12px;
    //   color: rgba(77, 208, 225, 0.6);
    //   transition: color 0.3s ease;
    // }
  }

  /* Hover effects */
  &:hover {
    transform: translateY(-1px);
    transition: transform 0.2s ease;

    &::before {
      opacity: 1;
    }

    .week-number {
      text-shadow: 0 0 8px rgba(0, 255, 136, 0.4),
        0 0 16px rgba(0, 255, 136, 0.2);

      &::before,
      &::after {
        color: rgba(77, 208, 225, 0.8);
      }
    }
  }
`;

const WeeklyStatsDashboard: React.FC<WeeklyStatsDashboardProps> = ({
  data,
}) => {
  const currentWeek = useAppSelector((state) => state.week.currentWeek);
  // Find current week data
  const currentWeekData = data.find((item) => item.wmweek === currentWeek);

  if (!currentWeekData) {
    return (
      <DashboardContainer>
        <WeekSelector>
          <div className="week-label">System Status</div>
          <div className="week-number">NO DATA</div>
        </WeekSelector>
      </DashboardContainer>
    );
  }

  const stats = currentWeekData.statistics;

  return (
    <DashboardContainer>
      {/* <WeekSelector>
        <div className="week-label">Current Period</div>
        <div className="week-number">
          {formatWMWeek(currentWeek || "")}
        </div>
      </WeekSelector> */}

      <PieChartsContainer>
        {/* OTIF Pie Chart */}
        {stats.otif && (
          <PieChart
            value={stats.otif.value}
            title="OTIF"
            width={70}
            height={70}
            unit={stats.otif.unit}
            color="#00ff88"
          />
        )}

        {/* On Delivery Pie Chart */}
        {stats.ontimedelivery && (
          <PieChart
            value={stats.ontimedelivery.value}
            title="On Delivery"
            width={70}
            height={70}
            unit={stats.ontimedelivery.unit}
            color="#4dd0e1"
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
            color="#ffa500"
          />
        )}
      </PieChartsContainer>
    </DashboardContainer>
  );
};

export default WeeklyStatsDashboard;

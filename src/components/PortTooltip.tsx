import React from "react";
import styled from "styled-components";

interface PortTooltipProps {
  port: string;
  cost: number;
  poCount: number;
  type: "from" | "to";
}

const TooltipContainer = styled.div<{ intensity: number; glowColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 12px 20px; /* 增加内边距 */
  border-radius: 14px;
  background: rgba(24, 28, 47, 0.98); /* 增加背景不透明度 */
  box-shadow: 0 0 16px 4px #06a292cc, 0 0 32px 8px #ffe4e486;
  font-size: 1.1em; /* 增大字体 */
  color: #f9f9f9;
  letter-spacing: 0.5px; /* 减少字间距 */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8); /* 优化文字阴影 */
  border: 2px solid #00ffe7;
  font-weight: 600; /* 增加字体粗细 */
  font-family: 'Arial', 'Helvetica', sans-serif; /* 使用更清晰的字体 */
  -webkit-font-smoothing: antialiased; /* 字体平滑 */
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility; /* 优化文字渲染 */
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.span<{ color: string }>`
  color: ${props => props.color};
`;

const Value = styled.span`
  font-weight: bold;
  margin-left: 4px;
`;

const PortTooltip: React.FC<PortTooltipProps> = ({ port, cost, poCount, type }) => {
  // Format cost with appropriate unit
  const formatCost = (cost: number) => {
    if (cost >= 1e12) {
      return `$${(cost / 1e12).toFixed(2)}T`;
    } else if (cost >= 1e9) {
      return `$${(cost / 1e9).toFixed(2)}B`;
    } else if (cost >= 1e6) {
      return `$${(cost / 1e6).toFixed(2)}M`;
    } else if (cost >= 1e3) {
      return `$${(cost / 1e3).toFixed(2)}K`;
    } else {
      return `$${cost.toFixed(2)}`;
    }
  };

  const intensity = Math.min(1, Math.log10(Math.max(cost, 1)) / Math.log10(1e9));
  const glowColor = type === "from" ? "#00ffe7" : "#ffa500";

  return (
    <TooltipContainer intensity={intensity} glowColor={glowColor}>
      <InfoRow>
        <Label color="#00ffe7">Port：</Label>
        <Value>{port}</Value>
      </InfoRow>
      <InfoRow>
        <Label color="#ffd700">Cost：</Label>
        <Value>{formatCost(cost)}</Value>
      </InfoRow>
      <InfoRow>
        <Label color="#ff8c00">PO Count：</Label>
        <Value>{poCount}</Value>
      </InfoRow>
    </TooltipContainer>
  );
};

export default PortTooltip;
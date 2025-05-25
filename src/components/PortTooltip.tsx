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
  padding: 10px 18px;
  border-radius: 14px;
  background: #181c2f;
  box-shadow: 0 0 16px 4px #06a292cc, 0 0 32px 8px #ffe4e486;
  font-size: 1em;
  color: #f9f9f9;
  letter-spacing: 1px;
  text-shadow: 0 2px 8px #000a, 0 0 8px #00ffe7;
  border: 2px solid #00ffe7;
  font-weight: bold;
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
import React from "react";
import styled from "styled-components";

interface ArcTooltipProps {
  srcPort: string;
  dstPort: string;
  poCount: number;
  cost: number;
}

const TooltipContainer = styled.div`
  background: rgba(24, 28, 47, 0.96);
  color: #fff;
  padding: 12px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 24px 0 #0008;
  font-size: 1.08em;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 8px #000a;
  border: 1.5px solid #00ffe7;
  min-width: 180px;
  text-align: left;
  line-height: 1.6;
`;

const RouteHeader = styled.div`
  font-size: 1.15em;
  font-weight: bold;
  margin-bottom: 4px;
`;

const SourcePort = styled.span`
  color: #00ffe7;
`;

const Arrow = styled.span`
  margin: 0 8px;
  font-size: 1.1em;
`;

const DestinationPort = styled.span`
  color: #ff0080;
`;

const InfoRow = styled.div`
  margin-bottom: 2px;
`;

const Label = styled.span<{ color: string }>`
  color: ${props => props.color};
`;

const Value = styled.span`
  font-weight: bold;
`;

const ArcTooltip: React.FC<ArcTooltipProps> = ({ srcPort, dstPort, poCount, cost }) => {
  return (
    <TooltipContainer>
      <RouteHeader>
        <SourcePort>{srcPort}</SourcePort>
        <Arrow>→</Arrow>
        <DestinationPort>{dstPort}</DestinationPort>
      </RouteHeader>
      <InfoRow>
        <Label color="#ff8c00">POCount: </Label>
        <Value>{poCount}</Value>
      </InfoRow>
      <InfoRow>
        <Label color="#ffd700">Cost: </Label>
        <Value>{cost?.toLocaleString()}</Value>
      </InfoRow>
    </TooltipContainer>
  );
};

export default ArcTooltip;
import React from "react";
import styled from "styled-components";

interface ArcTooltipProps {
    srcPort: string;
    dstPort: string | number;
    poCount: number;
    cost: number;
}

const TooltipContainer = styled.div`
    background: rgba(24, 28, 47, 0.98); /* 增加背景不透明度 */
    color: #fff;
    padding: 14px 22px; /* 增加内边距 */
    border-radius: 12px;
    box-shadow: 0 4px 24px 0 #0008;
    font-size: 1.15em; /* 增大字体 */
    font-weight: 600; /* 增加字体粗细 */
    letter-spacing: 0.3px; /* 减少字间距 */
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8); /* 优化文字阴影 */
    border: 1.5px solid #00ffe7;
    min-width: 200px; /* 增加最小宽度 */
    text-align: left;
    line-height: 1.6;
    font-family: "Arial", "Helvetica", sans-serif; /* 使用更清晰的字体 */
    -webkit-font-smoothing: antialiased; /* 字体平滑 */
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility; /* 优化文字渲染 */
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
    color: ${(props) => props.color};
`;

const Value = styled.span`
    font-weight: bold;
`;

const ArcTooltip: React.FC<ArcTooltipProps> = ({
    srcPort,
    dstPort,
    poCount,
    cost,
}) => {
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

import ReactDOMServer from "react-dom/server";
import ArcTooltip from "./ArcTooltip";

interface ArcTooltipRendererProps {
  srcPort: string;
  dstPort: string;
  poCount: number;
  cost: number;
}

export const renderArcTooltip = ({ srcPort, dstPort, poCount, cost }: ArcTooltipRendererProps): string => {
  return ReactDOMServer.renderToString(
    <ArcTooltip 
      srcPort={srcPort}
      dstPort={dstPort}
      poCount={poCount}
      cost={cost}
    />
  );
};
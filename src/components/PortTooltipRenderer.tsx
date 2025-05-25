import React from "react";
import ReactDOMServer from "react-dom/server";
import PortTooltip from "./PortTooltip";

interface PortTooltipRendererProps {
  port: string;
  cost: number;
  poCount: number;
  type: "from" | "to";
}

export const renderPortTooltip = ({ port, cost, poCount, type }: PortTooltipRendererProps): string => {
  return ReactDOMServer.renderToString(
    <PortTooltip 
      port={port}
      cost={cost}
      poCount={poCount}
      type={type}
    />
  );
};
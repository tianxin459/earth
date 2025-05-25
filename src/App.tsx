import React, { useState, useEffect } from "react";
import EarthLine from "./EarthLine";
import ControlPanel from "./ControlPanel";
import Dashboard from "./Dashboard";
import styled from "styled-components";

const base = import.meta.env.BASE_URL || "/";

const FullScreenOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(ellipse at center, #10131a 0%, #05070d 100%);
  color: #fff;
  font-size: 1.2em;
`;

const MessageBox = styled.div<{ borderColor: string; titleColor: string }>`
  background: rgba(24, 28, 47, 0.95);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid ${props => props.borderColor};
  text-align: center;
  backdrop-filter: blur(5px);
  
  h3 {
    color: ${props => props.titleColor};
    margin-bottom: 10px;
  }
`;

const RetryButton = styled.button`
  background: #00ffe7;
  color: #000;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #00d4b8;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const App: React.FC = () => {
  const [fromData, setFromData] = useState<any[]>([]);
  const [toData, setToData] = useState<any[]>([]);
  const [routeData, setRouteData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const [fromResponse, toResponse, routeResponse] = await Promise.all([
        fetch(`${base}from.json`),
        fetch(`${base}to.json`),
        fetch(`${base}fromToPOCountCost.json`)
      ]);

      if (!fromResponse.ok || !toResponse.ok || !routeResponse.ok) {
        throw new Error("Failed to fetch data");
      }

      const [fromResult, toResult, routeResult] = await Promise.all([
        fromResponse.json(),
        toResponse.json(),
        routeResponse.json()
      ]);

      setFromData(fromResult);
      setToData(toResult);
      setRouteData(routeResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      console.error("Error loading data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // 渲染错误状态
  if (error) {
    return (
      <FullScreenOverlay>
        <MessageBox borderColor="#ff0080" titleColor="#ff0080">
          <h3>Error Loading Data</h3>
          <p>{error}</p>
          <RetryButton onClick={loadData}>
            Retry
          </RetryButton>
        </MessageBox>
      </FullScreenOverlay>
    );
  }

  // 渲染加载状态
  if (isLoading) {
    return (
      <FullScreenOverlay>
        <MessageBox borderColor="#00ffe7" titleColor="#00ffe7">
          <h3>Loading Data...</h3>
          <p>Please wait while we load the shipping data.</p>
        </MessageBox>
      </FullScreenOverlay>
    );
  }

  // 渲染主界面
  const hasData = fromData.length > 0 && toData.length > 0 && routeData.length > 0;

  return (
    <>
      <ControlPanel isLoading={isLoading} onRefreshData={loadData} />
      <Dashboard routeData={routeData} />
      {hasData && (
        <EarthLine 
          fromData={fromData}
          toData={toData}
          routeData={routeData}
        />
      )}
    </>
  );
};

export default App;
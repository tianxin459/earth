import React, { useState, useEffect } from "react";
import EarthLine from "./EarthLine";
import ControlPanel from "./ControlPanel";
import Dashboard from "./Dashboard";

const base = import.meta.env.BASE_URL || "/";

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

  if (error) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "radial-gradient(ellipse at center, #10131a 0%, #05070d 100%)",
        color: "#fff",
        fontSize: "1.2em"
      }}>
        <div style={{
          background: "rgba(24, 28, 47, 0.95)",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid #ff0080",
          textAlign: "center"
        }}>
          <h3 style={{ color: "#ff0080", marginBottom: "10px" }}>Error Loading Data</h3>
          <p>{error}</p>
          <button
            onClick={loadData}
            style={{
              background: "#00ffe7",
              color: "#000",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "10px"
            }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <ControlPanel isLoading={isLoading} onRefreshData={loadData} />
      <Dashboard routeData={routeData} />
      {!isLoading && fromData.length > 0 && toData.length > 0 && routeData.length > 0 && (
        <EarthLine 
          fromData={fromData}
          toData={toData}
          routeData={routeData}
        />
      )}
      {isLoading && (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "radial-gradient(ellipse at center, #10131a 0%, #05070d 100%)",
          color: "#fff",
          fontSize: "1.2em"
        }}>
          <div style={{
            background: "rgba(24, 28, 47, 0.95)",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #00ffe7",
            textAlign: "center"
          }}>
            <h3 style={{ color: "#00ffe7", marginBottom: "10px" }}>Loading Data...</h3>
            <p>Please wait while we load the shipping data.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
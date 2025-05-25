import React, { useMemo } from "react";

interface DashboardProps {
  routeData: any[];
}

const Dashboard: React.FC<DashboardProps> = ({ routeData }) => {
  const stats = useMemo(() => {
    if (!routeData || routeData.length === 0) {
      return {
        totalRoutes: 0,
        totalCost: 0,
        totalPOCount: 0,
        avgCostPerRoute: 0,
        avgPOCountPerRoute: 0,
        topRoutes: [],
        costDistribution: { low: 0, medium: 0, high: 0 }
      };
    }

    const totalRoutes = routeData.length;
    const totalCost = routeData.reduce((sum, route) => sum + (route.cost || 0), 0);
    const totalPOCount = routeData.reduce((sum, route) => sum + (route.poCount || 0), 0);
    const avgCostPerRoute = totalCost / totalRoutes;
    const avgPOCountPerRoute = totalPOCount / totalRoutes;

    // Top 5 routes by cost
    const topRoutes = [...routeData]
      .sort((a, b) => (b.cost || 0) - (a.cost || 0))
      .slice(0, 5);

    // Cost distribution
    const costDistribution = routeData.reduce((dist, route) => {
      const cost = route.cost || 0;
      if (cost < 50000) dist.low++;
      else if (cost < 200000) dist.medium++;
      else dist.high++;
      return dist;
    }, { low: 0, medium: 0, high: 0 });

    return {
      totalRoutes,
      totalCost,
      totalPOCount,
      avgCostPerRoute,
      avgPOCountPerRoute,
      topRoutes,
      costDistribution
    };
  }, [routeData]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toFixed(0);
  };

  return (
    <div style={{
      position: "fixed",
      top: "20px",
      right: "20px",
      width: "350px",
      background: "linear-gradient(135deg, rgba(15, 25, 45, 0.95), rgba(8, 15, 28, 0.98))",
      color: "#00ffe7",
      borderRadius: "12px",
      border: "2px solid #00ffe7",
      boxShadow: "0 0 30px rgba(0, 255, 231, 0.3), inset 0 0 20px rgba(0, 255, 231, 0.1)",
      zIndex: 1000,
      fontFamily: "'Orbitron', 'Courier New', monospace",
      overflow: "hidden"
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(90deg, #00ffe7, #0099cc)",
        color: "#000",
        padding: "12px 20px",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: "2px",
        boxShadow: "0 2px 10px rgba(0, 255, 231, 0.5)"
      }}>
        ◢ SHIPPING ANALYTICS ◣
      </div>

      {/* Main Stats Grid */}
      <div style={{ padding: "20px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
          marginBottom: "20px"
        }}>
          {/* Total Routes */}
          <div style={{
            background: "rgba(0, 255, 231, 0.1)",
            border: "1px solid #00ffe7",
            borderRadius: "8px",
            padding: "15px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(90deg, transparent, #00ffe7, transparent)",
              animation: "scan 2s infinite"
            }}></div>
            <div style={{ fontSize: "12px", opacity: 0.8, marginBottom: "5px" }}>ACTIVE ROUTES</div>
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>{formatNumber(stats.totalRoutes)}</div>
          </div>

          {/* Total Cost */}
          <div style={{
            background: "rgba(255, 0, 128, 0.1)",
            border: "1px solid #ff0080",
            borderRadius: "8px",
            padding: "15px",
            textAlign: "center",
            color: "#ff0080"
          }}>
            <div style={{ fontSize: "12px", opacity: 0.8, marginBottom: "5px" }}>TOTAL COST</div>
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>${formatNumber(stats.totalCost)}</div>
          </div>

          {/* Total PO Count */}
          <div style={{
            background: "rgba(255, 140, 0, 0.1)",
            border: "1px solid #ff8c00",
            borderRadius: "8px",
            padding: "15px",
            textAlign: "center",
            color: "#ff8c00"
          }}>
            <div style={{ fontSize: "12px", opacity: 0.8, marginBottom: "5px" }}>PURCHASE ORDERS</div>
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>{formatNumber(stats.totalPOCount)}</div>
          </div>

          {/* Avg Cost */}
          <div style={{
            background: "rgba(255, 215, 0, 0.1)",
            border: "1px solid #ffd700",
            borderRadius: "8px",
            padding: "15px",
            textAlign: "center",
            color: "#ffd700"
          }}>
            <div style={{ fontSize: "12px", opacity: 0.8, marginBottom: "5px" }}>AVG COST</div>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>${formatNumber(stats.avgCostPerRoute)}</div>
          </div>
        </div>

        {/* Cost Distribution */}
        <div style={{
          background: "rgba(0, 0, 0, 0.3)",
          border: "1px solid #00ffe7",
          borderRadius: "8px",
          padding: "15px",
          marginBottom: "20px"
        }}>
          <div style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "10px", textAlign: "center" }}>
            ◢ COST DISTRIBUTION ◣
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#00ff00" }}>LOW</div>
              <div style={{ fontSize: "16px", fontWeight: "bold" }}>{stats.costDistribution.low}</div>
              <div style={{ fontSize: "10px", opacity: 0.7 }}>&lt;50K</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#ffff00" }}>MID</div>
              <div style={{ fontSize: "16px", fontWeight: "bold" }}>{stats.costDistribution.medium}</div>
              <div style={{ fontSize: "10px", opacity: 0.7 }}>50K-200K</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#ff0080" }}>HIGH</div>
              <div style={{ fontSize: "16px", fontWeight: "bold" }}>{stats.costDistribution.high}</div>
              <div style={{ fontSize: "10px", opacity: 0.7 }}>&gt;200K</div>
            </div>
          </div>
        </div>

        {/* Top Routes */}
        <div style={{
          background: "rgba(0, 0, 0, 0.3)",
          border: "1px solid #ff0080",
          borderRadius: "8px",
          padding: "15px"
        }}>
          <div style={{ 
            fontSize: "14px", 
            fontWeight: "bold", 
            marginBottom: "10px", 
            textAlign: "center",
            color: "#ff0080"
          }}>
            ◢ TOP COST ROUTES ◣
          </div>
          <div style={{ maxHeight: "150px", overflowY: "auto" }}>
            {stats.topRoutes.map((route, index) => (
              <div key={index} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 10px",
                margin: "5px 0",
                background: "rgba(255, 0, 128, 0.1)",
                borderRadius: "4px",
                border: "1px solid rgba(255, 0, 128, 0.3)",
                fontSize: "11px"
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: "bold", color: "#00ffe7" }}>
                    {route.from} → {route.to}
                  </div>
                  <div style={{ opacity: 0.8 }}>PO: {route.poCount}</div>
                </div>
                <div style={{ fontWeight: "bold", color: "#ffd700" }}>
                  ${formatNumber(route.cost)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated border effect */}
      <style>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
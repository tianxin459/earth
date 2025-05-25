import React from "react";

interface ControlPanelProps {
  isLoading: boolean;
  onRefreshData: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ isLoading, onRefreshData }) => {
  return (
    <div style={{
      position: "fixed",
      top: "20px",
      left: "20px",
      background: "rgba(24, 28, 47, 0.95)",
      color: "#fff",
      padding: "20px",
      borderRadius: "12px",
      border: "1px solid #00ffe7",
      boxShadow: "0 4px 24px 0 rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
      minWidth: "200px"
    }}>
      <h3 style={{ margin: "0 0 15px 0", color: "#00ffe7" }}>Control Panel</h3>
      
      <div style={{ marginBottom: "15px" }}>
        <button
          onClick={onRefreshData}
          disabled={isLoading}
          style={{
            background: isLoading ? "#666" : "#00ffe7",
            color: isLoading ? "#ccc" : "#000",
            border: "none",
            padding: "8px 16px",
            borderRadius: "6px",
            cursor: isLoading ? "not-allowed" : "pointer",
            fontWeight: "bold"
          }}
        >
          {isLoading ? "Loading..." : "Refresh Data"}
        </button>
      </div>
      
      <div style={{ fontSize: "0.9em", color: "#ccc" }}>
        <div>Status: {isLoading ? "Loading" : "Ready"}</div>
      </div>
    </div>
  );
};

export default ControlPanel;
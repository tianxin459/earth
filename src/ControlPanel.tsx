import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

interface ControlPanelProps {
  isLoading: boolean;
  onRefreshData: () => void;
  currentWmweek?: string;
}

const PanelContainer = styled.div<{ isExpanded: boolean }>`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1001;
  font-family: 'Courier New', monospace;
  transition: all 0.3s ease;
`;

const ToggleButton = styled.button`
  background: linear-gradient(135deg, rgba(30, 35, 40, 0.95), rgba(20, 25, 30, 0.95));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(77, 208, 225, 0.4);
  border-radius: 8px;
  color: #4dd0e1;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    border-color: rgba(77, 208, 225, 0.6);
    background: linear-gradient(135deg, rgba(35, 40, 45, 0.95), rgba(25, 30, 35, 0.95));
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const PanelContent = styled.div<{ isExpanded: boolean }>`
  background: linear-gradient(135deg, rgba(30, 35, 40, 0.95), rgba(20, 25, 30, 0.95));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(77, 208, 225, 0.4);
  border-radius: 8px;
  padding: ${props => props.isExpanded ? '16px' : '0'};
  margin-bottom: 8px;
  max-height: ${props => props.isExpanded ? '200px' : '0'};
  opacity: ${props => props.isExpanded ? '1' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  min-width: 200px;
`;

const PanelHeader = styled.div`
  color: #4dd0e1;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
  border-bottom: 1px solid rgba(77, 208, 225, 0.2);
  padding-bottom: 4px;
`;

const ControlButton = styled.button<{ disabled?: boolean }>`
  background: ${props => props.disabled 
    ? 'rgba(60, 60, 60, 0.5)' 
    : 'linear-gradient(135deg, rgba(77, 208, 225, 0.2), rgba(77, 208, 225, 0.1))'
  };
  border: 1px solid ${props => props.disabled 
    ? 'rgba(100, 100, 100, 0.3)' 
    : 'rgba(77, 208, 225, 0.4)'
  };
  border-radius: 6px;
  color: ${props => props.disabled ? '#888' : '#4dd0e1'};
  font-family: 'Courier New', monospace;
  font-size: 10px;
  font-weight: bold;
  padding: 6px 12px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  width: 100%;
  margin-bottom: 8px;
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, rgba(77, 208, 225, 0.3), rgba(77, 208, 225, 0.2));
    border-color: rgba(77, 208, 225, 0.6);
    transform: translateY(-1px);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

const StatusText = styled.div<{ status: 'loading' | 'ready' | 'error' }>`
  font-size: 9px;
  color: ${props => {
    switch(props.status) {
      case 'loading': return '#ffa500';
      case 'ready': return '#00ff00';
      case 'error': return '#ff4444';
      default: return '#4dd0e1';
    }
  }};
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ControlPanel: React.FC<ControlPanelProps> = ({ isLoading, onRefreshData, currentWmweek }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const togglePanel = () => {
    setIsExpanded(!isExpanded);
  };

  const handleRefresh = () => {
    if (!isLoading) {
      onRefreshData();
    }
  };

  const handleExport = () => {
    // TODO: 实现数据导出功能
    console.log('Export data functionality to be implemented');
  };

  const handleSettings = () => {
    // TODO: 实现设置功能
    console.log('Settings functionality to be implemented');
  };

  // 点击外部区域收起面板
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isExpanded && panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    // 只在展开状态时添加监听器
    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // 清理监听器
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <PanelContainer ref={panelRef} isExpanded={isExpanded}>
      <PanelContent isExpanded={isExpanded}>
        <PanelHeader>
          ▪ CONTROL PANEL ▪
        </PanelHeader>
        
        <StatusText status={isLoading ? 'loading' : 'ready'}>
          Status: {isLoading ? 'Loading...' : 'Ready'}
        </StatusText>
        
        {currentWmweek && (
          <StatusText status="ready">
            Current Week: {currentWmweek}
          </StatusText>
        )}
        
        <ControlButton 
          onClick={handleRefresh}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Refresh Data'}
        </ControlButton>
        
        <ControlButton 
          onClick={handleExport}
          disabled={true}
        >
          Export Data
        </ControlButton>
        
        <ControlButton 
          onClick={handleSettings}
          disabled={true}
        >
          Settings
        </ControlButton>
      </PanelContent>
      
      <ToggleButton onClick={togglePanel}>
        {isExpanded ? '◄ Hide Panel' : '► Control Panel'}
      </ToggleButton>
    </PanelContainer>
  );
};

export default ControlPanel;
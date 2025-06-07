import React from 'react';
import styled from 'styled-components';
import type { GlobeInstance } from 'globe.gl';

interface DemoStep {
  id: string;
  title: string;
  description: string;
  action: 'camera' | 'highlight' | 'data' | 'pause' | 'message';
  duration: number;
  parameters?: any;
}

interface DemoInfoProps {
  isVisible: boolean;
  currentStep: DemoStep | null;
  stepIndex: number;
  totalSteps: number;
  progress: number;
  timeRemaining: number;
  demoName?: string;
  onStop?: () => void;
}

const DemoContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  background: linear-gradient(135deg, rgba(20, 25, 30, 0.95), rgba(30, 35, 40, 0.95));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(77, 208, 225, 0.3);
  border-radius: 12px;
  padding: 16px;
  min-width: 320px;
  max-width: 380px;
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transform: translateY(${props => props.isVisible ? '0' : '20px'});
  transition: all 0.3s ease-in-out;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const DemoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 8px;
`;

const DemoTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
`;

const DemoTitle = styled.h3`
  color: #4dd0e1;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  text-shadow: 0 0 8px rgba(77, 208, 225, 0.4);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SwitchHint = styled.div`
  color: #78909c;
  font-size: 9px;
  font-weight: 400;
  opacity: 0.8;
  white-space: nowrap;
`;

const StopButton = styled.button`
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.3);
  color: #ff6b6b;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 107, 107, 0.2);
    transform: translateY(-1px);
  }
`;

const StepCounter = styled.div`
  color: #78909c;
  font-size: 11px;
  text-align: center;
  margin-bottom: 8px;
`;

const StepInfo = styled.div`
  margin-bottom: 16px;
`;

const StepTitle = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const StepDescription = styled.div`
  color: #b0bec5;
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 8px;
`;

const ProgressContainer = styled.div`
  background: rgba(77, 208, 225, 0.1);
  border-radius: 4px;
  height: 6px;
  overflow: hidden;
  margin-bottom: 8px;
`;

const ProgressBar = styled.div<{ progress: number }>`
  background: linear-gradient(90deg, #4dd0e1, #26c6da);
  height: 100%;
  width: ${props => props.progress}%;
  transition: width 0.1s linear;
  border-radius: 4px;
`;

const TimeRemaining = styled.div`
  color: #78909c;
  font-size: 10px;
  text-align: right;
`;

const ActionIndicator = styled.div<{ action: string }>`
  display: inline-flex;
  align-items: center;
  background: ${props => {
    switch (props.action) {
      case 'camera': return 'rgba(77, 208, 225, 0.15)';
      case 'highlight': return 'rgba(255, 193, 7, 0.15)';
      case 'data': return 'rgba(76, 175, 80, 0.15)';
      case 'message': return 'rgba(156, 39, 176, 0.15)';
      case 'pause': return 'rgba(158, 158, 158, 0.15)';
      default: return 'rgba(77, 208, 225, 0.15)';
    }
  }};
  color: ${props => {
    switch (props.action) {
      case 'camera': return '#4dd0e1';
      case 'highlight': return '#ffc107';
      case 'data': return '#4caf50';
      case 'message': return '#9c27b0';
      case 'pause': return '#9e9e9e';
      default: return '#4dd0e1';
    }
  }};
  border: 1px solid ${props => {
    switch (props.action) {
      case 'camera': return 'rgba(77, 208, 225, 0.3)';
      case 'highlight': return 'rgba(255, 193, 7, 0.3)';
      case 'data': return 'rgba(76, 175, 80, 0.3)';
      case 'message': return 'rgba(156, 39, 176, 0.3)';
      case 'pause': return 'rgba(158, 158, 158, 0.3)';
      default: return 'rgba(77, 208, 225, 0.3)';
    }
  }};
  font-size: 9px;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 8px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const getActionIcon = (action: string) => {
  switch (action) {
    case 'camera': return '📹';
    case 'highlight': return '✨';
    case 'data': return '📊';
    case 'message': return '💬';
    case 'pause': return '⏸️';
    default: return '🎬';
  }
};

export const DemoInfo: React.FC<DemoInfoProps> = ({
  isVisible,
  currentStep,
  stepIndex,
  totalSteps,
  progress,
  timeRemaining,
  demoName,
  onStop
}) => {
  if (!isVisible || !currentStep) {
    return null;
  }

  return (
    <DemoContainer isVisible={isVisible}>
      <DemoHeader>
        <DemoTitle>{demoName || 'Demo Playing'}</DemoTitle>
        <StopButton onClick={onStop}>
          Stop Demo
        </StopButton>
      </DemoHeader>

      <StepCounter>
        Step {stepIndex + 1} of {totalSteps}
        {timeRemaining > 0 && ` • ${Math.ceil(timeRemaining)}s remaining`}
      </StepCounter>

      <StepInfo>
        <StepTitle>
          {currentStep.title}
          <ActionIndicator action={currentStep.action}>
            {getActionIcon(currentStep.action)} {currentStep.action}
          </ActionIndicator>
        </StepTitle>
        <StepDescription>{currentStep.description}</StepDescription>
        
        <ProgressContainer>
          <ProgressBar progress={progress} />
        </ProgressContainer>
        
        <TimeRemaining>
          {Math.ceil(timeRemaining)}s remaining
        </TimeRemaining>
      </StepInfo>
    </DemoContainer>
  );
};

export default DemoInfo;

import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface DemoStep {
  id: string;
  title: string;
  description: string;
  action: 'camera' | 'highlight' | 'data' | 'pause' | 'message' | 'timeline';
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
  isActive?: boolean;
}

const blink = keyframes`
  50% { border-color: transparent; }
`;

const DemoContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 100px;
  left: 15px;
  z-index: 1000;
  background: transparent;
  padding: 20px;
  min-width: 400px;
  max-width: 500px;
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transform: translateY(${props => props.isVisible ? '0' : '20px'});
  transition: all 0.3s ease-in-out;
`;

const DemoTitle = styled.h3`
  color: #4dd0e1;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 8px 0;
  text-shadow: 0 0 20px rgba(77, 208, 225, 0.8), 0 0 40px rgba(77, 208, 225, 0.4);
  letter-spacing: 1px;
`;

const StepTitle = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

const TypewriterText = styled.div`
  color: #b0bec5;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 16px;
  border-right: 2px solid #4dd0e1;
  animation: ${blink} 1s step-end infinite;
  text-shadow: 0 0 8px rgba(176, 190, 197, 0.3);
  min-height: 1.6em;
`;

const ProgressIndicator = styled.div`
  color: #78909c;
  font-size: 14px;
  text-align: left;
  margin-top: 12px;
  opacity: 0.8;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(120, 144, 156, 0.3);
  border-radius: 2px;
  margin-top: 12px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div<{ progress: number }>`
  height: 100%;
  background: linear-gradient(90deg, #4dd0e1, #26c6da);
  border-radius: 2px;
  width: ${props => props.progress}%;
  transition: width 0.1s ease-out;
  box-shadow: 0 0 8px rgba(77, 208, 225, 0.5);
`;

export const DemoInfo: React.FC<DemoInfoProps> = ({
  isVisible,
  currentStep,
  stepIndex,
  totalSteps,
  progress,
  demoName,
}) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!currentStep || !isVisible) {
      setDisplayText('');
      return;
    }

    setDisplayText('');
    const fullText = currentStep.description;
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentStep, isVisible]);

  if (!isVisible || !currentStep) {
    return null;
  }

  return (
    <DemoContainer isVisible={isVisible}>
      <DemoTitle>{demoName || 'Demo Playing'}</DemoTitle>
      <StepTitle>{currentStep.title}</StepTitle>
      <TypewriterText>
        {displayText}
      </TypewriterText>
      <ProgressIndicator>
        Step {stepIndex + 1} of {totalSteps}
      </ProgressIndicator>
      <ProgressBarContainer>
        <ProgressBarFill progress={progress} />
      </ProgressBarContainer>
    </DemoContainer>
  );
};

export default DemoInfo;

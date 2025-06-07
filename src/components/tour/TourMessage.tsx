import React from 'react';
import styled, { keyframes } from 'styled-components';

interface TourMessageProps {
  isVisible: boolean;
  message: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const TourMessageContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 100px; /* Below the header */
  left: 20px;
  z-index: 1000;
  background: transparent;
  padding: 14px;
  min-width: 210px;
  max-width: 315px;
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transform: translateX(${props => props.isVisible ? '0' : '-20px'});
  transition: all 0.3s ease-in-out;
  animation: ${props => props.isVisible ? fadeIn : 'none'} 0.3s ease-out;
`;

const MessageContent = styled.div`
  background: linear-gradient(135deg, rgba(20, 25, 30, 0.95), rgba(30, 35, 40, 0.95));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(77, 208, 225, 0.3);
  border-radius: 8px;
  padding: 12px 14px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      rgba(77, 208, 225, 0.8) 0%, 
      rgba(0, 255, 136, 0.8) 50%, 
      rgba(77, 208, 225, 0.8) 100%
    );
    opacity: 0.8;
  }
`;

const MessageText = styled.p`
  color: #e0e0e0;
  font-size: 10px;
  font-weight: 500;
  margin: 0;
  line-height: 1.4;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

const TourMessage: React.FC<TourMessageProps> = ({ 
  isVisible, 
  message 
}) => {
  if (!message) return null;

  return (
    <TourMessageContainer isVisible={isVisible}>
      <MessageContent>
        <MessageText>{message}</MessageText>
      </MessageContent>
    </TourMessageContainer>
  );
};

export default TourMessage;

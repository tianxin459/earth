import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setCurrentWeek } from "../redux/store";
import { formatWMWeek } from "../config/utils";

interface TimelineProps {
  wmweeks: string[];
}

const TimelineContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  background: rgba(0, 0, 0, 0.85);
  border: 2px solid rgba(77, 208, 225, 0.3);
  border-radius: 25px;
  padding: 15px 25px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 15px;
  min-width: 400px;
`;

const TimelineLabel = styled.div`
  color: #4dd0e1;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
`;

const TimelineTrack = styled.div`
  flex: 1;
  height: 6px;
  background: rgba(77, 208, 225, 0.2);
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  margin: 0 10px;
`;

const TimelineProgress = styled.div<{ progress: number }>`
  height: 100%;
  background: linear-gradient(90deg, #00ffe7 0%, #4dd0e1 100%);
  border-radius: 3px;
  width: ${(props) => props.progress}%;
  transition: width 0.3s ease;
`;

const TimelineDots = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  pointer-events: none;
`;

const TimelineDot = styled.div<{ $isActive: boolean }>`
  width: ${(props) => (props.$isActive ? "12px" : "8px")};
  height: ${(props) => (props.$isActive ? "12px" : "8px")};
  border-radius: 50%;
  background: ${(props) =>
    props.$isActive ? "#00ffe7" : "rgba(77, 208, 225, 0.6)"};
  border: 2px solid ${(props) => (props.$isActive ? "#ffffff" : "transparent")};
  transition: all 0.3s ease;
  cursor: pointer;
  pointer-events: all;
  box-shadow: ${(props) =>
    props.$isActive ? "0 0 10px rgba(0, 255, 231, 0.5)" : "none"};

  &:hover {
    background: #00ffe7;
    transform: scale(1.2);
  }
`;

const WmweekDisplay = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  min-width: 80px;
  text-align: center;
  background: rgba(77, 208, 225, 0.2);
  padding: 8px 12px;
  border-radius: 12px;
  border: 1px solid rgba(77, 208, 225, 0.4);
`;

const NavigationButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const NavButton = styled.button<{ disabled?: boolean }>`
  background: ${(props) =>
    props.disabled ? "rgba(77, 208, 225, 0.2)" : "rgba(77, 208, 225, 0.6)"};
  border: 1px solid
    ${(props) =>
      props.disabled ? "rgba(77, 208, 225, 0.3)" : "rgba(77, 208, 225, 0.8)"};
  color: ${(props) => (props.disabled ? "#666" : "#ffffff")};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: rgba(77, 208, 225, 0.8);
    transform: scale(1.1);
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }
`;

const Timeline: React.FC<TimelineProps> = ({ wmweeks }) => {
  const currentWmweek = useAppSelector((state) => state.week.currentWeek);
  const currentIndex = wmweeks.indexOf(currentWmweek);
  const progress =
    wmweeks.length > 1 ? (currentIndex / (wmweeks.length - 1)) * 100 : 0;

  const dispatch = useAppDispatch();

  const handleDotClick = (wmweek: string) => {
    dispatch(setCurrentWeek(wmweek));
  };

  const handleTrackClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = clickX / rect.width;
    const targetIndex = Math.round(percentage * (wmweeks.length - 1));
    const targetWmweek = wmweeks[targetIndex];
    if (targetWmweek) {
      dispatch(setCurrentWeek(targetWmweek));
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      dispatch(setCurrentWeek(wmweeks[currentIndex - 1]));
    }
  };

  const handleNext = () => {
    if (currentIndex < wmweeks.length - 1) {
      dispatch(setCurrentWeek(wmweeks[currentIndex + 1]));
    }
  };

  return (
    <TimelineContainer>
      <TimelineLabel>Week Timeline</TimelineLabel>

      <NavigationButtons>
        <NavButton
          onClick={handlePrevious}
          disabled={currentIndex <= 0}
          title="Previous Week"
        >
          ‹
        </NavButton>
      </NavigationButtons>

      <TimelineTrack onClick={handleTrackClick}>
        <TimelineProgress progress={progress} />
        <TimelineDots>
          {wmweeks.map((wmweek) => (
            <TimelineDot
              key={wmweek}
              $isActive={wmweek === currentWmweek}
              onClick={() => handleDotClick(wmweek)}
              title={formatWMWeek(wmweek)}
            />
          ))}
        </TimelineDots>
      </TimelineTrack>

      <NavigationButtons>
        <NavButton
          onClick={handleNext}
          disabled={currentIndex >= wmweeks.length - 1}
          title="Next Week"
        >
          ›
        </NavButton>
      </NavigationButtons>

      <WmweekDisplay>{formatWMWeek(currentWmweek)}</WmweekDisplay>
    </TimelineContainer>
  );
};

export default Timeline;

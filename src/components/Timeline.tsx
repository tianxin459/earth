import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setCurrentWeek } from "../redux/store";
import { formatWMWeek } from "../config/utils";
import { IconButton } from "./Icon";

const TimelineContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TimelineDot = styled.div<{ $isActive: boolean }>`
  flex: 1;
  min-width: 39px;
  min-height: 39px;
  padding-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: all 0.3s;
  cursor: pointer;
  flex-shrink: 0;
  position: relative;
  background: ${(ps) => (ps.$isActive ? "rgba(77, 208, 225, 0.6)" : "")};
  color: ${(ps) => (ps.$isActive ? "#fff" : "")};
  font-weight: bold;

  >small{
    margin-right: 3px;
    font-size: 60%;
    position: relative;
    bottom: -1px;
    font-weight: normal;
  }

  &:hover {
    color: #fff;
    background: rgba(77, 208, 225, 0.6);
    &::before {
      /* background-color: #fff; */
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 50%;
    width: 2px;
    margin-left: -1px;
    height: 10px;
    background-color: rgba(77, 208, 225, 0.2);
  }
`;

const Timeline = () => {
  const currentWmweek = useAppSelector((state) => state.week.currentWeek);
  const wmweeks = useAppSelector((state) => {
    return (state.loader.data?.week || []).map((item) => item.wmweek);
  });
  const currentIndex = wmweeks.indexOf(currentWmweek);
  const dispatch = useAppDispatch();

  const handleDotClick = (wmweek: string) => {
    dispatch(setCurrentWeek(wmweek));
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
      <IconButton
        onClick={handlePrevious}
        disabled={currentIndex <= 0}
        title="Previous Week"
        icon="left"
      />
      {wmweeks.map((wmweek) => (
        <TimelineDot
          key={wmweek}
          $isActive={wmweek === currentWmweek}
          onClick={() => handleDotClick(wmweek)}
          title={formatWMWeek(wmweek)}
        >
          <small>{wmweek.substring(0,4)}</small>
          {wmweek.substring(4)}
        </TimelineDot>
      ))}
      <IconButton
        onClick={handleNext}
        disabled={currentIndex >= wmweeks.length - 1}
        title="Next Week"
        icon="right"
      />
    </TimelineContainer>
  );
};

export default Timeline;

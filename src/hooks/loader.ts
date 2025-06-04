import { useCallback } from "react";
import { useAppDispatch } from "../redux/hook";
import fromJSON from "../data/from.json";
import toJSON from "../data/to.json";
import wmweekDataJSON from "../data/wmweekData.json";
import statisticsJSON from "../data/statistics.json";

import {
  loaderStart,
  loaderSuccess,
  loaderFail,
  setCurrentWeek,
} from "../redux/store";

export const useWeekDataLoader = () => {
  const dispatch = useAppDispatch();
  return useCallback(() => {
    dispatch(loaderStart());
    return Promise.resolve({
      from: fromJSON,
      to: toJSON,
      week: wmweekDataJSON,
      statistics: statisticsJSON,
    })
      .then((res) => {
        dispatch(loaderSuccess(res));
        dispatch(setCurrentWeek(res.week[res.week.length - 1].wmweek));
      })
      .catch((err) => {
        dispatch(loaderFail(err.message));
      });
  }, []);
};

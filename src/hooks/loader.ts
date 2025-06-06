import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
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
    const currentWeek = useAppSelector((state) => state.week.currentWeek);
    return useCallback(() => {
        dispatch(loaderStart());
        return Promise.resolve({
            from: fromJSON.concat([]),
            to: toJSON.concat([]),
            week: wmweekDataJSON.concat([]),
            statistics: statisticsJSON.concat([]),
        })
            .then((res) => {
                setTimeout(() => {
                    dispatch(loaderSuccess(res));
                    if (!res.week.find((item) => item.wmweek === currentWeek)) {
                        dispatch(
                            setCurrentWeek(res.week[res.week.length - 1].wmweek)
                        );
                    }
                }, 1200);
            })
            .catch((err) => {
                dispatch(loaderFail(err.message));
            });
    }, [currentWeek]);
};

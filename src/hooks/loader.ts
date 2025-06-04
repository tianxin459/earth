import { useCallback } from "react";
import { useAppDispatch } from "../redux/hook";
import fromJSON from "../data/from.json";
import toJSON from "../data/to.json";
import wmweekDataJSON from "../data/wmweekData.json";
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
        })
            .then((res) => {
                dispatch(loaderSuccess(res));
                dispatch(setCurrentWeek(res.week[0].wmweek));
            })
            .catch((err) => {
                dispatch(loaderFail(err.message));
            });
    }, []);
};

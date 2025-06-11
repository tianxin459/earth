import { useCallback, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import fromJSON from "../data/from.json";
import toJSON from "../data/to.json";
import wmweekDataJSON from "../data/wmweekData.json";
import statisticsJSON from "../data/statistics.json";
import aiJSON from "../data/ai.json";
import {
    loaderStart,
    loaderSuccess,
    loaderFail,
    setCurrentWeek,
    aiSummarySuccess,
    aiSummaryStart,
    aiSummaryFail,
} from "../redux/store";
import axios from "axios";

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

const requestAI = (week: string): Promise<{ data: string }> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: (aiJSON as any)[week],
            });
        }, 1200);
    });
    return axios.request({
        url: "https://cn09060nt103app.s09060.cn.wal-mart.com:8015/api/Earth/query-summary-by-ai",
        method: "POST",
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
        },
        data: {
            prompt: "按发货港口所在hub（全球航运网络、亚太网络、跨太平洋航线、欧洲门户、完整网络）总结数据，英文回复，300个单词以内",
            wmweek: week,
        },
    });
};

export const useAISummary = () => {
    const dispatch = useAppDispatch();
    const currentWeek = useAppSelector((state) => state.week.currentWeek);
    const refWeek = useRef(currentWeek);
    refWeek.current = currentWeek;

    useEffect(() => {
        const week = currentWeek;
        if (!week) {
            return;
        }
        dispatch(aiSummaryStart());
        requestAI(week)
            .then((res) => {
                if (week !== refWeek.current) {
                    return;
                }
                dispatch(
                    aiSummarySuccess({ content: res.data as string, week })
                );
            })
            .catch((err) => {
                if (week !== refWeek.current) {
                    return;
                }
                dispatch(aiSummaryFail(err.message));
            });
    }, [currentWeek]);
};

import styled from "styled-components";
import { BarContainer } from "./Container";
import { IconButton } from "../Icon";
import { useAppSelector } from "../../redux/hook";
import { useWeekDataLoader } from "../../hooks/loader";

const FlexBox = styled.div`
    display: flex;
    flex-shrink: 0;
    align-items: center;
`;

const WeekTag = styled.strong`
    display: block;
    padding: 2px 5px;
    color: #fff;
    background-color: orange;
    border-radius: 5px;
    margin-left: 20px;
    font-size: 80%;
    font-weight: normal;
`;

export const TopBar = () => {
    const loading = useAppSelector((state) => state.loader.loading);
    const loaded = useAppSelector((state) => state.loader.loaded);
    const currentWeek = useAppSelector((state) => state.week.currentWeek);
    const loadData = useWeekDataLoader();

    return (
        <BarContainer position="top">
            <FlexBox>
                <IconButton icon="menu" />
            </FlexBox>
            <FlexBox style={{lineHeight:1}}>
                <b>▪ PO ANALYTICS VISUAL CENTER ▪</b>
                <WeekTag>{currentWeek}</WeekTag>
            </FlexBox>
            <FlexBox style={{ gap: "5px" }}>
                <b style={{ fontSize: "80%", color: loading ? "orange" : "" }}>
                    {loading ? "LOADING" : loaded ? "READY" : ""}
                </b>
                {!loading && loaded ? (
                    <IconButton
                        icon="refresh"
                        onClick={() => {
                            loadData();
                        }}
                    />
                ) : (
                    <></>
                )}
            </FlexBox>
        </BarContainer>
    );
};

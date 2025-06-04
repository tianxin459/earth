import styled from "styled-components";
import { BarContainer } from "./Container";
import { Icon, IconButton } from "../Icon";
import { useAppSelector } from "../../redux/hook";
import { useWeekDataLoader } from "../../hooks/loader";

const FlexBox = styled.div`
    display: flex;
    flex-shrink: 0;
    align-items: center;
`;

export const TopBar = () => {
    const loading = useAppSelector((state) => state.loader.loading);
    const loaded = useAppSelector((state) => state.loader.loaded);
    const loadData = useWeekDataLoader();

    return (
        <BarContainer position="top">
            <FlexBox>
                <IconButton icon="menu" />
            </FlexBox>
            <b>▪ PO ANALYTICS VISUAL CENTER ▪</b>
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

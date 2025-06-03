import styled from "styled-components";
import { BarContainer } from "./Container";
import { Icon } from "../Icon";

const FlexBox = styled.div`
    display: flex;
`;

export const TopBar = ({loading}: { loading: boolean }) => {
    return (
        <BarContainer position="top">
            <FlexBox>
                <Icon type="menu" />
            </FlexBox>
            <b>▪ PO ANALYTICS VISUAL CENTER ▪</b>
            <FlexBox>
            </FlexBox>
        </BarContainer>
    );
};

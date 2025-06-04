import styled from "styled-components";
import { BarContainer } from "./Container";
import Timeline from "../Timeline";

export const BottomBar = () => {
    return <BarContainer position="bottom">
        <Timeline />
    </BarContainer>;
};

import styled from "styled-components";
import { BarContainer } from "./Container";
import { IconButton } from "../Icon";
import { useAppSelector } from "../../redux/hook";
import { useWeekDataLoader } from "../../hooks/loader";
import { DropdownMenu } from "../DropdownMenu";
import { useState, useRef, useEffect } from "react";

const FlexBox = styled.div`
    display: flex;
    flex-shrink: 0;
    align-items: center;
`;

const MenuContainer = styled.div`
    position: relative;
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

interface RegionOption {
    id: string;
    name: string;
    viewpoint: {
        lat: number;
        lng: number;
        altitude: number;
    };
}

interface TopBarProps {
    onMenuClick: () => void;
    onDemoSelect?: (demoId: string) => void;
    onRegionSelect?: (region: RegionOption) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ 
    onMenuClick, 
    onDemoSelect, 
    onRegionSelect 
}) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const loading = useAppSelector((state) => state.loader.loading);
    const loaded = useAppSelector((state) => state.loader.loaded);
    const currentWeek = useAppSelector((state) => state.week.currentWeek);
    const loadData = useWeekDataLoader();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleMenuClick = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <BarContainer position="top">
            <FlexBox>
                <MenuContainer ref={menuRef}>
                    <IconButton icon="menu" onClick={handleMenuClick} />
                    <DropdownMenu
                        isVisible={isMenuVisible}
                        onFilterClick={() => {
                            onMenuClick();
                            setIsMenuVisible(false);
                        }}
                        onDemoSelect={(demoId) => {
                            onDemoSelect?.(demoId);
                            setIsMenuVisible(false);
                        }}
                        onRegionSelect={(region) => {
                            onRegionSelect?.(region);
                            setIsMenuVisible(false);
                        }}
                    />
                </MenuContainer>
            </FlexBox>
            <FlexBox style={{ lineHeight: 1 }}>
                <b>▪ PO ANALYTICS VISUAL CENTER ▪</b>
                <WeekTag>{currentWeek}</WeekTag>
            </FlexBox>
            <FlexBox style={{ gap: "5px", width: "200px", justifyContent: "flex-end" }}>
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

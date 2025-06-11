import styled, { keyframes } from "styled-components";
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
    display: flex;
    align-items: center;
    gap: 8px;
`;

const HeaderTitle = styled.div`
    font-size: 14px;
    font-style: italic;
    color: #83eefc;
    letter-spacing: 1.5px;
    text-shadow: 1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000,
        -1px 1px 0px #000, 2px 2px 2px rgba(0, 0, 0, 0.8);
    filter: contrast(1.2) brightness(1.1);
    font-family: "Arial Black", Arial, sans-serif;
`;

const heartbeat = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

const DemoStatusIndicator = styled.div<{ isActive: boolean }>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(props) => (props.isActive ? "#00ff88" : "transparent")};
    box-shadow: ${(props) =>
        props.isActive ? "0 0 8px rgba(0, 255, 136, 0.6)" : "none"};
    margin-right: 8px;
    animation: ${(props) => (props.isActive ? heartbeat : "none")} 1.5s
        ease-in-out infinite;
    transition: all 0.3s ease;
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
    onHelpToggle?: () => void;
    onAISummaryToggle?: () => void;
    isAISummaryExpanded?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({
    onMenuClick,
    onDemoSelect,
    onRegionSelect,
    onHelpToggle,
    onAISummaryToggle,
    isAISummaryExpanded = false,
}) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const loading = useAppSelector((state) => state.loader.loading);
    const loaded = useAppSelector((state) => state.loader.loaded);
    const isDemoActive = useAppSelector((state) => state.demo.isActive);
    const loadData = useWeekDataLoader();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsMenuVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
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
                    {onAISummaryToggle && (
                        <IconButton 
                            icon="robot" 
                            onClick={onAISummaryToggle}
                            title={isAISummaryExpanded ? "Collapse AI Summary (A)" : "Expand AI Summary (A)"}
                            style={{
                                marginLeft: '8px',
                                background: isAISummaryExpanded 
                                    ? 'linear-gradient(135deg, rgba(77, 208, 225, 0.3), rgba(77, 208, 225, 0.2))' 
                                    : 'linear-gradient(135deg, rgba(20, 25, 30, 0.9), rgba(30, 35, 40, 0.9))',
                                borderColor: isAISummaryExpanded 
                                    ? 'rgba(77, 208, 225, 0.8)' 
                                    : 'rgba(77, 208, 225, 0.4)',
                                boxShadow: isAISummaryExpanded 
                                    ? '0 0 20px rgba(77, 208, 225, 0.5), 0 4px 15px rgba(0, 0, 0, 0.3)' 
                                    : '0 4px 15px rgba(0, 0, 0, 0.3)',
                            }}
                        />
                    )}
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
                <HeaderTitle>
                    ▪ Global Sourcing Purchase Order Dashboard ▪
                </HeaderTitle>
            </FlexBox>
            <FlexBox
                style={{
                    gap: "5px",
                    width: "200px",
                    justifyContent: "flex-end",
                }}
            >
                <DemoStatusIndicator isActive={isDemoActive} />
                <IconButton
                    icon="help"
                    onClick={onHelpToggle}
                    title="Keyboard Shortcuts (H)"
                />
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

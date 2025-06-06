import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { togglePort, selectAllPorts, clearSelectedPorts } from "../redux/store";
import { Icon } from "./Icon";

interface PortsSidebarProps {
    isCollapsed: boolean;
    onToggleCollapse: () => void;
}

const SidebarContainer = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    bottom: 20px;
    width: 15%;
    color: #4dd0e1;
    background: rgba(15, 25, 35, 0.6);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(77, 208, 225, 0.3);
    border-radius: 12px;
    z-index: 1005;
    font-family: "Courier New", monospace;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

const MainContent = styled.div`
    padding: 8px;
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(15, 25, 35, 0.3);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(77, 208, 225, 0.3);
        border-radius: 4px;

        &:hover {
            background: rgba(77, 208, 225, 0.5);
        }
    }
`;

const PortSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 8px;
    background: rgba(77, 208, 225, 0.1);
    border-radius: 6px;
    font-weight: bold;
`;

const SelectAllButton = styled.button`
    background: none;
    border: 1px solid #4dd0e1;
    color: #4dd0e1;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(77, 208, 225, 0.2);
    }
`;

const PortTag = styled.div<{ $selected: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30px;
    background: ${(props) =>
        props.$selected ? "rgba(77, 208, 225, 0.3)" : "rgba(15, 25, 35, 0.6)"};
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    transition: all 0.2s ease;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    text-align: center;
    word-break: break-word;
    grid-column: auto / span 1;
    position: relative;

    /* 如果内容宽度超过200px，则占据整行 */
    &:has(> span[data-width="wide"]) {
        grid-column: 1 / -1;
    }

    &:hover {
        background: rgba(77, 208, 225, 0.2);
    }

    & > [data-selected] {
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        svg {
            width: 13px;
            height: 13px;
        }
    }
`;

const PortsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
`;

const PortsBox = styled.div`
    margin-bottom: 10px;
    >h5{
        margin-top:0;
        margin-bottom: 10px;
    }
`;

const CollapseButton = styled.button<{ $collapsed: boolean }>`
    position: absolute;
    top: 50%;
    left: ${(props) => (props.$collapsed ? "25px" : "16.5%")};
    transform: translateY(-50%);
    width: 28px;
    height: 28px;
    background: linear-gradient(
        135deg,
        rgba(15, 25, 35, 0.9),
        rgba(25, 35, 45, 0.9)
    );
    backdrop-filter: blur(20px);
    border: 1px solid rgba(77, 208, 225, 0.4);
    border-radius: 6px;
    color: #4dd0e1;
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;
    z-index: 1001;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(77, 208, 225, 0.1);

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(77, 208, 225, 0.1) 50%,
            transparent 70%
        );
        border-radius: 6px;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover {
        background: linear-gradient(
            135deg,
            rgba(25, 35, 45, 0.95),
            rgba(35, 45, 55, 0.95)
        );
        border-color: rgba(77, 208, 225, 0.7);
        transform: translateY(-50%) translateX(2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4),
            0 0 20px rgba(77, 208, 225, 0.2),
            inset 0 1px 0 rgba(77, 208, 225, 0.2);

        &::before {
            opacity: 1;
        }
    }

    &:active {
        transform: translateY(-50%) translateX(0px) scale(0.95);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3),
            inset 0 2px 4px rgba(0, 0, 0, 0.2);
    }
`;

const ClearAllButton = styled.button`
    background: none;
    border: 1px solid #ff4081;
    color: #ff4081;
    padding: 4px 8px;
    border-radius: 4px;
    margin: 8px auto;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255, 64, 129, 0.1);
    }
`;

const PortsSidebar: React.FC<PortsSidebarProps> = ({
    isCollapsed,
    onToggleCollapse,
}) => {
    const dispatch = useAppDispatch();
    const selectedPorts = useAppSelector((state) => state.ports.selectedPorts);
    const fromPorts = useAppSelector((state) => state.ports.fromPorts);
    const toPorts = useAppSelector((state) => state.ports.toPorts);
    const ports = fromPorts.concat(toPorts);

    const handlePortToggle = (portId: string) => {
        dispatch(togglePort(portId));
    };

    const handleSelectAll = () => {
        if (selectedPorts.length === ports.length) {
            dispatch(clearSelectedPorts());
        } else {
            dispatch(selectAllPorts(ports.concat([])));
        }
    };

    const handleClearAll = () => {
        dispatch(clearSelectedPorts());
    };

    return (
        <>
            {!isCollapsed && (
                <SidebarContainer>
                    <MainContent>
                        <PortSection>
                            <SectionHeader>
                                <span>Filter Ports</span>
                                <SelectAllButton onClick={handleSelectAll}>
                                    {selectedPorts.length === ports.length
                                        ? "Deselect All"
                                        : "Select All"}
                                </SelectAllButton>
                            </SectionHeader>
                            {[
                                {
                                    type: "Destination",
                                    list: toPorts,
                                },
                                {
                                    type: "Departure",
                                    list: fromPorts,
                                },
                            ].map(({ type, list }) => {
                                return (
                                    <PortsBox key={type}>
                                        <h5>{type}</h5>
                                        <PortsGrid>
                                            {list.map((port) => (
                                                <PortTag
                                                    key={port}
                                                    $selected={selectedPorts.includes(
                                                        port
                                                    )}
                                                    onClick={() =>
                                                        handlePortToggle(port)
                                                    }
                                                >
                                                    <span
                                                        data-width={
                                                            port.length > 9
                                                                ? "wide"
                                                                : "normal"
                                                        }
                                                    >
                                                        {port}
                                                    </span>
                                                    {selectedPorts.includes(
                                                        port
                                                    ) && (
                                                        <span data-selected="true">
                                                            <Icon type="check" />
                                                        </span>
                                                    )}
                                                </PortTag>
                                            ))}
                                        </PortsGrid>
                                    </PortsBox>
                                );
                            })}
                        </PortSection>

                        {selectedPorts.length > 0 && (
                            <ClearAllButton onClick={handleClearAll}>
                                Clear All Selections
                            </ClearAllButton>
                        )}
                    </MainContent>
                </SidebarContainer>
            )}
            <CollapseButton $collapsed={isCollapsed} onClick={onToggleCollapse}>
                {isCollapsed ? <Icon type="right" /> : <Icon type="left" />}
            </CollapseButton>
        </>
    );
};

export default PortsSidebar;

import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { togglePort, selectAllPorts, clearSelectedPorts } from "../redux/store";
import { Icon, IconButton } from "./Icon";

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
    padding: 10px;
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

const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 8px;
    background: rgba(77, 208, 225, 0.1);
    border-radius: 6px;
    font-weight: bold;
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
    > h5 {
        margin-top: 0;
        margin-bottom: 10px;
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
                    <SectionHeader>
                        <span>Filter Ports</span>
                        <div style={{display:'flex'}}>
                            {selectedPorts.length > 0 && (
                                <IconButton
                                    icon="ban"
                                    onClick={handleClearAll}
                                />
                            )}
                            <IconButton
                                icon={
                                    selectedPorts.length === ports.length
                                        ? "check-circle-fill"
                                        : "check-circle"
                                }
                                onClick={handleSelectAll}
                            />
                            <IconButton
                                icon="close"
                                onClick={onToggleCollapse}
                            />
                        </div>
                    </SectionHeader>
                    <MainContent>
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
                    </MainContent>
                </SidebarContainer>
            )}
        </>
    );
};

export default PortsSidebar;

import React from 'react';
import styled from 'styled-components';

interface DropdownMenuProps {
    isVisible: boolean;
    onFilterClick: () => void;
}

const MenuContainer = styled.div<{ $visible: boolean }>`
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    background: rgba(15, 25, 35, 0.95);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(77, 208, 225, 0.3);
    border-radius: 8px;
    padding: 4px;
    transform: translateY(${props => props.$visible ? '0' : '-10px'});
    opacity: ${props => props.$visible ? 1 : 0};
    visibility: ${props => props.$visible ? 'visible' : 'hidden'};
    transition: all 0.2s ease;
    z-index: 1100;
`;

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    color: #4dd0e1;
    font-size: 14px;
    cursor: pointer;
    border-radius: 6px;
    white-space: nowrap;
    transition: all 0.2s ease;

    &:hover {
        background: rgba(77, 208, 225, 0.1);
    }

    svg {
        width: 14px;
        height: 14px;
    }
`;

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
    isVisible,
    onFilterClick,
}) => {
    return (
        <MenuContainer $visible={isVisible}>
            <MenuItem onClick={onFilterClick}>
                <span>Filter Ports</span>
            </MenuItem>
        </MenuContainer>
    );
};

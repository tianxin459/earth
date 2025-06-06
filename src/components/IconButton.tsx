import React from 'react';
import styled from 'styled-components';
import { Icon } from './Icon';

interface IconButtonProps {
    icon: string;
    onClick?: () => void;
}

const StyledButton = styled.button`
    width: 36px;
    height: 36px;
    background: rgba(15, 25, 35, 0.6);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(77, 208, 225, 0.3);
    border-radius: 8px;
    color: #4dd0e1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(77, 208, 225, 0.1);
        border-color: rgba(77, 208, 225, 0.5);
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
    return (
        <StyledButton onClick={onClick}>
            <Icon type={icon} />
        </StyledButton>
    );
};

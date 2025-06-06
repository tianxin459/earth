import type { ComponentProps, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export const Icon = ({
    type,
}: {
    type:
        | "up"
        | "down"
        | "left"
        | "right"
        | "menu"
        | "close"
        | "refresh"
        | "check"
        | "ban"
        | "check-circle"
        | "check-circle-fill";
}) => {
    if (type === "check-circle-fill") {
        return (
            <svg
                fill="currentColor"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m-1.076-4.076a.6.6 0 0 1-.848 0l-2-2 .848-.848L6.5 9.65l4.576-4.575.848.848z"></path>
            </svg>
        );
    }
    if (type === "check-circle") {
        return (
            <svg
                fill="currentColor"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="m6.854 10.854 5-5-.707-.708L6.5 9.793 4.854 8.146l-.708.708 2 2a.5.5 0 0 0 .708 0"></path>
                <path d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-1 0A6 6 0 1 0 2 8a6 6 0 0 0 12 0"></path>
            </svg>
        );
    }
    if (type === "ban") {
        return (
            <svg
                fill="currentColor"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-3.126 4.582L3.418 4.126a6 6 0 0 0 8.456 8.456m.707-.708a6 6 0 0 0-8.456-8.456z"></path>
            </svg>
        );
    }
    if (type === "check") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M12.646 3.896a.5.5 0 0 1 .75.66l-.042.048-7.5 7.5a.5.5 0 0 1-.655.045l-.047-.04-2.5-2.429a.5.5 0 0 1 .649-.758l.047.04 2.147 2.085z"
                />
            </svg>
        );
    }
    if (type === "down") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M3.146 5.396a.5.5 0 0 1 .66-.041l.048.041L8 9.543l4.146-4.147a.5.5 0 0 1 .66-.041l.048.041a.5.5 0 0 1 .041.66l-.041.048-4.5 4.5a.5.5 0 0 1-.66.041l-.048-.041-4.5-4.5a.5.5 0 0 1 0-.708"
                />
            </svg>
        );
    }
    if (type === "left") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M5.396 7.646a.5.5 0 0 0-.041.66l.041.048 4.5 4.5a.5.5 0 0 0 .75-.66l-.042-.048L6.458 8l4.146-4.146a.5.5 0 0 0 .041-.66l-.041-.048a.5.5 0 0 0-.66-.041l-.048.041z"
                />
            </svg>
        );
    }

    if (type === "right") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M10.604 7.646a.5.5 0 0 1 .041.66l-.041.048-4.5 4.5a.5.5 0 0 1-.75-.66l.042-.048L9.543 8 5.396 3.854a.5.5 0 0 1-.041-.66l.041-.048a.5.5 0 0 1 .66-.041l.048.041z"
                />
            </svg>
        );
    }

    if (type === "up") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M7.646 5.396a.5.5 0 0 1 .66-.041l.048.041 4.5 4.5a.5.5 0 0 1-.66.75l-.048-.042L8 6.458l-4.146 4.146a.5.5 0 0 1-.66.041l-.048-.041a.5.5 0 0 1-.041-.66l.041-.048z"
                />
            </svg>
        );
    }
    if (type === "menu") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M14.5 12.5a.5.5 0 0 1 .09.992l-.09.008h-13a.5.5 0 0 1-.09-.992l.09-.008zm0-5a.5.5 0 0 1 .09.992l-.09.008h-13a.5.5 0 0 1-.09-.992L1.5 7.5zm0-5a.5.5 0 0 1 .09.992l-.09.008h-13a.5.5 0 0 1-.09-.992L1.5 2.5z"
                />
            </svg>
        );
    }
    if (type === "close") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M3.05 3.05a.5.5 0 0 1 .707 0L8 7.293l4.243-4.243a.5.5 0 0 1 .707.707L8.707 8l4.243 4.243a.5.5 0 0 1-.707.707L8 8.707 3.757 12.95a.5.5 0 0 1-.707-.707L7.293 8 3.05 3.757a.5.5 0 0 1 0-.707"
                />
            </svg>
        );
    }
    if (type === "refresh") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
            >
                <path d="M2 8a6 6 0 0 1 9.969-4.5H10.5a.5.5 0 0 0 0 1h2.378c.345 0 .625-.28.625-.625V1.5a.5.5 0 1 0-1 0v1.14A7 7 0 1 0 15 8a.5.5 0 0 0-1 0A6 6 0 0 1 2 8" />
            </svg>
        );
    }
};

const ButtonContainer = styled.button`
    background: none;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    color: ${(props) => (props.disabled ? "#666" : "inherit")};

    > svg {
        color: inherit;
    }

    &:hover:not(:disabled) {
        background: rgba(77, 208, 225, 0.2);
        transform: scale(1.1);
    }

    &:active:not(:disabled) {
        transform: scale(0.95);
    }
`;

export const IconButton = (
    props: ButtonHTMLAttributes<HTMLButtonElement> & {
        icon: ComponentProps<typeof Icon>["type"];
    }
) => {
    return (
        <ButtonContainer type="button" {...props}>
            <Icon type={props.icon} />
        </ButtonContainer>
    );
};

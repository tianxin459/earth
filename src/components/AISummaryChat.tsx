import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useAppSelector } from "../redux/hook";
import ReactMarkdown from "react-markdown";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const Container = styled.div`
    position: absolute;
    top: 15px;
    left: 15px;
    max-width: 15%;
    max-height: 70%;
    background: linear-gradient(
        135deg,
        rgba(20, 25, 30, 0.95),
        rgba(30, 35, 40, 0.95)
    );
    backdrop-filter: blur(15px);
    border: 1px solid rgba(77, 208, 225, 0.3);
    border-radius: 12px;
    padding: 16px;
    color: #ebebeb;
    font-family: "Courier New", monospace;
    overflow-y: auto;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    animation: ${fadeIn} 0.3s ease-out;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(15, 25, 35, 0.3);
        border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(77, 208, 225, 0.3);
        border-radius: 3px;

        &:hover {
            background: rgba(77, 208, 225, 0.5);
        }
    }
`;

const Header = styled.div`
    color: #4dd0e1;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    text-shadow: 0 0 8px rgba(77, 208, 225, 0.4);
`;

const Content = styled.div<{ isVisible: boolean }>`
    font-size: 13px;
    line-height: 1.5;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transform: translateY(${(props) => (props.isVisible ? "0" : "10px")});
    transition: all 0.3s ease-out;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    padding-top: 8px;
    margin-top: 12px;
    border-top: 1px solid rgba(77, 208, 225, 0.2);

    p {
        margin: 0 0 12px 0;
        position: relative;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: #4dd0e1;
        margin: 16px 0 8px 0;
        font-size: 14px;
        font-weight: 600;
    }

    ul,
    ol {
        margin: 8px 0;
        padding-left: 20px;
    }

    li {
        margin: 4px 0;
    }

    code {
        background: rgba(77, 208, 225, 0.1);
        padding: 2px 4px;
        border-radius: 4px;
        font-family: "Courier New", monospace;
        font-size: 12px;
    }
`;

const Cursor = styled.span`
    display: inline-block;
    width: 2px;
    height: 1em;
    background-color: #4dd0e1;
    margin-left: 2px;
    vertical-align: middle;
    animation: ${blink} 0.8s step-start infinite;
`;

const AISummaryChat: React.FC = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [displayedContent, setDisplayedContent] = React.useState("");
    const aiLoading = useAppSelector((state) => state.aiSummary?.loading);
    const aiError = useAppSelector((state) => state.aiSummary?.error);
    const aiLoaded = useAppSelector((state) => state.aiSummary?.loaded);
    const aiContent = useAppSelector((state) => state.aiSummary?.data?.content);
    const aiWeek = useAppSelector((state) => state.aiSummary?.data?.week);
    const currentWeek = useAppSelector((state) => state.week.currentWeek);
    const refTimer = useRef<any>();

    useEffect(() => {
        return () => {
            clearInterval(refTimer.current);
        };
    }, []);

    useEffect(() => {
        const startTimer = (content: string) => {
            setDisplayedContent("");
            setIsVisible(true);
            let currentIndex = 0;
            const interval = setInterval(() => {
                if (currentIndex <= content.length) {
                    const str = content.slice(0, currentIndex);
                    setDisplayedContent(str);
                    currentIndex++;
                } else {
                    clearInterval(interval);
                }
            }, 30); // 调整这个值可以改变打字速度
            refTimer.current = interval;
        };
        if (aiContent && aiWeek) {
            if (aiWeek !== currentWeek) {
                clearInterval(refTimer.current);
                setIsVisible(false);
                setDisplayedContent("");
            } else {
                startTimer(aiContent);
            }
        }
    }, [aiContent, aiWeek, currentWeek]);

    if (!aiLoaded && !aiLoading && !aiError) return null;

    return (
        <Container>
            <Header>
                {aiLoading
                    ? "AI Summary loading..."
                    : aiLoaded
                    ? "AI Summary"
                    : "AI Summary Failed"}
            </Header>
            {!aiLoading && aiLoaded && !aiError ? (
                <Content isVisible={isVisible}>
                    <ReactMarkdown>{displayedContent}</ReactMarkdown>
                    {displayedContent !== aiContent && <Cursor />}
                </Content>
            ) : (
                <></>
            )}
        </Container>
    );
};

export default AISummaryChat;

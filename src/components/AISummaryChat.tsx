import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useAppSelector } from "../redux/hook";
import ReactMarkdown from "react-markdown";
import { IconButton } from "./Icon";

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

const RobotButton = styled.div<{ isExpanded: boolean }>`
    position: absolute;
    top: 15px;
    left: 15px;
    z-index: 1001;
    
    button {
        width: 42px !important;
        height: 42px !important;
        background: ${props => props.isExpanded 
            ? 'linear-gradient(135deg, rgba(77, 208, 225, 0.3), rgba(77, 208, 225, 0.2))' 
            : 'linear-gradient(135deg, rgba(20, 25, 30, 0.9), rgba(30, 35, 40, 0.9))'
        } !important;
        backdrop-filter: blur(15px);
        border: 2px solid ${props => props.isExpanded 
            ? 'rgba(77, 208, 225, 0.8)' 
            : 'rgba(77, 208, 225, 0.4)'
        } !important;
        border-radius: 12px !important;
        color: ${props => props.isExpanded ? '#4dd0e1' : '#4dd0e1'} !important;
        box-shadow: ${props => props.isExpanded 
            ? '0 0 20px rgba(77, 208, 225, 0.5), 0 4px 15px rgba(0, 0, 0, 0.3)' 
            : '0 4px 15px rgba(0, 0, 0, 0.3)'
        };
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
            background: linear-gradient(135deg, rgba(77, 208, 225, 0.4), rgba(77, 208, 225, 0.3)) !important;
            border-color: rgba(77, 208, 225, 1) !important;
            box-shadow: 0 0 25px rgba(77, 208, 225, 0.7), 0 6px 20px rgba(0, 0, 0, 0.4) !important;
            transform: scale(1.05) !important;
        }

        &:active {
            transform: scale(0.95) !important;
        }

        svg {
            width: 20px !important;
            height: 20px !important;
            filter: ${props => props.isExpanded 
                ? 'drop-shadow(0 0 8px rgba(77, 208, 225, 0.8))' 
                : 'drop-shadow(0 0 4px rgba(77, 208, 225, 0.4))'
            };
        }
    }
`;

const Container = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isExpanded',
})<{ isExpanded: boolean }>`
    position: absolute;
    top: 15px;
    left: 15px;
    max-width: ${props => props.isExpanded ? '15%' : '0'};
    max-height: ${props => props.isExpanded ? '70%' : '0'};
    width: ${props => props.isExpanded ? 'auto' : '0'};
    height: ${props => props.isExpanded ? 'auto' : '0'};
    background: linear-gradient(
        135deg,
        rgba(20, 25, 30, 0.95),
        rgba(30, 35, 40, 0.95)
    );
    backdrop-filter: blur(15px);
    border: 1px solid rgba(77, 208, 225, 0.3);
    border-radius: 12px;
    padding: ${props => props.isExpanded ? '16px' : '0'};
    margin-left: 50px; /* Leave space for robot button */
    color: #ebebeb;
    font-family: "Courier New", monospace;
    overflow: ${props => props.isExpanded ? 'auto' : 'hidden'};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    opacity: ${props => props.isExpanded ? 1 : 0};
    animation: ${props => props.isExpanded ? fadeIn : 'none'} 0.3s ease-out;
    transition: all 0.3s ease-out;

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
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [displayedContent, setDisplayedContent] = useState("");
    const aiLoading = useAppSelector((state) => state.aiSummary?.loading);
    const aiError = useAppSelector((state) => state.aiSummary?.error);
    const aiLoaded = useAppSelector((state) => state.aiSummary?.loaded);
    const aiContent = useAppSelector((state) => state.aiSummary?.data?.content);
    const aiWeek = useAppSelector((state) => state.aiSummary?.data?.week);
    const currentWeek = useAppSelector((state) => state.week.currentWeek);
    const refTimer = useRef<any>();
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const scrollToBottom = () => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    };

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
                    // 每次更新内容后自动滚动到底部
                    setTimeout(scrollToBottom, 0);
                } else {
                    clearInterval(interval);
                }
            }, 15); // 调整这个值可以改变打字速度 (15ms = 2倍速度)
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
        <>
            <RobotButton isExpanded={isExpanded}>
                <IconButton 
                    icon="robot" 
                    onClick={toggleExpanded}
                    title={isExpanded ? "收起 AI 总结" : "展开 AI 总结"}
                />
            </RobotButton>
            {isExpanded && (
                <Container isExpanded={isExpanded} ref={containerRef}>
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
            )}
        </>
    );
};

export default AISummaryChat;

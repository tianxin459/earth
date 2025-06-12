import React, {
    useState,
    useCallback,
    forwardRef,
    useImperativeHandle,
} from "react";
import styled from "styled-components";
import type { GlobeInstance } from "globe.gl";
import { useAppSelector, useAppDispatch } from "../../redux/hook";
import {
    setDemoActive,
    setCurrentDemo,
    setCurrentStep,
    setProgress,
    setCurrentWeek,
    setTourMessage,
    clearTourMessage,
} from "../../redux/store";
import { DemoInfo } from "./DemoInfo";

interface TourControlProps {
    globe: GlobeInstance | null;
    className?: string;
    onTourStateChange?: (isActive: boolean) => void;
    onRegionShowcaseToggle?: (isActive: boolean) => void;
    onDemoComplete?: () => void;
}

export interface TourControlRef {
    startDemoWithId: (demoId?: string | ScriptedDemo) => void;
}

interface ScriptedDemo {
    id: string;
    name: string;
    description: string;
    steps: DemoStep[];
}

interface DemoStep {
    id: string;
    title: string;
    description: string;
    action: "camera" | "highlight" | "data" | "pause" | "message" | "timeline";
    duration: number;
    parameters?: any;
}

// Define scripted demonstrations
const DEMO_SCRIPTS: ScriptedDemo[] = [
    {
        id: "quick-overview",
        name: "Quick Overview",
        description: "A 2-minute overview of global shipping routes",
        steps: [
            {
                id: "start",
                title: "Global Shipping Network",
                description:
                    "Welcome to the global purchase order visualization platform",
                action: "message",
                duration: 3,
                parameters: { viewpoint: { lat: 20, lng: 0, altitude: 2.5 } },
            },
            {
                id: "asia-focus",
                title: "Asia-Pacific Hub",
                description: "Major Asian manufacturing and shipping centers",
                action: "camera",
                duration: 8,
                parameters: { viewpoint: { lat: 35, lng: 120, altitude: 1.5 } },
            },
            {
                id: "trans-pacific",
                title: "Trans-Pacific Routes",
                description:
                    "Key shipping lanes connecting Asia to North America",
                action: "camera",
                duration: 6,
                parameters: {
                    viewpoint: { lat: 35, lng: -140, altitude: 1.8 },
                },
            },
            {
                id: "us-ports",
                title: "US Port Network",
                description: "Major US ports handling international cargo",
                action: "camera",
                duration: 8,
                parameters: {
                    viewpoint: { lat: 35, lng: -100, altitude: 1.6 },
                },
            },
            {
                id: "europe-routes",
                title: "European Gateways",
                description: "Key European ports and Mediterranean trade",
                action: "camera",
                duration: 8,
                parameters: { viewpoint: { lat: 50, lng: 10, altitude: 1.8 } },
            },
            {
                id: "global-view",
                title: "Complete Network",
                description: "The full global purchase order network",
                action: "camera",
                duration: 6,
                parameters: { viewpoint: { lat: 20, lng: 0, altitude: 3.0 } },
            },
        ],
    },
    {
        id: "detailed-analysis",
        name: "Detailed Analysis",
        description: "In-depth exploration of shipping patterns and costs",
        steps: [
            {
                id: "intro",
                title: "Data-Driven Logistics",
                description:
                    "Analyzing purchase order patterns and shipping costs",
                action: "message",
                duration: 4,
                parameters: { viewpoint: { lat: 20, lng: 0, altitude: 2.5 } },
            },
            {
                id: "cost-analysis",
                title: "Cost Distribution",
                description: "Understanding shipping cost variations by region",
                action: "highlight",
                duration: 10,
                parameters: { focus: "cost-data" },
            },
            {
                id: "route-efficiency",
                title: "Route Efficiency",
                description: "Analyzing the most efficient shipping routes",
                action: "highlight",
                duration: 10,
                parameters: { focus: "route-data" },
            },
            {
                id: "seasonal-trends",
                title: "Seasonal Patterns",
                description: "Weekly variations in purchase order volume",
                action: "data",
                duration: 12,
                parameters: { focus: "timeline" },
            },
            {
                id: "time-navigation",
                title: "Time Navigation Demo",
                description:
                    "Exploring data across different time periods using wmweek navigation",
                action: "timeline",
                duration: 15,
                parameters: {
                    focus: "timeline",
                    timeSteps: ["202519", "202520", "202521"],
                    description:
                        "Demonstrating how shipping patterns change over different weeks",
                },
            },
        ],
    },
    {
        id: "regional-deep-dive",
        name: "Regional Deep Dive",
        description: "Focused exploration of specific geographical regions",
        steps: [
            {
                id: "asia-detail",
                title: "Asia-Pacific Commerce",
                description: "Detailed view of Asian manufacturing hubs",
                action: "camera",
                duration: 12,
                parameters: {
                    viewpoint: { lat: 25, lng: 115, altitude: 1.2 },
                    highlights: [
                        "SHANGHAI",
                        "SHENZHEN",
                        "HONG KONG",
                        "SINGAPORE",
                    ],
                },
            },
            {
                id: "europe-detail",
                title: "European Trade Centers",
                description: "Key European ports and inland connections",
                action: "camera",
                duration: 12,
                parameters: {
                    viewpoint: { lat: 52, lng: 8, altitude: 1.2 },
                    highlights: [
                        "HAMBURG",
                        "ROTTERDAM",
                        "ANTWERP",
                        "BARCELONA",
                    ],
                },
            },
            {
                id: "americas-detail",
                title: "American Corridors",
                description: "North and South American shipping networks",
                action: "camera",
                duration: 12,
                parameters: {
                    viewpoint: { lat: 25, lng: -80, altitude: 1.8 },
                    highlights: [
                        "Los Angeles",
                        "New York",
                        "Houston",
                        "CALLAO",
                    ],
                },
            },
        ],
    },
];

const ControlContainer = styled.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    display: none; // Hide the control panel
    gap: 12px;
    align-items: center;
`;

const ControlPanel = styled.div`
    background: linear-gradient(
        135deg,
        rgba(20, 25, 30, 0.95),
        rgba(30, 35, 40, 0.95)
    );
    backdrop-filter: blur(15px);
    border: 1px solid rgba(77, 208, 225, 0.3);
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const QuickActionButton = styled.button<{
    variant?: "primary" | "secondary" | "accent";
}>`
    background: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "linear-gradient(135deg, #4dd0e1, #26c6da)";
            case "accent":
                return "linear-gradient(135deg, #ff6b6b, #ee5a52)";
            default:
                return "rgba(77, 208, 225, 0.1)";
        }
    }};
    border: 1px solid
        ${(props) => {
            switch (props.variant) {
                case "primary":
                case "accent":
                    return "transparent";
                default:
                    return "rgba(77, 208, 225, 0.3)";
            }
        }};
    color: ${(props) =>
        props.variant === "primary" || props.variant === "accent"
            ? "#1a1a1a"
            : "#4dd0e1"};
    border-radius: 8px;
    padding: 12px 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 140px;
    justify-content: center;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        background: ${(props) => {
            switch (props.variant) {
                case "primary":
                    return "linear-gradient(135deg, #26c6da, #4dd0e1)";
                case "accent":
                    return "linear-gradient(135deg, #ee5a52, #ff6b6b)";
                default:
                    return "rgba(77, 208, 225, 0.2)";
            }
        }};
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }
`;

const DemoSelector = styled.select`
    background: rgba(20, 25, 30, 0.9);
    border: 1px solid rgba(77, 208, 225, 0.3);
    color: #4dd0e1;
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 12px;
    cursor: pointer;
    outline: none;
    min-width: 180px;

    &:focus {
        border-color: #4dd0e1;
        box-shadow: 0 0 0 2px rgba(77, 208, 225, 0.2);
    }

    option {
        background: rgba(20, 25, 30, 0.95);
        color: #4dd0e1;
    }
`;

export const TourControl = forwardRef<TourControlRef, TourControlProps>(
    (
        {
            globe,
            className,
            onTourStateChange,
            onRegionShowcaseToggle,
            onDemoComplete,
        },
        ref
    ) => {
        const dispatch = useAppDispatch();
        const demoState = useAppSelector((state) => state.demo);

        const [selectedDemo, setSelectedDemo] = useState<string | ScriptedDemo>(
            "quick-overview"
        );
        const [stepTimer, setStepTimer] = useState<number | null>(null);
        const [timeRemaining, setTimeRemaining] = useState(0);

        const currentDemo =
            typeof selectedDemo === "object" && selectedDemo
                ? selectedDemo
                : DEMO_SCRIPTS.find((demo) => demo.id === selectedDemo);
        const currentStepData = currentDemo?.steps[demoState.currentStep];

        const executeStep = useCallback(
            (step: DemoStep) => {
                if (!globe) return;

                switch (step.action) {
                    case "camera":
                        if (step.parameters?.viewpoint) {
                            globe.pointOfView(step.parameters.viewpoint, 2000);

                            // Adjust auto-rotation
                            const controls = globe.controls();
                            controls.autoRotate = true;
                            controls.autoRotateSpeed = 0.1;
                        }
                        break;

                    case "message":
                        if (step.parameters?.viewpoint) {
                            globe.pointOfView(step.parameters.viewpoint, 2000);
                        }
                        break;

                    case "highlight":
                        // This would integrate with the existing highlight system
                        console.log("Highlighting:", step.parameters?.focus);
                        break;

                    case "data":
                        // This would trigger data panel focus
                        console.log(
                            "Focusing on data:",
                            step.parameters?.focus
                        );
                        break;

                    case "pause":
                        // Simple pause step
                        break;

                    case "timeline":
                        // Execute time navigation demo
                        console.log(
                            "Timeline action started:",
                            step.parameters
                        );
                        dispatch(
                            setTourMessage("Starting time navigation demo...")
                        );

                        if (step.parameters?.timeSteps) {
                            const timeSteps = step.parameters.timeSteps;
                            const stepDuration =
                                (step.duration * 1000) / timeSteps.length;
                            console.log(
                                "Timeline steps:",
                                timeSteps,
                                "Duration per step:",
                                stepDuration
                            );

                            timeSteps.forEach(
                                (weekString: string, index: number) => {
                                    setTimeout(() => {
                                        console.log(
                                            `Switching to week: ${weekString} (step ${
                                                index + 1
                                            }/${timeSteps.length})`
                                        );
                                        dispatch(setCurrentWeek(weekString));
                                        dispatch(
                                            setTourMessage(
                                                `Viewing week ${weekString} (${
                                                    index + 1
                                                }/${timeSteps.length})`
                                            )
                                        );

                                        // Add highlight effect to timeline
                                        const timelineElement =
                                            document.querySelector(
                                                ".timeline-container"
                                            );
                                        if (timelineElement) {
                                            console.log(
                                                "Adding highlight to timeline element"
                                            );
                                            timelineElement.classList.add(
                                                "demo-highlight"
                                            );
                                            setTimeout(() => {
                                                timelineElement.classList.remove(
                                                    "demo-highlight"
                                                );
                                            }, Math.min(stepDuration - 200, 1500)); // Remove highlight before next step
                                        } else {
                                            console.log(
                                                "Timeline element not found"
                                            );
                                        }
                                    }, stepDuration * index);
                                }
                            );

                            // Clear message after demo completes
                            setTimeout(() => {
                                dispatch(clearTourMessage());
                            }, step.duration * 1000);
                        } else {
                            console.log("No timeSteps found in parameters");
                            dispatch(
                                setTourMessage(
                                    "Time navigation demo: No time steps configured"
                                )
                            );
                        }
                        break;
                }
            },
            [globe, dispatch]
        );

        const stopDemo = useCallback(() => {
            // Clear any existing timers
            if (stepTimer) {
                clearTimeout(stepTimer);
                setStepTimer(null);
            }

            dispatch(setDemoActive(false));
            dispatch(setCurrentStep(0));
            dispatch(setProgress(0));
            setTimeRemaining(0);
            onTourStateChange?.(false);

            // Restore normal auto-rotation
            if (globe) {
                const controls = globe.controls();
                controls.autoRotateSpeed = 0.3;
            }
        }, [globe, onTourStateChange, stepTimer, dispatch]);

        const startStepTimer = useCallback(
            (step: DemoStep, stepIndex: number) => {
                const stepDuration = step.duration * 1000;
                const startTime = Date.now();
                let animationFrame: number | null = null;

                // Set initial time remaining
                setTimeRemaining(step.duration);

                const updateProgress = () => {
                    const elapsed = Date.now() - startTime;
                    const stepProgress = Math.min(
                        (elapsed / stepDuration) * 100,
                        100
                    );
                    const remaining = Math.max(
                        0,
                        step.duration - elapsed / 1000
                    );

                    dispatch(setProgress(stepProgress));
                    setTimeRemaining(remaining);

                    if (stepProgress < 100) {
                        animationFrame = requestAnimationFrame(updateProgress);
                    }
                };

                updateProgress();

                const timer = setTimeout(() => {
                    if (animationFrame) {
                        cancelAnimationFrame(animationFrame);
                    }

                    // Move to next step
                    const nextStepIndex = stepIndex + 1;

                    if (nextStepIndex >= (currentDemo?.steps.length || 0)) {
                        // Demo completed
                        dispatch(setDemoActive(false));
                        dispatch(setCurrentStep(0));
                        dispatch(setProgress(0));
                        setTimeRemaining(0);
                        onTourStateChange?.(false);
                        onDemoComplete?.();

                        // Restore normal auto-rotation
                        if (globe) {
                            const controls = globe.controls();
                            controls.autoRotateSpeed = 0.3;
                        }
                        return;
                    }

                    // Continue to next step
                    dispatch(setCurrentStep(nextStepIndex));
                    dispatch(setProgress(0));

                    const nextStep = currentDemo!.steps[nextStepIndex];
                    executeStep(nextStep);
                    startStepTimer(nextStep, nextStepIndex);
                }, stepDuration);

                setStepTimer(timer);

                return () => {
                    clearTimeout(timer);
                    if (animationFrame) {
                        cancelAnimationFrame(animationFrame);
                    }
                };
            },
            [
                currentDemo,
                executeStep,
                globe,
                onTourStateChange,
                onDemoComplete,
                dispatch,
            ]
        );

        const processNextStep = useCallback(() => {
            if (!currentDemo || !demoState.isActive) return;

            const nextStepIndex = demoState.currentStep + 1;

            if (nextStepIndex >= currentDemo.steps.length) {
                // Demo complete - stop the demo
                stopDemo();
                return;
            }

            dispatch(setCurrentStep(nextStepIndex));
            dispatch(setProgress(0));

            const step = currentDemo.steps[nextStepIndex];
            executeStep(step);

            // Start timer for this step
            const stepDuration = step.duration * 1000;
            let startTime = Date.now();
            let animationFrame: number;

            const progressUpdate = () => {
                if (!demoState.isActive) return;

                const elapsed = Date.now() - startTime;
                const stepProgress = Math.min(
                    (elapsed / stepDuration) * 100,
                    100
                );
                dispatch(setProgress(stepProgress));

                if (stepProgress < 100) {
                    animationFrame = requestAnimationFrame(progressUpdate);
                }
            };

            progressUpdate();

            const timer = setTimeout(() => {
                if (demoState.isActive) {
                    processNextStep();
                }
            }, stepDuration);

            setStepTimer(timer);

            // Cleanup function
            return () => {
                clearTimeout(timer);
                if (animationFrame) {
                    cancelAnimationFrame(animationFrame);
                }
            };
        }, [
            currentDemo,
            demoState.currentStep,
            demoState.isActive,
            executeStep,
            stopDemo,
            dispatch,
        ]);

        const startDemoWithId = useCallback(
            (demo?: string | ScriptedDemo) => {
                const targetDemo =
                    typeof demo === "object"
                        ? demo
                        : demo
                        ? DEMO_SCRIPTS.find((d) => d.id === demo)
                        : currentDemo;

                if (!targetDemo || !globe) return;

                const demoId =
                    typeof demo === "object" ? undefined : (demo as string);

                // Clear any existing timers first
                if (stepTimer) {
                    clearTimeout(stepTimer);
                    setStepTimer(null);
                }

                // If switching to a new demo, update the selected demo
                if (demoId && demoId !== selectedDemo) {
                    setSelectedDemo(demoId);
                } else if (!demoId && demo) {
                    setSelectedDemo(demo as ScriptedDemo);
                }

                // Interrupt any active region showcase
                onRegionShowcaseToggle?.(false);

                dispatch(setDemoActive(true));
                dispatch(setCurrentStep(0));
                dispatch(setProgress(0));
                setTimeRemaining(0);
                onTourStateChange?.(true);

                const step = targetDemo.steps[0];
                executeStep(step);

                // Use the targetDemo directly instead of currentDemo to avoid stale closure
                const stepDuration = step.duration * 1000;
                const startTime = Date.now();
                let animationFrame: number | null = null;

                // Set initial time remaining
                setTimeRemaining(step.duration);

                const updateProgress = () => {
                    const elapsed = Date.now() - startTime;
                    const stepProgress = Math.min(
                        (elapsed / stepDuration) * 100,
                        100
                    );
                    const remaining = Math.max(
                        0,
                        step.duration - elapsed / 1000
                    );

                    dispatch(setProgress(stepProgress));
                    setTimeRemaining(remaining);

                    if (stepProgress < 100) {
                        animationFrame = requestAnimationFrame(updateProgress);
                    }
                };

                updateProgress();

                const timer = setTimeout(() => {
                    if (animationFrame) {
                        cancelAnimationFrame(animationFrame);
                    }

                    // Move to next step
                    const nextStepIndex = 1;

                    if (nextStepIndex >= targetDemo.steps.length) {
                        // Demo completed
                        dispatch(setDemoActive(false));
                        dispatch(setCurrentStep(0));
                        dispatch(setProgress(0));
                        setTimeRemaining(0);
                        onTourStateChange?.(false);
                        onDemoComplete?.();

                        // Restore normal auto-rotation
                        if (globe) {
                            const controls = globe.controls();
                            controls.autoRotateSpeed = 0.3;
                        }
                        return;
                    }

                    // Continue to next step
                    dispatch(setCurrentStep(nextStepIndex));
                    dispatch(setProgress(0));

                    const nextStep = targetDemo.steps[nextStepIndex];
                    executeStep(nextStep);
                    startStepTimer(nextStep, nextStepIndex);
                }, stepDuration);

                setStepTimer(timer);
            },
            [
                currentDemo,
                globe,
                stepTimer,
                onTourStateChange,
                executeStep,
                startStepTimer,
                selectedDemo,
                onDemoComplete,
                dispatch,
            ]
        );

        const startDemo = useCallback(() => {
            startDemoWithId();
        }, [startDemoWithId]);

        const handleDemoChange = useCallback(
            (demoId: string) => {
                if (demoState.isActive) {
                    // If currently playing a demo, interrupt it and start the new one
                    startDemoWithId(demoId);
                } else {
                    // If not playing, just update the selection
                    setSelectedDemo(demoId);
                }
            },
            [demoState.isActive, startDemoWithId]
        );

        // Expose methods through ref
        useImperativeHandle(
            ref,
            () => ({
                startDemoWithId,
            }),
            [startDemoWithId]
        );

        const jumpToGlobalView = useCallback(() => {
            if (!globe) return;
            globe.pointOfView({ lat: 20, lng: 0, altitude: 2.5 }, 2000);
        }, [globe]);

        const focusOnUSA = useCallback(() => {
            if (!globe) return;
            globe.pointOfView({ lat: 39, lng: -98, altitude: 1.5 }, 2000);
        }, [globe]);

        const focusOnAsia = useCallback(() => {
            if (!globe) return;
            globe.pointOfView({ lat: 35, lng: 120, altitude: 1.5 }, 2000);
        }, [globe]);

        return (
            <>
                <ControlContainer className={className}>
                    {/* <ControlPanel>
                        <DemoSelector
                            value={selectedDemo}
                            onChange={(e) => handleDemoChange(e.target.value)}
                            disabled={false}
                        >
                            {DEMO_SCRIPTS.map((demo) => (
                                <option key={demo.id} value={demo.id}>
                                    {demo.name} ({demo.steps.length} steps)
                                </option>
                            ))}
                        </DemoSelector>
                    </ControlPanel> */}

                    <QuickActionButton
                        variant={demoState.isActive ? "accent" : "primary"}
                        onClick={demoState.isActive ? stopDemo : startDemo}
                        disabled={!globe}
                    >
                        {demoState.isActive ? "Stop Demo" : "Start Demo"}
                    </QuickActionButton>

                    <QuickActionButton
                        variant="primary"
                        onClick={() => {
                            // Stop any active demo first
                            if (demoState.isActive) {
                                stopDemo();
                            }
                            onRegionShowcaseToggle?.(true);
                        }}
                        disabled={!globe}
                    >
                        🎯 Region Tour
                    </QuickActionButton>

                    <QuickActionButton
                        variant="secondary"
                        onClick={jumpToGlobalView}
                        disabled={demoState.isActive}
                    >
                        🌍 Global
                    </QuickActionButton>

                    <QuickActionButton
                        variant="secondary"
                        onClick={focusOnAsia}
                        disabled={demoState.isActive}
                    >
                        🏭 Asia
                    </QuickActionButton>

                    <QuickActionButton
                        variant="secondary"
                        onClick={focusOnUSA}
                        disabled={demoState.isActive}
                    >
                        🏛️ USA
                    </QuickActionButton>
                </ControlContainer>

                <DemoInfo
                    isVisible={demoState.isActive && !!currentStepData}
                    currentStep={currentStepData || null}
                    stepIndex={demoState.currentStep}
                    totalSteps={currentDemo?.steps.length || 0}
                    progress={demoState.progress}
                    timeRemaining={timeRemaining}
                    demoName={currentDemo?.name}
                    onStop={stopDemo}
                    isActive={demoState.isActive}
                />
            </>
        );
    }
);

export default TourControl;

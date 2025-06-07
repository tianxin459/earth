import { useEffect, useRef, useState } from "react";
import type { GlobeInstance } from "globe.gl";
import { initGlobe } from "./settings/init";
import { setMaterial } from "./settings/material";
import { convertArcData, setArcs, resetArcHoverState } from "./settings/arc";
import { setLabels } from "./settings/label";
import { applyControls } from "./settings/control";
import { useAppSelector } from "../../redux/hook";
import { styled } from "styled-components";
import RegionShowcase from "../tour/RegionShowcase";
import TourControl from "../tour/TourControl";
import { useKeyboardShortcuts, ShortcutsHelp } from "../../hooks/useKeyboardShortcuts";

const GlobeContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  .float-tooltip-kap {
    z-index: 2;
  }
  canvas {
    z-index: 1;
  }
`;

const HelpToggle = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background: rgba(77, 208, 225, 0.1);
  border: 1px solid rgba(77, 208, 225, 0.3);
  color: #4dd0e1;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background: rgba(77, 208, 225, 0.2);
    transform: scale(1.1);
  }
`;

const TourStatusNotification = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.15), rgba(77, 208, 225, 0.15));
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 8px;
  padding: 12px 20px;
  color: #00ff88;
  font-size: 14px;
  font-weight: 500;
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
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

export const GlobeEarth = (props: {
  isDashboardCollapsed: boolean;
  isPortSidebarCollapsed: boolean;
  selectedDemo?: string | null;
  selectedRegion?: RegionOption | null;
  onDemoComplete?: () => void;
  onRegionComplete?: () => void;
}) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const refGlobe = useRef<GlobeInstance | null>(null);
  const [isTourActive, setIsTourActive] = useState(false);
  const [isRegionShowcaseActive, setIsRegionShowcaseActive] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [tourMessage, setTourMessage] = useState("");
  const tourControlRef = useRef<any>(null);

  const fromData = useAppSelector((state) => state.loader.data?.from);
  const toData = useAppSelector((state) => state.loader.data?.to);
  const routeData = useAppSelector(
    (state) =>
      state.loader.data?.week.find(
        (item) => item.wmweek === state.week.currentWeek
      )?.routeData
  );
  const selectedPorts = useAppSelector((state) => state.ports.selectedPorts);

  const setGlobe = () => {
    const globe = refGlobe.current!;
    if (!fromData || !toData || !routeData) {
      globe.arcsData([]).labelsData([]);
      resetArcHoverState(); // 重置hover状态
      return;
    }

    // 数据变化时重置hover状态，避免状态不一致
    resetArcHoverState();

    const { arcRoutes, routes } = convertArcData(
      fromData!,
      toData!,
      routeData!,
      selectedPorts
    );
    setArcs(globe, arcRoutes);
    setLabels(globe, fromData!, toData!, routes);
  };

  useEffect(() => {
    refGlobe.current = initGlobe(refContainer.current!);
    const timer = setMaterial(refGlobe.current);
    applyControls(refGlobe.current, refContainer.current!);
    setGlobe();
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    setGlobe();
  }, [fromData, toData, routeData, selectedPorts]);

  useEffect(() => {
    if (refGlobe.current && refContainer.current) {
      const container = refContainer.current;
      const containerWidth = container.clientWidth;

      // Calculate horizontal offset based on both sidebars
      let translateX = 0;

      // Adjust for dashboard sidebar (left side)
      if (!props.isDashboardCollapsed) {
        translateX -= containerWidth * 0.1; // Move left when dashboard is expanded
      }

      // Adjust for port sidebar (right side)
      if (!props.isPortSidebarCollapsed) {
        translateX += containerWidth * 0.1; // Move right when port sidebar is expanded
      }

      // Apply the calculated transform to center the globe
      container.style.transform = `translateX(${translateX}px)`;
    }
  }, [props.isDashboardCollapsed, props.isPortSidebarCollapsed]);

  // Setup keyboard shortcuts
  const { shortcuts } = useKeyboardShortcuts({
    globe: refGlobe.current,
    isEnabled: true,
    onShortcutTriggered: (_, action) => {
      setTourMessage(action);
      setTimeout(() => setTourMessage(""), 3000);
    }
  });

  // Handle help toggle with H key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'h' && !event.ctrlKey && !event.metaKey) {
        const target = event.target as HTMLElement;
        if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
          event.preventDefault();
          setShowHelp(prev => !prev);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle external demo selection from dropdown menu
  useEffect(() => {
    if (props.selectedDemo && tourControlRef.current) {
      // Start the selected demo
      tourControlRef.current.startDemoWithId(props.selectedDemo);
      setTourMessage(`Starting demo: ${props.selectedDemo}`);
      setTimeout(() => setTourMessage(""), 3000);
    }
  }, [props.selectedDemo]);

  // Handle external region selection from dropdown menu
  useEffect(() => {
    if (props.selectedRegion && refGlobe.current) {
      // Navigate to the selected region
      refGlobe.current.pointOfView(props.selectedRegion.viewpoint, 2000);
      setTourMessage(`Navigating to: ${props.selectedRegion.name}`);
      setTimeout(() => setTourMessage(""), 3000);
    }
  }, [props.selectedRegion]);

  return (
    <>
      <GlobeContainer ref={refContainer} />
      
      <RegionShowcase 
        globe={refGlobe.current}
        isActive={isRegionShowcaseActive}
        onRegionChange={(region) => {
          setTourMessage(`Showcasing: ${region.name}`);
          setTimeout(() => setTourMessage(""), 4000);
        }}
        onTourComplete={() => {
          // Region tour completed - hide showcase and return to initial state
          setIsRegionShowcaseActive(false);
          setTourMessage("Region showcase completed");
          setTimeout(() => setTourMessage(""), 3000);
        }}
        onTourInterrupted={() => {
          // Region tour was interrupted - hide showcase
          setIsRegionShowcaseActive(false);
          setTourMessage("Region tour interrupted");
          setTimeout(() => setTourMessage(""), 2000);
        }}
      />
      
      <TourControl 
        ref={tourControlRef}
        globe={refGlobe.current}
        onTourStateChange={(isActive) => {
          setIsTourActive(isActive);
          if (isActive) {
            setTourMessage("Demo started - Use keyboard shortcuts for quick navigation");
            setTimeout(() => setTourMessage(""), 4000);
          }
        }}
        onRegionShowcaseToggle={(isActive) => {
          setIsRegionShowcaseActive(isActive);
          if (isActive) {
            setTourMessage("Region showcase activated - Tour will start automatically");
            setTimeout(() => setTourMessage(""), 4000);
          }
        }}
        onDemoComplete={() => {
          // Demo completed - return to initial state
          setIsTourActive(false);
          setTourMessage("Demo completed - Returned to initial state");
          setTimeout(() => setTourMessage(""), 3000);
          props.onDemoComplete?.();
        }}
      />
      
      <TourStatusNotification isVisible={!!tourMessage}>
        {tourMessage}
      </TourStatusNotification>
      
      <ShortcutsHelp 
        shortcuts={shortcuts}
        isVisible={showHelp}
        onClose={() => setShowHelp(false)}
      />
      
      <HelpToggle onClick={() => setShowHelp(prev => !prev)}>
        H
      </HelpToggle>
    </>
  );
};

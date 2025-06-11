import { useEffect, useRef, useState } from "react";
import type { GlobeInstance } from "globe.gl";
import { initGlobe } from "./settings/init";
import { setMaterial } from "./settings/material";
import { convertArcData, setArcs, resetArcHoverState } from "./settings/arc";
import { setLabels } from "./settings/label";
import { applyControls } from "./settings/control";
import { useAppSelector, useAppDispatch } from "../../redux/hook";
import { styled } from "styled-components";
import RegionShowcase from "../tour/RegionShowcase";
import TourControl, { type TourControlRef } from "../tour/TourControl";
import TourMessage from "../tour/TourMessage";
import { useKeyboardShortcuts, ShortcutsHelp } from "../../hooks/useKeyboardShortcuts";
import { setTourMessage, clearTourMessage } from "../../redux/store";

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
  showHelp?: boolean;
  onHelpToggle?: () => void;
}) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const refGlobe = useRef<GlobeInstance | null>(null);
  const [isTourActive, setIsTourActive] = useState(false);
  const [isRegionShowcaseActive, setIsRegionShowcaseActive] = useState(false);
  const tourControlRef = useRef<TourControlRef>(null);
  
  const dispatch = useAppDispatch();
  const tourMessage = useAppSelector((state) => state.demo.tourMessage);

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
    tourControlRef: tourControlRef,
    onShortcutTriggered: (_, action) => {
      dispatch(setTourMessage(action));
      setTimeout(() => dispatch(clearTourMessage()), 3000);
    }
  });

  // Handle help toggle with H key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'h' && !event.ctrlKey && !event.metaKey) {
        const target = event.target as HTMLElement;
        if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
          event.preventDefault();
          props.onHelpToggle?.();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [props.onHelpToggle]);

  // Handle external demo selection from dropdown menu
  useEffect(() => {
    if (props.selectedDemo && tourControlRef.current) {
      // Start the selected demo
      tourControlRef.current.startDemoWithId(props.selectedDemo);
      dispatch(setTourMessage(`Starting demo: ${props.selectedDemo}`));
      setTimeout(() => dispatch(clearTourMessage()), 3000);
    }
  }, [props.selectedDemo, dispatch]);

  // Handle external region selection from dropdown menu
  useEffect(() => {
    if (props.selectedRegion && refGlobe.current) {
      // Navigate to the selected region
      refGlobe.current.pointOfView(props.selectedRegion.viewpoint, 2000);
      dispatch(setTourMessage(`Navigating to: ${props.selectedRegion.name}`));
      setTimeout(() => dispatch(clearTourMessage()), 3000);
    }
  }, [props.selectedRegion, dispatch]);

  return (
    <>
      <GlobeContainer ref={refContainer} />
      
      <RegionShowcase 
        globe={refGlobe.current}
        isActive={isRegionShowcaseActive}
        onRegionChange={(region) => {
          dispatch(setTourMessage(`Showcasing: ${region.name}`));
          setTimeout(() => dispatch(clearTourMessage()), 4000);
        }}
        onTourComplete={() => {
          // Region tour completed - hide showcase and return to initial state
          setIsRegionShowcaseActive(false);
          dispatch(setTourMessage("Region showcase completed"));
          setTimeout(() => dispatch(clearTourMessage()), 3000);
        }}
        onTourInterrupted={() => {
          // Region tour was interrupted - hide showcase
          setIsRegionShowcaseActive(false);
          dispatch(setTourMessage("Region tour interrupted"));
          setTimeout(() => dispatch(clearTourMessage()), 2000);
        }}
      />
      
      <TourControl 
        ref={tourControlRef}
        globe={refGlobe.current}
        onTourStateChange={(isActive) => {
          setIsTourActive(isActive);
          if (isActive) {
            dispatch(setTourMessage("Demo started - Use keyboard shortcuts for quick navigation"));
            setTimeout(() => dispatch(clearTourMessage()), 4000);
          }
        }}
        onRegionShowcaseToggle={(isActive) => {
          setIsRegionShowcaseActive(isActive);
          if (isActive) {
            dispatch(setTourMessage("Region showcase activated - Tour will start automatically"));
            setTimeout(() => dispatch(clearTourMessage()), 4000);
          }
        }}
        onDemoComplete={() => {
          // Demo completed - return to initial state
          setIsTourActive(false);
          props.onDemoComplete?.();
        }}
      />
      
      <TourMessage 
        isVisible={!!tourMessage}
        message={tourMessage}
      />
      
      <ShortcutsHelp 
        shortcuts={shortcuts}
        isVisible={props.showHelp || false}
        onClose={() => props.onHelpToggle?.()}
      />
    </>
  );
};

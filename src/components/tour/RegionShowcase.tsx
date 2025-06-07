import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import type { GlobeInstance } from 'globe.gl';

interface RegionConfig {
  id: string;
  name: string;
  description: string;
  viewpoint: {
    lat: number;
    lng: number;
    altitude: number;
  };
  duration: number; // seconds to focus on this region
  highlights?: string[]; // specific ports or features to highlight
}

interface RegionShowcaseProps {
  globe: GlobeInstance | null;
  isActive: boolean;
  onRegionChange?: (region: RegionConfig) => void;
  onTourComplete?: () => void;
  onTourInterrupted?: () => void;
}

// Define regional focus areas based on shipping data
const REGIONS: RegionConfig[] = [
  {
    id: 'asia-pacific',
    name: 'Asia Pacific Hub',
    description: 'Major shipping routes through China, Japan, and Southeast Asia',
    viewpoint: { lat: 35.0, lng: 120.0, altitude: 1.5 },
    duration: 5, // Reduced duration for testing
    highlights: ['SHANGHAI', 'BUSAN', 'SINGAPORE', 'HONG KONG']
  },
  {
    id: 'europe',
    name: 'European Gateway',
    description: 'Key European ports and Mediterranean trade routes',
    viewpoint: { lat: 50.0, lng: 10.0, altitude: 1.8 },
    duration: 5,
    highlights: ['ANTWERP', 'HAMBURG', 'ROTTERDAM', 'BARCELONA']
  },
  {
    id: 'north-america',
    name: 'North American Corridor',
    description: 'Major US ports and trans-Pacific trade connections',
    viewpoint: { lat: 35.0, lng: -100.0, altitude: 1.8 },
    duration: 5,
    highlights: ['Los Angeles', 'New York', 'Houston', 'Savannah']
  },
  {
    id: 'middle-east',
    name: 'Middle East Trade Hub',
    description: 'Strategic shipping lanes through the Red Sea and Persian Gulf',
    viewpoint: { lat: 25.0, lng: 45.0, altitude: 1.6 },
    duration: 5,
    highlights: ['DUBAI', 'JEDDAH', 'AQABA', 'BAHRAIN']
  },
  {
    id: 'south-america',
    name: 'South American Routes',
    description: 'Pacific and Atlantic coast shipping connections',
    viewpoint: { lat: -15.0, lng: -60.0, altitude: 1.8 },
    duration: 5,
    highlights: ['CALLAO', 'BUENAVENTURA', 'Buenos Aires', 'SANTOS']
  },
  {
    id: 'global-overview',
    name: 'Global Trade Network',
    description: 'Complete worldwide shipping network overview',
    viewpoint: { lat: 20.0, lng: 0.0, altitude: 2.5 },
    duration: 6,
    highlights: []
  }
];

const ShowcaseContainer = styled.div<{ isActive: boolean }>`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  background: linear-gradient(135deg, rgba(20, 25, 30, 0.95), rgba(30, 35, 40, 0.95));
  backdrop-filter: blur(15px);
  border: 1px solid rgba(77, 208, 225, 0.3);
  border-radius: 12px;
  padding: 16px;
  min-width: 280px;
  max-width: 320px;
  opacity: ${props => props.isActive ? 1 : 0};
  visibility: ${props => props.isActive ? 'visible' : 'hidden'};
  transform: translateY(${props => props.isActive ? '0' : '20px'});
  transition: all 0.3s ease-in-out;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const ShowcaseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const ShowcaseTitle = styled.h3`
  color: #4dd0e1;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  text-shadow: 0 0 8px rgba(77, 208, 225, 0.4);
`;

const ControlButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const ControlButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  background: ${props => 
    props.variant === 'primary' 
      ? 'linear-gradient(135deg, #4dd0e1, #26c6da)' 
      : 'rgba(77, 208, 225, 0.1)'
  };
  border: 1px solid ${props => 
    props.variant === 'primary' 
      ? 'transparent' 
      : 'rgba(77, 208, 225, 0.3)'
  };
  color: ${props => props.variant === 'primary' ? '#1a1a1a' : '#4dd0e1'};
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => 
      props.variant === 'primary' 
        ? 'linear-gradient(135deg, #26c6da, #4dd0e1)' 
        : 'rgba(77, 208, 225, 0.2)'
    };
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const RegionInfo = styled.div`
  margin-bottom: 16px;
`;

const RegionName = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const RegionDescription = styled.div`
  color: #b0bec5;
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 8px;
`;

const ProgressContainer = styled.div`
  background: rgba(77, 208, 225, 0.1);
  border-radius: 4px;
  height: 6px;
  overflow: hidden;
  margin-bottom: 12px;
`;

const ProgressBar = styled.div<{ progress: number }>`
  background: linear-gradient(90deg, #4dd0e1, #26c6da);
  height: 100%;
  width: ${props => props.progress}%;
  transition: width 0.1s linear;
  border-radius: 4px;
`;

const RegionCounter = styled.div`
  color: #78909c;
  font-size: 11px;
  text-align: center;
  margin-bottom: 8px;
`;

const HighlightsContainer = styled.div`
  margin-top: 12px;
`;

const HighlightsTitle = styled.div`
  color: #4dd0e1;
  font-size: 11px;
  font-weight: 500;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const HighlightsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const HighlightTag = styled.span`
  background: rgba(77, 208, 225, 0.15);
  color: #4dd0e1;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid rgba(77, 208, 225, 0.3);
`;

export const RegionShowcase: React.FC<RegionShowcaseProps> = ({
  globe,
  isActive,
  onRegionChange,
  onTourComplete,
  onTourInterrupted
}) => {
  const [currentRegionIndex, setCurrentRegionIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  
  const timerRef = useRef<number | null>(null);
  const progressRef = useRef<number | null>(null);

  const currentRegion = REGIONS[currentRegionIndex];

  // Function to smoothly transition to a region
  const transitionToRegion = useCallback((region: RegionConfig) => {
    if (!globe) return;

    // Smooth camera transition
    globe.pointOfView(region.viewpoint, 2000); // 2 second transition
    
    // Pause auto-rotation during transition
    const controls = globe.controls();
    controls.autoRotate = false;
    
    // Resume auto-rotation after transition
    setTimeout(() => {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.1; // Slower rotation during showcase
    }, 2500);

    // Notify parent component
    onRegionChange?.(region);
  }, [globe, onRegionChange]);

  // Start timer for a region
  const startRegionTimer = useCallback((duration: number) => {
    setTimeLeft(duration);
    
    // Clear existing timers
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    
    // Progress update interval
    const progressInterval = 100; // Update every 100ms
    const totalSteps = (duration * 1000) / progressInterval;
    let currentStep = 0;
    
    progressRef.current = setInterval(() => {
      currentStep++;
      const newProgress = (currentStep / totalSteps) * 100;
      setProgress(Math.min(newProgress, 100));
      setTimeLeft(Math.max(0, duration - (currentStep * progressInterval / 1000)));
      
      if (currentStep >= totalSteps) {
        if (progressRef.current) {
          clearInterval(progressRef.current);
          progressRef.current = null;
        }
      }
    }, progressInterval);
    
    // Main timer for region transition
    timerRef.current = setTimeout(() => {
      // Check if still playing before proceeding
      setIsPlaying(currentPlaying => {
        if (currentPlaying) {
          // Move to next region
          setCurrentRegionIndex(prevIndex => {
            const nextIndex = prevIndex + 1;
            
            // Check if we've completed all regions
            if (nextIndex >= REGIONS.length) {
              // Tour completed - stop the tour and return to initial state
              setIsPlaying(false);
              setProgress(0);
              setTimeLeft(0);
              
              // Restore normal auto-rotation
              if (globe) {
                const controls = globe.controls();
                controls.autoRotateSpeed = 0.3;
              }
              
              // Notify parent component that tour is complete
              onTourComplete?.();
              
              // Return to first region but don't continue
              setCurrentRegionIndex(0);
              const initialRegion = REGIONS[0];
              transitionToRegion(initialRegion);
              
              return 0;
            }
            
            // Continue to next region
            setProgress(0);
            const region = REGIONS[nextIndex];
            transitionToRegion(region);
            
            // Start timer for next region
            setTimeout(() => {
              setIsPlaying(stillPlaying => {
                if (stillPlaying) {
                  startRegionTimer(region.duration);
                }
                return stillPlaying;
              });
            }, 100);
            
            return nextIndex;
          });
        }
        return currentPlaying;
      });
    }, duration * 1000);
  }, [transitionToRegion]);

  // Go to next region manually
  const nextRegion = useCallback(() => {
    setCurrentRegionIndex(prevIndex => {
      const nextIndex = Math.min(prevIndex + 1, REGIONS.length - 1);
      setProgress(0);
      const region = REGIONS[nextIndex];
      transitionToRegion(region);
      return nextIndex;
    });
  }, [transitionToRegion]);

  // Go to previous region
  const previousRegion = useCallback(() => {
    setCurrentRegionIndex(prevIndex => {
      const prevIndexNew = Math.max(prevIndex - 1, 0);
      setProgress(0);
      const region = REGIONS[prevIndexNew];
      transitionToRegion(region);
      return prevIndexNew;
    });
  }, [transitionToRegion]);

  // Start the tour
  const startTour = useCallback(() => {
    if (!globe) return;
    
    setIsPlaying(true);
    setCurrentRegionIndex(0);
    setProgress(0);
    
    const region = REGIONS[0];
    transitionToRegion(region);
    
    // Start the timer for this region
    startRegionTimer(region.duration);
  }, [globe, transitionToRegion, startRegionTimer]);

  // Stop the tour
  const stopTour = useCallback(() => {
    setIsPlaying(false);
    setProgress(0);
    setTimeLeft(0);
    setCurrentRegionIndex(0); // Reset to first region
    
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    
    if (progressRef.current) {
      clearInterval(progressRef.current);
      progressRef.current = null;
    }

    // Restore normal auto-rotation
    if (globe) {
      const controls = globe.controls();
      controls.autoRotateSpeed = 0.3;
    }

    // Notify parent that tour was interrupted
    onTourInterrupted?.();
  }, [globe, onTourInterrupted]);

  // Manual region selection
  const goToRegion = useCallback((index: number) => {
    setCurrentRegionIndex(index);
    setProgress(0);
    
    const region = REGIONS[index];
    transitionToRegion(region);
    
    if (isPlaying) {
      startRegionTimer(region.duration);
    }
  }, [transitionToRegion, isPlaying, startRegionTimer]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, []);

  // Handle external interruption (when component becomes inactive while playing)
  useEffect(() => {
    if (!isActive && isPlaying) {
      // Tour was interrupted externally - stop immediately
      stopTour();
    }
  }, [isActive, isPlaying, stopTour]);

  // Handle user interaction interruption - stop tour when user clicks on globe
  useEffect(() => {
    if (!globe || !isPlaying || !isActive) return;

    const handleGlobeClick = () => {
      // Stop the tour when user interacts with the globe
      if (isPlaying) {
        stopTour();
      }
    };

    const handleGlobeMouseDown = () => {
      // Also stop on mouse down (drag start)
      if (isPlaying) {
        stopTour();
      }
    };

    // Add event listeners to the globe's renderer DOM element
    const renderer = globe.renderer();
    if (renderer && renderer.domElement) {
      renderer.domElement.addEventListener('click', handleGlobeClick);
      renderer.domElement.addEventListener('mousedown', handleGlobeMouseDown);
    }

    // Cleanup event listeners
    return () => {
      if (renderer && renderer.domElement) {
        renderer.domElement.removeEventListener('click', handleGlobeClick);
        renderer.domElement.removeEventListener('mousedown', handleGlobeMouseDown);
      }
    };
  }, [globe, isPlaying, isActive, stopTour]);

  // Auto-start tour when activated (optional)
  useEffect(() => {
    if (isActive && globe && !isPlaying) {
      // Auto-start after a short delay
      const autoStartTimer = setTimeout(() => {
        startTour();
      }, 1000);
      
      return () => clearTimeout(autoStartTimer);
    }
  }, [isActive, globe, isPlaying, startTour]);

  if (!isActive) {
    return null;
  }

  return (
    <ShowcaseContainer isActive={isActive}>
      <ShowcaseHeader>
        <ShowcaseTitle>Region Showcase</ShowcaseTitle>
        <ControlButtons>
          {!isPlaying ? (
            <ControlButton variant="primary" onClick={startTour}>
              Start Tour
            </ControlButton>
          ) : (
            <ControlButton variant="secondary" onClick={stopTour}>
              Stop
            </ControlButton>
          )}
        </ControlButtons>
      </ShowcaseHeader>

      <RegionCounter>
        Region {currentRegionIndex + 1} of {REGIONS.length}
        {isPlaying && ` • ${Math.ceil(timeLeft)}s remaining`}
      </RegionCounter>

      <RegionInfo>
        <RegionName>{currentRegion.name}</RegionName>
        <RegionDescription>{currentRegion.description}</RegionDescription>
        
        {isPlaying && (
          <ProgressContainer>
            <ProgressBar progress={progress} />
          </ProgressContainer>
        )}
      </RegionInfo>

      <ControlButtons>
        <ControlButton 
          variant="secondary" 
          onClick={previousRegion}
          disabled={isPlaying || currentRegionIndex === 0}
        >
          ← Previous
        </ControlButton>
        <ControlButton 
          variant="secondary" 
          onClick={nextRegion}
          disabled={isPlaying || currentRegionIndex === REGIONS.length - 1}
        >
          Next →
        </ControlButton>
      </ControlButtons>

      {currentRegion.highlights && currentRegion.highlights.length > 0 && (
        <HighlightsContainer>
          <HighlightsTitle>Key Ports in Region</HighlightsTitle>
          <HighlightsList>
            {currentRegion.highlights.map((port, index) => (
              <HighlightTag key={index}>{port}</HighlightTag>
            ))}
          </HighlightsList>
        </HighlightsContainer>
      )}
    </ShowcaseContainer>
  );
};

export default RegionShowcase;

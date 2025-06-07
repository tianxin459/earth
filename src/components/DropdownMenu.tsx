import React, { useState } from 'react';
import styled from 'styled-components';

interface DemoOption {
  id: string;
  name: string;
  description: string;
}

interface RegionOption {
  id: string;
  name: string;
  viewpoint: {
    lat: number;
    lng: number;
    altitude: number;
  };
}

interface DropdownMenuProps {
    isVisible: boolean;
    onFilterClick: () => void;
    onDemoSelect?: (demoId: string) => void;
    onRegionSelect?: (region: RegionOption) => void;
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

const MenuItem = styled.div<{ hasSubmenu?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 8px 12px;
    color: #4dd0e1;
    font-size: 14px;
    cursor: pointer;
    border-radius: 6px;
    white-space: nowrap;
    transition: all 0.2s ease;
    position: relative;

    &:hover {
        background: rgba(77, 208, 225, 0.1);
    }

    svg {
        width: 14px;
        height: 14px;
    }

    &::after {
        content: ${props => props.hasSubmenu ? '"▶"' : '""'};
        font-size: 10px;
        color: #78909c;
        margin-left: auto;
    }
`;

const SubMenu = styled.div<{ $visible: boolean }>`
    position: absolute;
    left: 100%;
    top: 0;
    margin-left: 4px;
    background: rgba(15, 25, 35, 0.95);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(77, 208, 225, 0.3);
    border-radius: 8px;
    padding: 4px;
    min-width: 200px;
    transform: translateX(${props => props.$visible ? '0' : '-10px'});
    opacity: ${props => props.$visible ? 1 : 0};
    visibility: ${props => props.$visible ? 'visible' : 'hidden'};
    transition: all 0.2s ease;
    z-index: 1200;
`;

const SubMenuItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    color: #b0bec5;
    font-size: 13px;
    cursor: pointer;
    border-radius: 4px;
    white-space: nowrap;
    transition: all 0.2s ease;

    &:hover {
        background: rgba(77, 208, 225, 0.1);
        color: #4dd0e1;
    }
`;

const Separator = styled.div`
    height: 1px;
    background: rgba(77, 208, 225, 0.2);
    margin: 4px 0;
`;

// Demo configurations
const DEMO_OPTIONS: DemoOption[] = [
    {
        id: 'quick-overview',
        name: 'Quick Overview',
        description: 'A 2-minute overview of global shipping routes'
    },
    {
        id: 'detailed-analysis', 
        name: 'Detailed Analysis',
        description: 'In-depth exploration of shipping patterns and costs'
    },
    {
        id: 'regional-deep-dive',
        name: 'Regional Deep Dive', 
        description: 'Focused exploration of specific geographical regions'
    }
];

// Regional configurations based on from.json ports
const REGION_OPTIONS: RegionOption[] = [
    {
        id: 'global',
        name: 'Global Overview',
        viewpoint: { lat: 20, lng: 0, altitude: 2.5 }
    },
    {
        id: 'asia',
        name: 'Asia General',
        viewpoint: { lat: 35, lng: 120, altitude: 1.5 }
    },
    {
        id: 'china',
        name: 'China',
        viewpoint: { lat: 32, lng: 120, altitude: 1.2 }
    },
    {
        id: 'southeast-asia',
        name: 'Southeast Asia',
        viewpoint: { lat: 10, lng: 105, altitude: 1.3 }
    },
    {
        id: 'india',
        name: 'India',
        viewpoint: { lat: 20, lng: 78, altitude: 1.4 }
    },
    {
        id: 'europe',
        name: 'Europe',
        viewpoint: { lat: 50, lng: 10, altitude: 1.6 }
    },
    {
        id: 'usa',
        name: 'USA',
        viewpoint: { lat: 39, lng: -98, altitude: 1.6 }
    },
    {
        id: 'south-america',
        name: 'South America',
        viewpoint: { lat: -15, lng: -60, altitude: 1.8 }
    },
    {
        id: 'middle-east',
        name: 'Middle East',
        viewpoint: { lat: 25, lng: 45, altitude: 1.5 }
    }
];

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
    isVisible,
    onFilterClick,
    onDemoSelect,
    onRegionSelect
}) => {
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

    const handleMouseEnter = (menuId: string) => {
        setActiveSubmenu(menuId);
    };

    const handleMouseLeave = () => {
        setActiveSubmenu(null);
    };

    return (
        <MenuContainer $visible={isVisible}>
            <MenuItem onClick={onFilterClick}>
                <span>Filter Ports</span>
            </MenuItem>
            
            <Separator />
            
            <MenuItem 
                hasSubmenu
                onMouseEnter={() => handleMouseEnter('demo')}
                onMouseLeave={handleMouseLeave}
            >
                <span>Demo</span>
                <SubMenu $visible={activeSubmenu === 'demo'}>
                    {DEMO_OPTIONS.map((demo) => (
                        <SubMenuItem 
                            key={demo.id}
                            onClick={() => {
                                onDemoSelect?.(demo.id);
                                setActiveSubmenu(null);
                            }}
                        >
                            <div>
                                <div style={{ fontWeight: 500 }}>{demo.name}</div>
                                <div style={{ fontSize: '11px', color: '#78909c', marginTop: '2px' }}>
                                    {demo.description}
                                </div>
                            </div>
                        </SubMenuItem>
                    ))}
                </SubMenu>
            </MenuItem>

            <MenuItem 
                hasSubmenu
                onMouseEnter={() => handleMouseEnter('regions')}
                onMouseLeave={handleMouseLeave}
            >
                <span>Regions</span>
                <SubMenu $visible={activeSubmenu === 'regions'}>
                    {REGION_OPTIONS.map((region) => (
                        <SubMenuItem 
                            key={region.id}
                            onClick={() => {
                                onRegionSelect?.(region);
                                setActiveSubmenu(null);
                            }}
                        >
                            {region.name}
                        </SubMenuItem>
                    ))}
                </SubMenu>
            </MenuItem>
        </MenuContainer>
    );
};

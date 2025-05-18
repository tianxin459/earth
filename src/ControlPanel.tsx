import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export interface ControlPanelOptions {
  onFilter?: (start: string, end: string) => void;
}

interface Port {
  name: string;
}

const linesJsonUrl = import.meta.env.BASE_URL + 'lines.json';

// styled-components 定义
const Panel = styled.div<{ expanded: boolean }>`
  position: fixed; left: 0; top: 0; height: 100vh; width: 260px;
  background: linear-gradient(135deg, #1a233a 80%, #2e3b55 100%);
  box-shadow: 2px 0 16px #000a;
  border-right: 2px solid #0ff4;
  color: #0ff;
  font-family: 'Consolas', 'Roboto Mono', monospace;
  z-index: 9999;
  opacity: 0.98;
  user-select: none;
  transition: box-shadow 0.3s, width 0.3s;
  ${({ expanded }) => !expanded && `
    width: 0;
    min-width: 0;
    box-shadow: none;
    border: none;
    background: none;
    pointer-events: none;
  `}
`;

const PanelHeader = styled.div<{ expanded: boolean }>`
  display: ${({ expanded }) => expanded ? 'block' : 'none'};
`;

const PanelBody = styled.div<{ expanded: boolean }>`
  display: ${({ expanded }) => expanded ? 'block' : 'none'};
  padding: 12px 0 0 0;
`;

const ToggleBtn = styled.button`
  background: none; border: none; color: #0ff; font-size: 1.3em;
  cursor: pointer; transition: transform 0.2s;
  &[aria-expanded="true"] {
    transform: rotate(180deg);
  }
`;

const ToggleMini = styled.button<{ expanded: boolean }>`
  display: ${({ expanded }) => expanded ? 'none' : 'block'};
  position: fixed;
  left: 8px;
  top: 8px;
  z-index: 10000;
  background: #1a233a;
  color: #0ff;
  border: 1.5px solid #0ff8;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1.3em;
  box-shadow: 0 2px 8px #000a;
  cursor: pointer;
  opacity: 0.95;
  transition: opacity 0.2s;
  pointer-events: auto;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`;

const Label = styled.label`
  color: #7fffd4; font-size: 0.98em; margin-bottom: 4px;
  text-shadow: 0 0 4px #0ff8;
`;

const Select = styled.select`
  background: #101828; color: #0ff; border: 1px solid #0ff8;
  border-radius: 4px; padding: 6px 8px; font-size: 1em;
  margin-bottom: 0;
  outline: none;
  box-shadow: 0 0 8px #0ff2 inset;
  transition: border 0.2s, box-shadow 0.2s;
  &:focus {
    border: 1.5px solid #fff;
    box-shadow: 0 0 12px #0ff8;
  }
`;

export const ControlPanel: React.FC<ControlPanelOptions> = ({ onFilter }) => {
  const [expanded, setExpanded] = useState(() => localStorage.getItem('panel-expanded') === '1');
  const [ports, setPorts] = useState<string[]>([]);
  const [start, setStart] = useState(() => localStorage.getItem('start-port') || 'all');
  const [end, setEnd] = useState(() => localStorage.getItem('end-port') || 'all');

  // Load port data
  useEffect(() => {
    fetch(linesJsonUrl)
      .then(res => res.json())
      .then(data => {
        setPorts((data.ports || []).map((p: Port) => p.name));
      });
  }, []);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('panel-expanded', expanded ? '1' : '0');
  }, [expanded]);
  useEffect(() => {
    localStorage.setItem('start-port', start);
  }, [start]);
  useEffect(() => {
    localStorage.setItem('end-port', end);
  }, [end]);

  // Trigger filter
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('filter', { detail: { start, end } }));
    if (onFilter) onFilter(start, end);
    // eslint-disable-next-line
  }, [start, end]);

  return (
    <Panel id="control-panel" expanded={expanded}>
      <PanelHeader className="panel-header" expanded={expanded}>
        <span>⚙️ Control Panel</span>
        <ToggleBtn
          id="panel-toggle-btn"
          aria-expanded={expanded}
          onClick={() => setExpanded(false)}
        >⮞</ToggleBtn>
      </PanelHeader>
      <PanelBody className="panel-body" expanded={expanded}>
        <FieldGroup>
          <Label htmlFor="start-port">Start Port</Label>
          <Select
            id="start-port"
            value={start}
            onChange={e => setStart(e.target.value)}
          >
            <option value="all">All</option>
            {ports.map(name => (
              <option key={name} value={name}>{name}</option>
            ))}
          </Select>
        </FieldGroup>
        <FieldGroup>
          <Label htmlFor="end-port">End Port</Label>
          <Select
            id="end-port"
            value={end}
            onChange={e => setEnd(e.target.value)}
          >
            <option value="all">All</option>
            {ports.map(name => (
              <option key={name} value={name}>{name}</option>
            ))}
          </Select>
        </FieldGroup>
      </PanelBody>
      <ToggleMini
        id="panel-toggle-mini"
        title="Expand Control Panel"
        expanded={expanded}
        onClick={() => setExpanded(true)}
      >⮞</ToggleMini>
    </Panel>
  );
};
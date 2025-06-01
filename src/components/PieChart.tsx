import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';

interface PieChartProps {
  value: number;
  title: string;
  width?: number;
  height?: number;
  unit?: string;
}

const ChartContainer = styled.div`
  background: linear-gradient(135deg, rgba(30, 35, 40, 0.8), rgba(20, 25, 30, 0.8));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(77, 208, 225, 0.2);
  border-radius: 12px;
  padding: 12px;
  
  .chart-title {
    color: #4dd0e1;
    font-size: 11px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .percentage-text {
    text-anchor: middle;
    font-size: 16px;
    font-weight: bold;
    fill: #4dd0e1;
  }
  
  .unit-text {
    text-anchor: middle;
    font-size: 10px;
    fill: #ebebeb;
  }
`;

const PieChart: React.FC<PieChartProps> = ({ 
  value, 
  title, 
  width = 120, 
  height = 120,
  unit = '%'
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const radius = Math.min(width, height) / 2 - 10;
    const centerX = width / 2;
    const centerY = height / 2;

    // Clamp value between 0 and 100
    const clampedValue = Math.max(0, Math.min(100, value));
    
    // Create pie data
    const pieData = [
      { label: 'completed', value: clampedValue },
      { label: 'remaining', value: 100 - clampedValue }
    ];

    // Create pie generator
    const pie = d3.pie<typeof pieData[0]>()
      .value(d => d.value)
      .sort(null)
      .startAngle(-Math.PI / 2); // Start at top

    // Create arc generator
    const arc = d3.arc<d3.PieArcDatum<typeof pieData[0]>>()
      .innerRadius(radius * 0.6) // Creates donut chart
      .outerRadius(radius);

    const container = svg.append('g')
      .attr('transform', `translate(${centerX},${centerY})`);

    // Color scale
    const colors = ['#4dd0e1', 'rgba(77, 208, 225, 0.2)'];

    // Create arcs
    container.selectAll('.arc')
      .data(pie(pieData))
      .enter()
      .append('path')
      .attr('class', 'arc')
      .attr('d', arc)
      .attr('fill', (_, i) => colors[i])
      .attr('stroke', 'rgba(77, 208, 225, 0.3)')
      .attr('stroke-width', 1);

    // Add percentage text in center
    container.append('text')
      .attr('class', 'percentage-text')
      .attr('dy', '-0.1em')
      .text(clampedValue.toFixed(1));

    // Add unit text
    container.append('text')
      .attr('class', 'unit-text')
      .attr('dy', '1.2em')
      .text(unit);

  }, [value, width, height, unit]);

  return (
    <ChartContainer>
      <div className="chart-title">{title}</div>
      <svg ref={svgRef} width={width} height={height}></svg>
    </ChartContainer>
  );
};

export default PieChart;

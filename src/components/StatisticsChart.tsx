import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';

interface StatisticsData {
  wmweek: string;
  statistics: {
    [key: string]: {
      description: string;
      value: number;
      unit: string;
    };
  };
}

interface StatisticsChartProps {
  data: StatisticsData[];
  width?: number;
  height?: number;
}

const ChartContainer = styled.div`
  background: linear-gradient(135deg, rgba(30, 35, 40, 0.8), rgba(20, 25, 30, 0.8));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(77, 208, 225, 0.2);
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 12px;
  
  .chart-title {
    color: #4dd0e1;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .tooltip {
    position: absolute;
    background: rgba(0, 0, 0, 0.9);
    color: #4dd0e1;
    padding: 8px;
    border-radius: 4px;
    font-size: 11px;
    pointer-events: none;
    border: 1px solid rgba(77, 208, 225, 0.3);
    z-index: 1000;
  }
  
  .bar {
    transition: opacity 0.3s ease;
  }
  
  .bar:hover {
    opacity: 1 !important;
  }
  
  .axis {
    color: #ebebeb;
    font-size: 10px;
  }
  
  .axis-label {
    fill: #ebebeb;
    font-size: 10px;
  }
`;

const StatisticsChart: React.FC<StatisticsChartProps> = ({ 
  data, 
  width = 280, 
  height = 200 
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!data || data.length === 0 || !svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 20, bottom: 40, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Process data for visualization
    const statsData = data[0]?.statistics;
    if (!statsData) return;

    // Define color mapping for different statistics (consistent with HistoricalCharts)
    const colorMap: { [key: string]: string } = {
      'otif': '#00ff88',
      'ontimedelivery': '#4dd0e1',
      'instock': '#ffa500',
      'ordercreation_qty': '#ff6b6b',
      'sales_qty': '#845ec2',
      'delivery_performance': '#9c88ff',
      'stock_turnover': '#ffb347',
      'order_fulfillment': '#50c878'
    };

    const chartData = Object.entries(statsData)
      .filter(([, value]) => typeof value.value === 'number')
      .map(([key, value]) => ({
        key,
        label: key.replace(/_/g, ' ').toUpperCase(),
        value: value.value,
        unit: value.unit,
        description: value.description,
        color: colorMap[key] || '#4dd0e1' // Default to cyan if no specific color
      }));

    // Create scales
    const xScale = d3.scaleBand()
      .domain(chartData.map(d => d.label))
      .range([0, innerWidth])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(chartData, d => d.value) || 0])
      .range([innerHeight, 0]);

    const container = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Create tooltip
    const tooltip = d3.select(svgRef.current.parentElement)
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0);

    // Create bars
    container.selectAll('.bar')
      .data(chartData)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.label)!)
      .attr('y', d => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', d => innerHeight - yScale(d.value))
      .attr('fill', d => d.color)
      .attr('opacity', 0.8)
      .style('transition', 'opacity 0.3s ease')
      .on('mouseover', function(event, d) {
        d3.select(this).attr('opacity', 1);
        tooltip.transition()
          .duration(200)
          .style('opacity', 0.9);
        tooltip.html(`
          <strong>${d.label}</strong><br/>
          Value: ${d.value}${d.unit}<br/>
          ${d.description}
        `)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 28) + 'px');
      })
      .on('mouseout', function() {
        d3.select(this).attr('opacity', 0.8);
        tooltip.transition()
          .duration(500)
          .style('opacity', 0);
      });

    // Create x-axis
    container.append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale))
      .selectAll('text')
      .attr('class', 'axis-label')
      .style('text-anchor', 'end')
      .attr('dx', '-0.8em')
      .attr('dy', '0.15em')
      .attr('transform', 'rotate(-45)');

    // Create y-axis
    container.append('g')
      .attr('class', 'axis')
      .call(d3.axisLeft(yScale))
      .selectAll('text')
      .attr('class', 'axis-label');

    // Cleanup function
    return () => {
      if (svgRef.current?.parentElement) {
        d3.select(svgRef.current.parentElement).select('.tooltip').remove();
      }
    };
  }, [data, width, height]);

  return (
    <ChartContainer>
      <div className="chart-title">Weekly Statistics</div>
      <svg ref={svgRef} width={width} height={height}></svg>
    </ChartContainer>
  );
};

export default StatisticsChart;

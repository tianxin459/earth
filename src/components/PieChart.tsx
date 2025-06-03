import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';

interface PieChartProps {
  value: number;
  title: string;
  width?: number;
  height?: number;
  unit?: string;
  color?: string;
}

const ChartContainer = styled.div`
  background: linear-gradient(135deg, rgba(30, 35, 40, 0.8), rgba(20, 25, 30, 0.8));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(77, 208, 225, 0.2);
  border-radius: 8px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 76px; /* Reduced height for space saving */
  min-height: 76px;
  
  .chart-title {
    color: #4dd0e1;
    font-size: 8px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    line-height: 1.2;
    margin-bottom: 1px;
  }
  
  .percentage-text {
    text-anchor: middle;
    font-size: 8px; /* 增大字体 */
    font-weight: 700; /* 增加字体粗细 */
    fill: #4dd0e1;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
`;

const PieChart: React.FC<PieChartProps> = ({ 
  value, 
  title, 
  width = 90, 
  height = 90,
  unit = '%',
  color = '#4dd0e1'
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const radius = Math.min(width, height) / 2 - 5; // Reduced margin for smaller charts
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Use the provided color or calculate based on progress for backwards compatibility
    let progressColor: string;
    let backgroundColorRgba: string;
    
    if (color && color !== '#4dd0e1') {
      // Use provided color
      progressColor = color;
      // Convert hex to rgb and create transparent version
      const hex = color.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      backgroundColorRgba = `rgba(${r}, ${g}, ${b}, 0.2)`;
    } else {
      // Original progress-based color calculation
      const progress = animatedValue / 100;
      
      // Create red-orange-green gradient
      let red: number, green: number, blue: number;
      
      if (progress <= 0.5) {
        // 0% to 50%: red to orange
        const localProgress = progress * 2; // 0 to 1
        red = 255;
        green = Math.round(165 * localProgress); // From 0 to 165 (orange)
        blue = 0;
      } else {
        // 50% to 100%: orange to green
        const localProgress = (progress - 0.5) * 2; // 0 to 1
        red = Math.round(255 * (1 - localProgress)); // From 255 to 0
        green = Math.round(165 + (255 - 165) * localProgress); // From 165 to 255
        blue = 0;
      }
      
      progressColor = `rgb(${red}, ${green}, ${blue})`;
      backgroundColorRgba = `rgba(${red}, ${green}, ${blue}, 0.2)`;
    }
    
    // Create pie data
    const pieData = [
      { label: 'completed', value: animatedValue },
      { label: 'remaining', value: 100 - animatedValue }
    ];

    // Create pie generator
    const pie = d3.pie<typeof pieData[0]>()
      .value(d => d.value)
      .sort(null)
      .startAngle(-Math.PI / 2); // Start at top

    // Create arc generator
    const arc = d3.arc<d3.PieArcDatum<typeof pieData[0]>>()
      .innerRadius(radius * 0.5) // Reduced inner radius for better text fit
      .outerRadius(radius);

    const container = svg.append('g')
      .attr('transform', `translate(${centerX},${centerY})`);

    // Dynamic color scale based on progress
    const colors = [progressColor, backgroundColorRgba];

    // Create arcs with animation
    const arcs = container.selectAll('.arc')
      .data(pie(pieData))
      .enter()
      .append('path')
      .attr('class', 'arc')
      .attr('fill', (_, i) => colors[i])
      .attr('stroke', 'rgba(77, 208, 225, 0.3)')
      .attr('stroke-width', 1);

    // Add path morphing animation
    arcs.transition()
      .duration(800)
      .ease(d3.easeBackOut.overshoot(0.7))
      .attrTween('d', function(d) {
        const interpolate = d3.interpolate(
          { startAngle: d.startAngle, endAngle: d.startAngle },
          d
        );
        return function(t) {
          const interpolated = interpolate(t);
          return arc(interpolated) || '';
        };
      });

    // Add percentage and unit text in center (same line) with animation
    container.append('text')
      .attr('class', 'percentage-text')
      .attr('dy', '0.3em')
      .attr('opacity', 0)
      .text(`${animatedValue.toFixed(1)}${unit}`)
      .transition()
      .delay(400)
      .duration(600)
      .ease(d3.easeBackOut)
      .attr('opacity', 1);

  }, [animatedValue, width, height, unit, color]);

  // 动画效果 - 当值变化时触发动画
  useEffect(() => {
    const targetValue = Math.max(0, Math.min(100, value));
    
    // 重置动画值
    setAnimatedValue(0);
    
    // 使用requestAnimationFrame创建平滑动画
    const duration = 1500; // 1.5秒动画时长
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // 使用easeOutCubic缓动函数
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progress);
      
      setAnimatedValue(easedProgress * targetValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value]);

  return (
    <ChartContainer>
      <div className="chart-title">{title}</div>
      <svg ref={svgRef} width={width} height={height}></svg>
    </ChartContainer>
  );
};

export default PieChart;

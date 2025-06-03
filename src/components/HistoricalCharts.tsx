import React, { useEffect, useRef, useState, useCallback } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import { base } from "../config/constants";

interface StatisticsData {
  wmweek: string;
  statistics: {
    [key: string]: {
      description?: string;
      value: number;
      unit?: string;
    };
  };
}

interface HistoricalChartsProps {
  className?: string;
  onWeekSelect?: (wmweek: string) => void;
}

const ChartsContainer = styled.div`
  background: linear-gradient(
    135deg,
    rgba(30, 35, 40, 0.8),
    rgba(20, 25, 30, 0.8)
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(77, 208, 225, 0.2);
  border-radius: 8px;
  padding: 6px;
  overflow-y: auto;
  flex: 1; /* Fill remaining space */
  display: flex;
  flex-direction: column;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(77, 208, 225, 0.1);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(77, 208, 225, 0.4);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(77, 208, 225, 0.6);
  }
`;

const ChartTitleContainer = styled.div`
  text-align: center;
  margin: 0 0 8px 0;
  opacity: 0;
  transform: translateY(-10px);
  animation: titleFadeIn 0.8s ease-out forwards;

  @keyframes titleFadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ChartTitle = styled.h3`
  color: #4dd0e1;
  font-size: 10px;
  font-weight: bold;
  margin: 0 0 2px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ChartTimeRange = styled.div`
  color: #00ff88;
  font-size: 8px;
  font-weight: bold;
  background: linear-gradient(
    90deg,
    rgba(0, 255, 136, 0.2),
    rgba(0, 255, 136, 0.1)
  );
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 12px;
  padding: 2px 8px;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  animation: pulseGlow 2s ease-in-out infinite alternate;

  @keyframes pulseGlow {
    from {
      box-shadow: 0 0 5px rgba(0, 255, 136, 0.5);
    }
    to {
      box-shadow: 0 0 10px rgba(0, 255, 136, 0.8);
    }
  }
`;

const ChartCard = styled.div<{ index?: number }>`
  background: linear-gradient(
    135deg,
    rgba(40, 45, 50, 0.9),
    rgba(30, 35, 40, 0.9)
  );
  border: 1px solid rgba(77, 208, 225, 0.15);
  border-radius: 6px;
  padding: 4px;
  margin-bottom: 4px;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(-20px);
  animation: slideInFade 0.6s ease-out forwards;
  animation-delay: ${(props) => (props.index || 0) * 0.1}s;

  @keyframes slideInFade {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(77, 208, 225, 0.3);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ChartCardTitle = styled.h4`
  color: #4dd0e1;
  font-size: 9px;
  font-weight: bold;
  margin: 0 0 4px 0;
  text-transform: uppercase;
`;

const HistoricalCharts: React.FC<HistoricalChartsProps> = ({
  className,
  onWeekSelect,
}) => {
  const [statisticsData, setStatisticsData] = useState<StatisticsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState<string>("");
  const chartRefs = useRef<{ [key: string]: SVGSVGElement | null }>({});

  // Calculate time range from data
  const calculateTimeRange = useCallback((data: StatisticsData[]) => {
    if (data.length === 0) return "";

    const weeks = data.map((d) => d.wmweek).sort();
    const firstWeek = weeks[0];
    const lastWeek = weeks[weeks.length - 1];

    if (firstWeek === lastWeek) {
      return firstWeek;
    }

    return `${firstWeek}-${lastWeek}`;
  }, []);

  // Handle hover synchronization across charts
  const handleWeekHover = useCallback(
    (week: string | null) => {
      // Update all charts to highlight the hovered week
      Object.keys(chartRefs.current).forEach((metricKey) => {
        const svg = d3.select(chartRefs.current[metricKey]);

        // Reset all highlights
        svg.selectAll(".week-highlight").remove();
        svg.selectAll(".dot").attr("r", 3).attr("opacity", 1);
        svg.selectAll(".week-line").remove();

        if (week) {
          // Add vertical line for hovered week
          const g = svg.select("g");
          const data = statisticsData
            .filter(
              (d) =>
                d.statistics &&
                d.statistics[metricKey] &&
                typeof d.statistics[metricKey].value === "number"
            )
            .map((d) => ({
              week: d.wmweek,
              value: d.statistics[metricKey].value,
            }))
            .sort((a, b) => a.week.localeCompare(b.week));

          const margin = { top: 5, right: 8, bottom: 20, left: 40 };
          const width = 260 - margin.left - margin.right;
          const height = 70 - margin.top - margin.bottom;

          const xScale = d3
            .scalePoint()
            .domain(data.map((d) => d.week))
            .range([0, width])
            .padding(0.1);

          const x = xScale(week);
          if (x !== undefined) {
            // Add vertical highlight line
            g.append("line")
              .attr("class", "week-line")
              .attr("x1", x)
              .attr("x2", x)
              .attr("y1", 0)
              .attr("y2", height)
              .attr("stroke", "#4dd0e1")
              .attr("stroke-width", 2)
              .attr("opacity", 0.7)
              .attr("stroke-dasharray", "3,3");

            // Highlight the specific dot
            svg
              .selectAll(".dot")
              .attr("r", (d: any) => (d.week === week ? 5 : 3))
              .attr("opacity", (d: any) => (d.week === week ? 1 : 0.6));
          }
        }
      });
    },
    [statisticsData]
  );

  const handleWeekClick = useCallback(
    (week: string) => {
      if (onWeekSelect) {
        onWeekSelect(week);
      }
    },
    [onWeekSelect]
  );

  useEffect(() => {
    // Load statistics data
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${base}data/statistics.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: StatisticsData[] = await response.json();
        setStatisticsData(data);
        setTimeRange(calculateTimeRange(data));
        setError(null);
      } catch (err) {
        console.error("Error loading statistics data:", err);
        setError("Failed to load statistics data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [calculateTimeRange]);

  useEffect(() => {
    if (statisticsData.length === 0) return;

    // Define metrics to chart
    const metricsToChart = [
      { key: "otif", label: "OTIF Performance", color: "#00ff88" },
      { key: "ontimedelivery", label: "On-Time Delivery", color: "#4dd0e1" },
      { key: "instock", label: "In Stock %", color: "#ffa500" },
      {
        key: "ordercreation_qty",
        label: "Order Creation Qty",
        color: "#ff6b6b",
      },
      { key: "sales_qty", label: "Sales Quantity", color: "#845ec2" },
    ];

    metricsToChart.forEach((metric) => {
      const svgElement = chartRefs.current[metric.key];
      if (!svgElement) return;

      // Clear previous chart
      d3.select(svgElement).selectAll("*").remove();

      const margin = { top: 5, right: 8, bottom: 20, left: 40 };
      const width = 260 - margin.left - margin.right;
      const height = 70 - margin.top - margin.bottom;

      const svg = d3
        .select(svgElement)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // Prepare data
      const data = statisticsData
        .filter(
          (d) =>
            d.statistics &&
            d.statistics[metric.key] &&
            typeof d.statistics[metric.key].value === "number"
        )
        .map((d) => ({
          week: d.wmweek,
          value: d.statistics[metric.key].value,
          unit: d.statistics[metric.key].unit || "",
        }))
        .sort((a, b) => a.week.localeCompare(b.week));

      if (data.length === 0) return;

      // Create scales
      const xScale = d3
        .scalePoint()
        .domain(data.map((d) => d.week))
        .range([0, width])
        .padding(0.1);

      const yScale = d3
        .scaleLinear()
        .domain(d3.extent(data, (d) => d.value) as [number, number])
        .nice()
        .range([height, 0]);

      // Create line generator
      const line = d3
        .line<(typeof data)[0]>()
        .x((d) => xScale(d.week)!)
        .y((d) => yScale(d.value))
        .curve(d3.curveMonotoneX);

      // Add gradient
      const gradient = svg
        .append("defs")
        .append("linearGradient")
        .attr("id", `gradient-${metric.key}`)
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", 0)
        .attr("y1", height)
        .attr("x2", 0)
        .attr("y2", 0);

      gradient
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", metric.color)
        .attr("stop-opacity", 0.1);

      gradient
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", metric.color)
        .attr("stop-opacity", 0.8);

      // Add area under the line with animation
      const area = d3
        .area<(typeof data)[0]>()
        .x((d) => xScale(d.week)!)
        .y0(height)
        .y1((d) => yScale(d.value))
        .curve(d3.curveMonotoneX);

      const areaPath = g
        .append("path")
        .datum(data)
        .attr("fill", `url(#gradient-${metric.key})`)
        .attr("d", area)
        .style("opacity", 0);

      // Animate area appearance
      areaPath
        .transition()
        .duration(1000)
        .delay(200)
        .ease(d3.easeCircleOut)
        .style("opacity", 1);

      // Add the line with draw animation
      const linePath = g
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", metric.color)
        .attr("stroke-width", 2)
        .attr("d", line);

      // Get the total length of the line for animation
      const totalLength = (linePath.node() as SVGPathElement).getTotalLength();

      // Set up the starting position for line animation
      linePath
        .attr("stroke-dasharray", `${totalLength} ${totalLength}`)
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(1500)
        .ease(d3.easeQuadInOut)
        .attr("stroke-dashoffset", 0);

      // Add dots with hover functionality and animation
      const dots = g
        .selectAll(".dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "dot")
        .attr("cx", (d) => xScale(d.week)!)
        .attr("cy", (d) => yScale(d.value))
        .attr("r", 0) // Start with radius 0 for animation
        .attr("fill", metric.color)
        .attr("stroke", "#ffffff")
        .attr("stroke-width", 1)
        .style("cursor", "pointer")
        .style("opacity", 0);

      // Animate dots appearance
      dots
        .transition()
        .duration(600)
        .delay((_, i) => 800 + i * 100) // Stagger the animation
        .ease(d3.easeElasticOut.amplitude(1).period(0.3))
        .attr("r", 3)
        .style("opacity", 1);

      // Add invisible overlay for better hover detection
      const overlay = g.append("g").attr("class", "overlay");

      overlay
        .selectAll(".hover-area")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "hover-area")
        .attr("x", (d) => xScale(d.week)! - width / data.length / 2)
        .attr("y", 0)
        .attr("width", width / data.length)
        .attr("height", height)
        .attr("fill", "transparent")
        .style("cursor", "pointer")
        .on("mouseenter", function (event, d) {
          handleWeekHover(d.week);

          // Show tooltip
          d3.select("body")
            .select(`.tooltip-${metric.key}`)
            .style("opacity", 1)
            .html(`Week: ${d.week}<br/>Value: ${d.value}${d.unit || ""}`)
            .style("left", event.pageX + 10 + "px")
            .style("top", event.pageY - 10 + "px");
        })
        .on("mouseleave", function () {
          handleWeekHover(null);

          // Hide tooltip
          d3.select("body")
            .select(`.tooltip-${metric.key}`)
            .style("opacity", 0);
        })
        .on("click", function (_, d) {
          handleWeekClick(d.week);
        });

      // Add x-axis with animation
      const xAxis = g
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .style("opacity", 0)
        .call(d3.axisBottom(xScale));

      xAxis
        .selectAll("text")
        .style("font-size", "7px")
        .style("fill", "#4dd0e1")
        .attr("transform", "rotate(-45)")
        .style("text-anchor", "end");

      xAxis.selectAll("path, line").style("stroke", "rgba(77, 208, 225, 0.3)");

      // Animate x-axis appearance
      xAxis
        .transition()
        .duration(800)
        .delay(400)
        .ease(d3.easeQuadOut)
        .style("opacity", 1);

      // Add y-axis with better formatting for large numbers
      const formatYAxis = (d: any) => {
        const value = +d;
        if (value >= 1000000) return (value / 1000000).toFixed(1) + "M";
        if (value >= 1000) return (value / 1000).toFixed(1) + "K";
        return value.toString();
      };

      const yAxis = g
        .append("g")
        .style("opacity", 0)
        .call(d3.axisLeft(yScale).ticks(3).tickFormat(formatYAxis));

      yAxis
        .selectAll("text")
        .style("font-size", "7px")
        .style("fill", "#4dd0e1");

      yAxis.selectAll("path, line").style("stroke", "rgba(77, 208, 225, 0.3)");

      // Animate y-axis appearance
      yAxis
        .transition()
        .duration(800)
        .delay(600)
        .ease(d3.easeQuadOut)
        .style("opacity", 1);

      // Create tooltip for this metric
      d3.select("body").selectAll(`.tooltip-${metric.key}`).remove();
      d3.select("body")
        .append("div")
        .attr("class", `tooltip-${metric.key}`)
        .style("position", "absolute")
        .style("background", "rgba(0, 0, 0, 0.8)")
        .style("color", "#4dd0e1")
        .style("padding", "4px 8px")
        .style("border-radius", "4px")
        .style("font-size", "9px")
        .style("pointer-events", "none")
        .style("opacity", 0)
        .style("z-index", 1000);
    });

    // Cleanup function
    return () => {
      d3.selectAll('[class^="tooltip-"]').remove();
    };
  }, [statisticsData, handleWeekHover, handleWeekClick]);

  const metricsToChart = [
    { key: "otif", label: "OTIF Performance", color: "#00ff88" },
    { key: "ontimedelivery", label: "On-Time Delivery", color: "#4dd0e1" },
    { key: "instock", label: "In Stock %", color: "#ffa500" },
    { key: "ordercreation_qty", label: "Order Creation Qty", color: "#ff6b6b" },
    { key: "sales_qty", label: "Sales Quantity", color: "#845ec2" },
  ];

  if (loading) {
    return (
      <ChartsContainer className={className}>
        <ChartTitleContainer>
          <ChartTitle>Historical Performance Trends</ChartTitle>
          {timeRange && <ChartTimeRange>{timeRange}</ChartTimeRange>}
        </ChartTitleContainer>
        <div style={{ textAlign: "center", padding: "2rem", color: "#64748b" }}>
          Loading historical data...
        </div>
      </ChartsContainer>
    );
  }

  if (error) {
    return (
      <ChartsContainer className={className}>
        <ChartTitleContainer>
          <ChartTitle>Historical Performance Trends</ChartTitle>
          {timeRange && <ChartTimeRange>{timeRange}</ChartTimeRange>}
        </ChartTitleContainer>
        <div style={{ textAlign: "center", padding: "2rem", color: "#ef4444" }}>
          Error loading data: {error}
        </div>
      </ChartsContainer>
    );
  }

  return (
    <ChartsContainer className={className}>
      <ChartTitleContainer>
        <ChartTitle>Historical Performance Trends</ChartTitle>
        {timeRange && <ChartTimeRange>{timeRange}</ChartTimeRange>}
      </ChartTitleContainer>
      {metricsToChart.map((metric, index) => (
        <ChartCard key={metric.key} index={index}>
          <ChartCardTitle>{metric.label}</ChartCardTitle>
          <svg
            ref={(el) => {
              chartRefs.current[metric.key] = el;
            }}
            style={{ width: "100%", height: "auto" }}
          />
        </ChartCard>
      ))}
    </ChartsContainer>
  );
};

export default HistoricalCharts;

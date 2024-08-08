// LineChart.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineGraph = () => {
  const chartRef = useRef();

  const data = [
    { day: 'Mon', progressive: 10000, timeOnSite: 25000, visitor: 30000 },
    { day: 'Tue', progressive: 15000, timeOnSite: 25000, visitor: 35000 },
    { day: 'Wed', progressive: 20000, timeOnSite: 30000, visitor: 40000 },
    { day: 'Thu', progressive: 25000, timeOnSite: 35000, visitor: 5000 },
    { day: 'Fri', progressive: 30000, timeOnSite: 1000, visitor: 50000 },
    { day: 'Sat', progressive: 25000, timeOnSite: 30000, visitor: 40000 },
    { day: 'Sun', progressive: 1000, timeOnSite: 25000, visitor: 5000 },
  ];

  useEffect(() => {
    if (!data) return;

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 700 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    // Remove any existing SVG elements
    d3.select(chartRef.current).selectAll('svg').remove();

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand()
      .domain(data.map(d => d.day))
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => Math.max(d.progressive, d.timeOnSite, d.visitor))])
      .range([height, 0]);

    const line = d3.line()
      .curve(d3.curveBasis)
      .x(d => xScale(d.day) + xScale.bandwidth() / 2)
      .y(d => yScale(d.progressive));

    const line2 = d3.line()
      .curve(d3.curveBasis)
      .x(d => xScale(d.day) + xScale.bandwidth() / 2)
      .y(d => yScale(d.timeOnSite));

    const line3 = d3.line()
      .curve(d3.curveBasis)
      .x(d => xScale(d.day) + xScale.bandwidth() / 2)
      .y(d => yScale(d.visitor));

    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .call(d3.axisLeft(yScale).ticks(5).tickFormat(d => `${d / 1000}k`));

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'green')
      .attr('stroke-width', 2)
      .attr('d', line);

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'orange')
      .attr('stroke-width', 2)
      .attr('d', line2);

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'pink')
      .attr('stroke-width', 2)
      .attr('d', line3);

  }, [data]);

  return <div ref={chartRef}></div>;
};

export default LineGraph;

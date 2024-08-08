// BarGraph.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarGraph = () => {
  const chartRef = useRef();

  const data = [
    { day: 'Mon', high: 30000, low: 10000 },
    { day: 'Tue', high: 50000, low: 20000 },
    { day: 'Wed', high: 40000, low: 15000 },
    { day: 'Thu', high: 35000, low: 12000 },
    { day: 'Fri', high: 45000, low: 18000 },
    { day: 'Sat', high: 25000, low: 8000 },
    { day: 'Sun', high: 0, low: 0 },
  ];

  useEffect(() => {
    if (!data || data.length === 0) return;

    const margin = { top: 20, right: 20, bottom: 50, left: 50 };
    const width = 450 - margin.left - margin.right;
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
      .domain([0, 40000])
      .range([height, 0]);

    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .call(d3.axisLeft(yScale).ticks(5).tickFormat(d3.format('~s')));

    svg.selectAll('.high-bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'high-bar')
      .attr('x', d => xScale(d.day))
      .attr('y', d => yScale(d.high))
      .attr('width', xScale.bandwidth() / 2 - 10)
      .attr('height', d => height - yScale(d.high))
      .attr('fill', 'orange');

    svg.selectAll('.low-bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'low-bar')
      .attr('x', d => xScale(d.day) + xScale.bandwidth() / 2 - 5)
      .attr('y', d => yScale(d.low))
      .attr('width', xScale.bandwidth() / 2 - 10)
      .attr('height', d => height - yScale(d.low))
      .attr('fill', 'green');

  }, [data]);

  return <div ref={chartRef}></div>;
};

export default BarGraph;

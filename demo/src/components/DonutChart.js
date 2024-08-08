import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DonutChart = () => {
  const chartRef = useRef();

  const data = [
    { label: 'Category A', value: 40 },
    { label: 'Category B', value: 60 },
  ];

  useEffect(() => {
    if (!data || data.length === 0) return;

    const width = 200;
    const height = 200;
    const radius = Math.min(width, height) / 2;

    // Remove any existing SVG elements
    d3.select(chartRef.current).selectAll('svg').remove();

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal(['#008000', '#FFA500']); // Green and Orange colors

    const pie = d3.pie()
      .value(d => d.value);

    const arc = d3.arc()
      .innerRadius(radius - 45)
      .outerRadius(radius);

    const arcs = svg.selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs.append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => color(i));

    // arcs.append('text')
    //   .attr('transform', d => `translate(${arc.centroid(d)})`)
    //   .attr('text-anchor', 'middle')
    //   .text(d => `${d.data.label} (${d.data.value}%)`);

    // Additional circles outside the main circle

    const blackCircle1 = svg.append('circle')
      .attr('cx', radius - 165)
      .attr('cy', radius - 35)
      .attr('r', 30)
      .attr('fill', '#fff')
      .style('filter', 'drop-shadow(0px 1px 1.674px rgba(0, 5, 2, 0.4))');

    const blackCircle2 = svg.append('circle')
      .attr('cx', -radius + 165)
      .attr('cy', -radius + 35)
      .attr('r', 30)
      .attr('fill', '#fff')
      .style('filter', 'drop-shadow(0px 1px 1.674px rgba(0, 5, 2, 0.4))');

    // Text outside the additional circles
    svg.append('text')
      .attr('x', -radius + 165)
      .attr('y', -radius + 65)
      .attr('dy', -25) // Adjust vertical position
      .attr('text-anchor', 'middle')
      .attr('fill', 'black')
      .text(`${data[1].value}%`);

    svg.append('text')
      .attr('x', radius - 165)
      .attr('y', radius + 25)
      .attr('dy', -55) // Adjust vertical position
      .attr('text-anchor', 'middle')
      .attr('fill', 'black')
      .text(`${data[0].value}%`);

  }, [data]);

  return (
    <>
      <div ref={chartRef}></div>
    </>
  );
};

export default DonutChart;

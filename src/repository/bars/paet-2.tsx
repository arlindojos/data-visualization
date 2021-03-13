import React, { useEffect, useRef, useState } from 'react';
import { select, Selection, scaleLinear, scaleBand, max, axisLeft, axisBottom } from 'd3';

const data = [
  { name: 'Boss Boa', money: 3000000000000, currency: 'USD' },
  { name: 'count2', money: 3000000000000, currency: 'USD' },
  { name: 'count3', money: 3000000000000, currency: 'USD' },
  { name: 'Boss Boa Wife', money: 50000000000, currency: 'USD' },
  { name: 'Son', money: 1000000000000, currency: 'USD' },
]

const dimensions = {
  width: 800,
  height: 500,
  charWidth: 700,
  charHeight: 400,
  marginLeft: 100
}


const App: React.FC = () => {
  const [ selection, setSelection ] = useState<null | Selection<SVGSVGElement | null, unknown, null, undefined> >(null);

  const svgRef = useRef<SVGSVGElement | null>(null);

  const maxValue = max(data, d => d.money);
  const y = scaleLinear()
    .domain([0, maxValue!])
    .range([0, dimensions.charHeight])
  
  const x = scaleBand()
    .domain(data.map(d => d.name))
    .range([0, dimensions.charHeight])
    .padding(0.1)

  const yAxis = axisLeft(y)
    .tickFormat(money => `$${money}`)
    // .ticks(3);
    
  const xAxis = axisBottom(x);

  useEffect(() => {
    if(!selection) {
      setSelection(select(svgRef.current));
    } else {
      const xAxisGroup = selection
        .append('g')
        .attr('transform', `translate(${dimensions.marginLeft}, ${dimensions.charHeight})`)
        .call(xAxis)

      const yAxisGroup = selection
        .append('g')
        .attr('transform', `translate(${dimensions.marginLeft}, 0)`)
        .call(yAxis)


      selection
        .append('g')
        .attr('transform', `translate(${dimensions.marginLeft}, 0)`)
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('width', x.bandwidth)
        .attr('height', data => y(data.money))
        .attr('x', data => x(data.name)!)
        .attr('fill', '#fdb324')
    }
  }, [selection])

  return (
    <div>
      <svg ref={svgRef} width={dimensions.width} height={dimensions.height} />
    </div>
  );
}

export default App;
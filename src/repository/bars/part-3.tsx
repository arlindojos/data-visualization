import React, { useEffect, useRef, useState } from 'react';
import { select, Selection, scaleLinear, scaleBand, max, axisLeft, axisBottom } from 'd3';
import randomString from 'randomstring';

const inicialData = [
  { name: 'Boss Boa', money: 3000000000000, currency: 'USD' },
  { name: 'count2', money: 3000000000000, currency: 'USD' },
  { name: 'count3', money: 3000000000000, currency: 'USD' },
  { name: 'Boss Boa Wife', money: 50000000000, currency: 'USD' },
  { name: 'Son', money: 1000000000000, currency: 'USD' }
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
  const [ data, setData ] = useState(inicialData);

  const svgRef = useRef<SVGSVGElement | null>(null);

  const maxValue = max(data, d => d.money);

  let y = scaleLinear()
    .domain([0, maxValue!])
    .range([dimensions.charHeight, 0])
  let x = scaleBand()
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
        .attr('height', data => dimensions.height - y(data.money))
        .attr('x', data => x(data.name)!)
        .attr('y', data => y(data.money))
        .attr('fill', '#fdb324')
    }
  }, [selection])


  useEffect(() => {
    if(selection) {
      y = scaleLinear()
        .domain([0, maxValue!])
        .range([dimensions.charHeight, 0])

      x = scaleBand()
        .domain(data.map(d => d.name))
        .range([0, dimensions.charHeight])
        .padding(0.1)

      const rects = selection
        .selectAll('rect')
        .data(data)
      
      rects.exit().remove()

      rects
        .attr('width', x.bandwidth)
        .attr('height', data => dimensions.height - y(data.money))
        .attr('x', data => x(data.name)!)
        .attr('y', data => y(data.money))
        .attr('fill', '#fdb324')

      rects
        .enter()
        .append('rect')
        .attr('width', x.bandwidth)
        .attr('height', data => dimensions.height - y(data.money))
        .attr('x', data => x(data.name)!)
        .attr('y', data => y(data.money))
        .attr('fill', '#fdb324')
    }
  }, [data])

  const addMoney = () => {
    const moneyToBeAdded = {
      name: randomString.generate(10),
      money: Math.floor(Math.random() * (2000009000000) + 1000000),
      currency: 'USD'
    };

    setData([...data, moneyToBeAdded])
  }

  const useMoney = () => {
    if(data.length === 0) {
      return
    }

    const slicedMoney = data.slice(0, data.length - 1)
    setData(slicedMoney);
  }

  return (
    <div>
      <svg ref={svgRef} width={dimensions.width} height={dimensions.height} />
      <button onClick={addMoney}>Add Money</button>
      <button onClick={useMoney}>Use Money</button>
    </div>
  );
}

export default App;
import React, { useEffect, useRef, useState } from 'react';
import { select, Selection, scaleLinear, scaleBand, max } from 'd3';

const data = [
  { name: 'Boss Boa', money: 3000000000000, currency: 'USD' },
  { name: 'Boss Boa count2', money: 3000000000000, currency: 'USD' },
  { name: 'Boss Boa count3', money: 3000000000000, currency: 'USD' },
  { name: 'Wife of Boss Boa', money: 50000000000, currency: 'USD' },
  { name: 'Son', money: 1000000000000, currency: 'USD' },
]


const App: React.FC = () => {
  const [ selection, setSelection ] = useState<null | Selection<SVGSVGElement | null, unknown, null, undefined> >(null);

  const svgRef = useRef<SVGSVGElement | null>(null);

  const maxValue = max(data, d => d.money);
  const y = scaleLinear()
    .domain([0, maxValue!])
    .range([0, 500])
  
  const x = scaleBand()
    .domain(data.map(d => d.name))
    .range([0, 800])
    .padding(0.1)

  useEffect(() => {
    if(!selection) {
      setSelection(select(svgRef.current));
    } else {
      selection
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
      <svg ref={svgRef} width={800} height={500} />
    </div>
  );
}

export default App;




// useEffect(() => {
//     // select(svgRef.current)
//     // .append('rect')
//     // .attr('width', 100)
//     // .attr('height', 100)
//     // .attr('fill', 'blue')

//     selectAll('rect')
//     .attr('width', 100)
//     .attr('height', 100)
//     .attr('fill', 'blue')
//     .attr('x', (_, index) => index * 130)

//   })

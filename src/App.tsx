import React, { useEffect, useState } from 'react';
import { csvParse, DSVRowArray, max, scaleBand, scaleLinear } from 'd3';
import fetchText from './utils/fetchText';

const csvUrl = 'https://gist.githubusercontent.com/bboa3/4a40e9a60e0f2e271804f5978e8c8ca2/raw/9654c0874866e18049ed778189ad24c7eea239a2/mozambique-population-2021.csv'

const width = 960;
const height = 500;
const margin = {
  top: 20, 
  right: 20,
  bottom: 30,
  left: 20
}

const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;;

function App() {
  const [ data, setData ] = useState<DSVRowArray<string> | null>(null);

  useEffect(() => {
    fetchText(csvUrl).then(text => {
      setData(csvParse(text));
    })
  }, [])

  if(!data) return <pre>Loading...</pre>

  const yScale = scaleBand()
    .domain(data.map(d => d.Specification!))
    .range([0, innerHeight])

  const xScale = scaleLinear()
    .domain([0, max(data, d => Number(d.value))!])
    .range([0, innerWidth])
  
    
  return (
    <svg width={width} height={height} >
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {
        data.map(d => {
          return (
            <rect 
              x={0} 
              y={yScale(d.Specification!)}
              width={xScale(Number(d.value))} 
              height={yScale.bandwidth()} 
            />
          )
        })
      }
      </g>
    </svg>
  );
}

export default App;

import { scaleLinear, scaleTime, extent, NumberValue, timeFormat } from 'd3';
import { D, useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';
import './styles.css';

const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 220 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 40;

const BarCharts: React.FC = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yValue = (d: any) => d.temperature;
  const xAxisLabel = 'Temperature';

  const xValue = (d: D) => d.timestamp;
  const yAxisLabel = 'Time';

  const xAxisTickFormat = timeFormat('%a');

  const yScale = scaleLinear()
    .domain(extent(data, yValue) as Iterable<NumberValue>)
    .range([innerHeight, 0])
    .nice()

  const xScale = scaleTime()
    .domain(extent(data, xValue) as Iterable<NumberValue>)
    .range([0, innerWidth])
    .nice();

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickOffset={5}
        />
        <text
          className="axis-label"
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset}, ${innerHeight / 2}) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <AxisLeft 
          yScale={yScale} 
          innerWidth={innerWidth} 
          tickOffset={5}
        />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
          circleRadios={4}
        />
      </g>
    </svg>
  );
};

export default BarCharts
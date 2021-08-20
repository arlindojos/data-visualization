import { ScaleLinear } from "d3";

interface Props {
  xScale: ScaleLinear<number, number, never>
  innerHeight: number
  tickFormat: (tickValue: number) => string
  tickOffset?: number 
}

export const AxisBottom: React.FC<Props> = ({ xScale, innerHeight, tickFormat, tickOffset=3 }) =>
  <>
    {
      xScale.ticks().map(tickValue => (
        <g className="tick" key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
          <line y2={innerHeight} />
          <text style={{ textAnchor: 'middle' }} dy=".71em" y={innerHeight + tickOffset}>
            {tickFormat(tickValue)}
          </text>
        </g>
      ))
    }
  </>
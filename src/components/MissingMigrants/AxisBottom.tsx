import { ScaleTime } from "d3";

interface Props {
  xScale: ScaleTime<number, number, never>
  innerHeight: number
  tickFormat: (tickValue: Date) => string
  tickOffset?: number 
}

export const AxisBottom: React.FC<Props> = ({ xScale, innerHeight, tickFormat, tickOffset=3 }) =>
  <>
    {
      xScale.ticks().map((tickValue, index) => (
        <g
          className="tick"
          key={index}
          transform={`translate(${xScale(tickValue)},0)`}
        >
          <line y2={innerHeight} />
          <text style={{ textAnchor: 'middle' }} dy=".71em" y={innerHeight + tickOffset}>
            {tickFormat(tickValue)}
          </text>
        </g>
      ))
    }
  </>
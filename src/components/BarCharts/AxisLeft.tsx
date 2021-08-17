import { ScaleBand } from "d3";

interface Props {
  yScale: ScaleBand<string>
}

export const AxisLeft: React.FC<Props> = ({ yScale }) => (
  <>
    {
      yScale.domain().map((tickValue: string) => (
        <g className="tick">
          <text
            key={tickValue}
            style={{ textAnchor: 'end' }}
            x={-3}
            dy=".32em"
            y={yScale(tickValue)! + yScale.bandwidth() / 2}
          >
            {tickValue}
          </text>
        </g>
      ))
    }
  </>
)

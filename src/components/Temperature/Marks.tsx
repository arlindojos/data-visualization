import { DSVParsedArray, ScaleTime, line, curveNatural } from "d3";
import { D } from "./useData";

interface Props {
  data: DSVParsedArray<D>
  xScale: ScaleTime<number, number, never>
  yScale: (d: any) => any
  xValue: (d: any) => any
  yValue: (d: any) => any
  tooltipFormat:  (tickValue: Date) => string
  circleRadios: number
}

export const Marks: React.FC<Props> = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
  circleRadios
}) => (
  <g className="marks">
    <path 
      d={
        line()
          .curve(curveNatural)
          .x(d => xScale(xValue(d)))
          .y(d => yScale(yValue(d)))(data as unknown as [number, number][])!
        } 
    />
    {
      data.map(d => (
        <circle
          key={yValue(d)}
          cx={xScale(xValue(d))}
          cy={yScale(yValue(d))}
          r={circleRadios}
        >
          <title>{yValue(d).toFixed(2)}</title>
        </circle>
      ))
    }
  </g>
)

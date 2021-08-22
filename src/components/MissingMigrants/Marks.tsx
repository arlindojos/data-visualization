import { DSVParsedArray, ScaleTime } from "d3";
import { D } from "./useData";

interface Props {
  data: DSVParsedArray<D>
  xScale: ScaleTime<number, number, never>
  yScale: (d: any) => any
  xValue: (d: any) => any
  yValue: (d: any) => any
  tooltipFormat:  (tickValue: Date) => string
  circleRadius: number
}

export const Marks: React.FC<Props> = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
  circleRadius
}) => (
  <>
    {
      data.map(d => (
        <circle
          className="mark"
          cx={xScale(xValue(d))}
          cy={yScale(yValue(d))}
          r={circleRadius}
        >
          <title>{yValue(d)}</title>
        </circle>
      ))
    }
  </>
)

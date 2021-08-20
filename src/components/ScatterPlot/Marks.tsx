import { DSVParsedArray, ScaleLinear } from "d3";
import { D } from "./useData";

interface Props {
  data: DSVParsedArray<D>
  xScale: ScaleLinear<number, number, never>
  yScale: (d: any) => any
  xValue: (d: any) => any
  yValue: (d: any) => any
  tooltipFormat:  (tickValue: number) => string
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
  <>
    {
      data.map(d => (
        <circle
          className="mark"
          key={yValue(d)}
          cx={xScale(xValue(d))}
          cy={yScale(yValue(d))}
          r={circleRadios}
        >
          <title>{tooltipFormat(xValue(d))}</title>
        </circle>
      ))
    }
  </>
)

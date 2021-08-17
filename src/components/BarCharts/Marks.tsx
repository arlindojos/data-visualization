import { DSVParsedArray, ScaleBand, ScaleLinear } from "d3";
import { D } from "./useData";

interface Props {
  data: DSVParsedArray<D>
  xScale: ScaleLinear<number, number, never>
  yScale: ScaleBand<string>
  xValue: (d: D) => number
  yValue: (d: D) => string
  tooltipFormat:  (tickValue: number) => string
}

export const Marks: React.FC<Props> = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat
}) => (
  <>
    {
      data.map(d => (
        <rect
          className="mark"
          key={yValue(d)}
          x={0}
          y={yScale(yValue(d))}
          width={xScale(xValue(d))}
          height={yScale.bandwidth()}
        >
          <title>{tooltipFormat(xValue(d))}</title>
        </rect>
      ))
    }
  </>
)

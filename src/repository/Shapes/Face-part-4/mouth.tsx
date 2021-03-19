import React from 'react';
import { arc } from 'd3-shape';

interface Props {
  mouthRadius: number
  mouthWidth: number
}

const Mouth: React.FC<Props> = ({mouthRadius, mouthWidth}) => {
  const mouthArc: Function = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3/2);


  return <path d={mouthArc()} />
}

export default Mouth
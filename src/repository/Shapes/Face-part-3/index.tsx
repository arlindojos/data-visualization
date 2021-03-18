import React from 'react';
import { arc } from 'd3-shape';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth= 10;
const eyeOffSetX = 90;
const eyeOffSetY = 130;
const eyeRadius = 43;
const mouthWidth = 20;
const mouthRadius = 130;

const mouthArc: Function = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * 3/2);

const BackgroundCircle = () => (
  <circle 
    fill='yellow' 
    r={centerY - strokeWidth / 2} 
    stroke='black' 
    stroke-width={strokeWidth} 
  />
)
  
const LeftEye = () => (
  <circle 
    cx={-eyeOffSetX} 
    cy={-eyeOffSetY} 
    r={eyeRadius}
  />
)
    
const RightEye = () => (
  <circle 
    cx={+eyeOffSetX} 
    cy={-eyeOffSetY} 
    r={eyeRadius}
  />
)

const App: React.FC = () => {
        
  return (
    <div>
      <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          <BackgroundCircle />
          <LeftEye /> 
          <RightEye />
          <path d={mouthArc()} />
        </g>
      </svg>
    </div>
  );
}
        
export default App;
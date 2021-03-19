import React from 'react';
import BackgroundCircle from './backgroundCircle';
import { LeftEye, RightEye } from './eyes';
import Mouth from './mouth';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth= 10; 

const SmileFace: React.FC = () => {
  
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <BackgroundCircle
          radius={centerY - strokeWidth / 2}
          strokeWidth={strokeWidth}
        />
        <LeftEye
          eyeOffSetX={-90}
          eyeOffSetY={-130}
          eyeRadius={43}
        /> 
        <RightEye
          eyeOffSetX={90}
          eyeOffSetY={-130}
          eyeRadius={43}
        />
        <Mouth
          mouthWidth={20}
          mouthRadius={130}
        />
      </g>
    </svg>
    );
  }
  
  export default SmileFace;
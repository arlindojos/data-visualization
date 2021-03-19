import React from 'react';

interface Props {
  eyeOffSetX: number
  eyeOffSetY: number
  eyeRadius: number
}

export const LeftEye: React.FC<Props> = ({eyeOffSetX, eyeOffSetY, eyeRadius}) => (
  <circle 
    cx={eyeOffSetX} 
    cy={eyeOffSetY} 
    r={eyeRadius}
  />
)
    
 export const RightEye: React.FC<Props> = ({eyeOffSetX, eyeOffSetY, eyeRadius}) => (
  <circle 
    cx={eyeOffSetX} 
    cy={eyeOffSetY} 
    r={eyeRadius}
  />
)
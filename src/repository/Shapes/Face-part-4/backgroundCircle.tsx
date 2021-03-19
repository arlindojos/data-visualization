import React from 'react';

interface Props {
  radius: number
  strokeWidth: number
}

const BackgroundCircle: React.FC<Props> = ({radius, strokeWidth}) => (
  <circle 
    fill='yellow' 
    r={radius} 
    stroke='black' 
    stroke-width={strokeWidth} 
  />
)

export default BackgroundCircle
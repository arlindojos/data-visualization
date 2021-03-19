import React, { useState } from 'react'

const width = 960;
const height = 500;
const circleRadius = 30; 
const inicialMousePosition = { x: width / 2, y: height / 2 }


const CssColors: React.FC = () => {
  const [mousePosition, setMousePosition ] = useState(inicialMousePosition);

  const handleMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    setMousePosition({x: clientX, y: clientY})
  }
  

  return (
     <svg width={width} height={height} onMouseMove={handleMouseMove}>
      <circle 
        cx={mousePosition.x}
        cy={mousePosition.y}
        r={circleRadius}
      />
    </svg>
  )
}

export default CssColors;
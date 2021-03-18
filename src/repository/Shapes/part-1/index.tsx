import React from 'react';



const App: React.FC = () => {
  return (
    <div>
      <svg width='100vw' height="100vh">
        <circle cx={400} cy={30} r={23} />
        <circle cx={900} cy={30} r={23} fill="purple" />
        <rect x={80} y={63} width={13} height={40} />
        <g transform="translate(0, 100)" fill="orange" stroke="purple">
          <circle cx={900} cy={30} r={23} stroke-width="5" />
          <rect x={80} y={63} width={13} height={40} />
        </g>

        <g stroke='black' stroke-width={13}>
          <line x1={600} y1={230} x2={660} y2={60} />
          <path stroke="purple" fill="none" d="M600 230 L693 233 L693 10" strokeLinejoin='round' />
        </g>
      </svg>
    </div>
  );
}

export default App;
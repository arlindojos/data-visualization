import {  } from 'd3';
import { D, useData } from './useData';
import { Marks } from './Marks';
import './styles.css';

const width = 960;
const height = 500;

const BarCharts: React.FC = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  return (
    <svg width={width} height={height}>
      <g >
       
        <Marks
          data={data}
        />
      </g>
    </svg>
  );
};

export default BarCharts
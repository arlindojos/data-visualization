import { geoNaturalEarth1, geoPath, geoGraticule } from "d3";
import { D } from "./useData";

interface Props {
  data: D
}

const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();


export const Marks: React.FC<Props> = ({
  data: { land, interiors }
}) => (
  <g className="marks">
    <path 
      className='Sphere'
      d={path({type: 'Sphere'})!} 
    />

    <path 
      className="graticule"
      d={path(graticule()) as string} 
    />

    {
      land.features.map(feature => (
        <path 
          className="land"
          d={path(feature) as string} 
        />
      ))
    }
    
    <path 
      className="interiors"
      d={path(interiors) as string} 
    />
  </g>
)

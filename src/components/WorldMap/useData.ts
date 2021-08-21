import { useState, useEffect } from 'react';
import { json } from 'd3';
import { feature, mesh } from 'topojson'

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';

type Feature = any

export interface D {
  land: {
    features: Feature[]
  }
  interiors: Feature
}

export const useData = () => {
  const [data, setData] = useState<D | null>(null);

  console.log(data);

  useEffect(() => {
    json(jsonUrl).then((topoJsonData: any) => { 
      const { countries, land } = topoJsonData.objects;

      const geoJsonData = {
        land: feature(topoJsonData, land),
        interiors: mesh(topoJsonData, countries, (a, b) => a !== b)
      }

      setData(geoJsonData as unknown as D )
    });
    
  }, []);
  
  return data;
};
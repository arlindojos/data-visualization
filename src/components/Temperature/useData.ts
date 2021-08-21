import { useState, useEffect } from 'react';
import { csv, DSVParsedArray } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029/raw/7d4c3914cc6a29a7f5165f7d5d82b735d97bcfe4/week_temperature_sf.csv';

export type D = {
  temperature: number
  timestamp: Date
}

export const useData = () => {
  const [data, setData] = useState<DSVParsedArray<D> | null>(null);

  useEffect(() => {
    function row(d: any): D {
      d.temperature = Number(d.temperature);
      d.timestamp = new Date(d.timestamp);
      return d;
    };
    
    csv(csvUrl, row).then(dat => {      
      return setData(dat as DSVParsedArray<D>);
    });
  }, []);
  
  return data;
};
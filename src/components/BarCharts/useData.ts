import { useState, useEffect } from 'react';
import { csv, DSVParsedArray } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

export type D = {
  Population: number
  Country: string
}

export const useData = () => {
  const [data, setData] = useState<DSVParsedArray<D> | null>(null);

  useEffect(() => {
    function row(d: any): D {
      d.Population = Number(d['2020']) * 1000;
      return d;
    };
    
    csv(csvUrl, row).then(dat => {      
      return setData(dat.slice(0,20) as DSVParsedArray<D>);
    });
  }, []);
  
  return data;
};
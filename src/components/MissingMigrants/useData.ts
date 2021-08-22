import { useState, useEffect } from 'react';
import { csv, DSVParsedArray } from 'd3';

const csvUrl =
'https://gist.githubusercontent.com/curran/a9656d711a8ad31d812b8f9963ac441c/raw/267eac8b97d161c479d950ffad3ddd5ce2d1f370/MissingMigrants-Global-2019-10-08T09-47-14-subset.csv';

export type D = any

export const useData = () => {
  const [data, setData] = useState<DSVParsedArray<D> | null>(null);

  useEffect(() => {
    function row(d: any): D {
      d['Total Dead and Missing'] = Number(d['Total Dead and Missing']);
      d['Reported Date'] = new Date(d['Reported Date']);
      return d;
    };
    
    csv(csvUrl, row).then(dat => {      
      return setData(dat as DSVParsedArray<D>);
    });
  }, []);
  
  return data;
};
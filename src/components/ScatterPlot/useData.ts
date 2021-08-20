import { useState, useEffect } from 'react';
import { csv, DSVParsedArray } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/639388c2cbc2120a14dcf466e85730eb8be498bb/iris.csv';

export type D = {
  sepal_length: number
  sepal_width: number
  petal_length: number
  petal_width: number
}

export const useData = () => {
  const [data, setData] = useState<DSVParsedArray<D> | null>(null);

  useEffect(() => {
    function row(d: any): D {
      d.sepal_length = Number(d.sepal_length)
      d.sepal_width = Number(d.sepal_width)
      d.petal_length = Number(d.petal_length)
      d.petal_width = Number(d.petal_width)
      return d;
    };
    
    csv(csvUrl, row).then(dat => {      
      return setData(dat as DSVParsedArray<D>);
    });
  }, []);
  
  return data;
};
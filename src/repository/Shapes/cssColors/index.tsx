import React, { useEffect, useState } from 'react'
import { csvParse, DSVRowArray } from 'd3'
import fetchText from '../../../utils/fetchText';

const csvUrl = 'https://gist.githubusercontent.com/bboa3/ffb5ad6d1d87037a665839e85eb2c865/raw/80658e63e7302d42bc61dab71a6fe9e30cdcd5de/name-css-colors.csv'

const CssColors: React.FC = () => {
  const [data, setData ] = useState<DSVRowArray<string> | null>(null);

  useEffect(() => {
    fetchText(csvUrl).then(text => {
      setData(csvParse(text));
    })
  }, [])


  if(!data) return <pre>Loading...</pre>

  console.log(data)
  
  return (
     <div>
      {
        data.map(d => {
          return (
            <div style={{backgroundColor: d['RGB hex value'], width: 40, height: 40}}>
              
            </div>
          )
        })
      }
     </div>
  )
}

export default CssColors;
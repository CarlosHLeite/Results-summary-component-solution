'use client'

import { useState } from 'react';
import data from '../../data.json';
import Card from './Card';
import Button from './Button';

const Summary = () => {

   const [ dataList, setDataList ] =  useState(data)

  
  return (
    <section className="summary">
        <h3>Summary</h3>

        { dataList.map( data => (
          <Card key={data.category} data={data}/>
            
        ))}

        <Button />
    </section>
  )
}

export default Summary
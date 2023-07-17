'use client'

import { useState } from "react"

const colors = (cat) => {
  if(cat === "Reaction") {
    return '#F55'
  }

  if(cat === "Memory") {
    return '#FFB21E'
  }

  if(cat === "Verbal") {
    return '#00BB8F'
  }

  if(cat === "Visual") {
    return '#1125D6'
  }
}


const Card = ({data}) => {
  const { category, score, icon} = data
 
  
  return (
    <div className='card' style={{background: `linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), ${colors(category)}` }}>
      <div className="card-left">
        <img src={icon} alt={`${category} icon`} />
        <p style={{ color: colors(category)}}>{category}</p>
      </div>
      <div className="card-right">
       
        <p>{score} <span>/ 100</span></p>
      </div>
    </div>
  )
}

export default Card
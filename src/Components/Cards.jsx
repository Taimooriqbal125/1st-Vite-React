import React from 'react'
import './Cards.css'
const Cards = (props) => {
  return (
    <div className='Cards'>
        <h1>{props.title}</h1>
        <p className='pere'>{props.description}</p>
    </div>
  )
}

export default Cards

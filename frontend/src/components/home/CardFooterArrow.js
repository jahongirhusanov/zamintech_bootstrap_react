import React from 'react'
import './cardfooterarrow.scss'

function CardFooterArrow(props) {
  return (
    <div className='progress-card'>
      <span className='card-text'>савдо ўтган ойдан фарқи: </span>
      <i className={`fas ${props.iconArrow}`} />
      <p> {props.progressNumber} %</p>
    </div>
  )
}

export default CardFooterArrow

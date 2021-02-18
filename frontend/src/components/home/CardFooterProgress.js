import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import './cardfooterprogress.scss'

function CardFooterProgress(props) {
  // `${props.backIconColor}`
  const now = `${props.currentPaymentStatus}`
  return (
    <div className='progress-card'>
      <ProgressBar now={now} label={`${now}%`} />
    </div>
  )
}

export default CardFooterProgress

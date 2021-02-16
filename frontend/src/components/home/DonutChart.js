import React from 'react'
import './donutchart.scss'

function DonutChart(props) {
  return (
    <div className='card donut-card'>
      <div className='card-body'>
        <div>
          <div className='col-12 p-0'>
            <h6 className='card-title'>{props.title}</h6>
          </div>
          <div className='col-12 p-0'>
            <hr />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default DonutChart

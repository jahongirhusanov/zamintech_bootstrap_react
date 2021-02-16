import React from 'react'
import './statisticcard.scss'

function StatisticCard(props) {
  const style = {
    backgroundColor: `${props.backIconColor}`,
  }

  return (
    <div className='card stat-card'>
      <div className='card-body'>
        <div className='row info'>
          <div className='col-8 p-0'>
            <h6 className='card-title'>{props.title}</h6>
            <h5 className='card-subtitle text-muted'>
              {props.subtitle}{' '}
              <p style={{ fontSize: '1rem', display: 'inline' }}>
                {props.unit}
              </p>
            </h5>
          </div>
          <div className='col-4 p-0 m-auto'>
            <div className='icon' style={style}>
              <i className={`fas ${props.fontAwsIcon}`} />
            </div>
          </div>
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  )
}

export default StatisticCard

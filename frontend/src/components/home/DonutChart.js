import React from 'react'
import Chart from 'react-google-charts'
import './donutchart.scss'

const data = [
  ['Task', 'contracts per Institutions'],
  ['Bank', 110],
  ['Naqd', 25],
  ['Zamin', 62],
]
const options = {
  pieHole: 1.2,
  is3D: true,
}

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
        <div>
          <Chart
            chartType='PieChart'
            width='100%'
            height='300px'
            data={data}
            options={options}
            loader={<div>Юкланмоқда ...</div>}
          />
        </div>
      </div>
    </div>
  )
}

export default DonutChart

import React from 'react'
import Chart from 'react-google-charts'
import './donutchart.scss'

// const data = [
//   ['Task', 'contracts per Institutions'],
//   ['Bank', 110],
//   ['Naqd', 25],
//   ['Zamin', 62],
// ]
// const options = {
//   pieHole: 1.2,
//   is3D: true,
// }

function BarChart(props) {
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
            width={'700px'}
            height={'300px'}
            chartType='Bar'
            loader={<div>Юкланмоқда ...</div>}
            data={[
              ['', 'Samsung A11', 'iPhone X', 'RedMi Note 8'],
              ['ЯНВАР', 4, 3, 8],
              ['ФЕВРАЛ', 10, 5, 5],
              ['МАРТ', 11, 15, 12],
              ['АПРЕЛ', 41, 35, 22],
            ]}
            rootProps={{ 'data-testid': '2' }}
          />
        </div>
      </div>
    </div>
  )
}

export default BarChart

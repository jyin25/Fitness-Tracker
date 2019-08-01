import React from 'react';
import Chart from 'react-google-charts'

class Arnold extends React.Component {
  
  //can use `${}` to set variables
  render() {
    const newValue = 'week3'
    return (
      <>
        <ul>
          <li>Bar</li>
          <li>Line</li>
          <li>dot</li>
        </ul>
        <div style={{ display: 'flex', maxWidth: 1500 }}>
          <Chart
            width={1000}
            height={800}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Workout', 'week1', `${newValue}`],
              ['Bench Press', 200, 0],
              ['Squat', 200, 0],
              ['Deadlift', 200, 0],
            ]}
            options={{
              title: 'The Gains',
              chartArea: { width: '40%' },
              hAxis: {
                title: 'The Gains',
                minValue: 0,
              },
              vAxis: {
                title: 'Weights',
              },
            }}
            legendToggle
          />
        </div>
      </>
    )
  }
}

export default Arnold;


import React from 'react';
import Chart from 'react-google-charts'
import Nav from '../Nav/Nav'
import FitContext from '../FitContext/FitContext'

class Arnold extends React.Component {
  
  static contextType = FitContext
  //can use `${}` to set variables

  renderAllWeeks = () => {
    let allWeek = ''
    
    for(let i = 1; i <= 12; i++) {
      allWeek += `<option>week${i}</option>`
    }
    console.log(allWeek)
    return allWeek
    
  }

  render() {
    const newValue = 'week3'
    const {graphData} = this.context

    return (
      <>
        <Nav></Nav>
        <select>
          {this.renderAllWeeks()}
          <option>all</option>
        </select>
        <div style={{ display: 'flex', maxWidth: 1500 }}>
          <Chart
            width={1000}
            height={800}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Workout', 'week1', `${newValue}`],
              ['Bench Press', 200, 150],
              ['Squat', 200, 0],
              ['Deadlift', 200, 0],
            ]}
            options={{
              title: 'Gains',
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


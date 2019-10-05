import React from 'react';
import Chart from 'react-google-charts'
import FitContext from '../FitContext/FitContext'
import config from '../../config'
import TokenService from '../../services/Token-service'
import Header from '../Header/Header'
import './CustomProgress.css'

class CustomProgress extends React.Component {
  
  static contextType = FitContext

  constructor(props) {
    super(props)
    this.state = {
      customList: [],
      selection: '',
    }
  }

  componentDidMount = () => {
    fetch(`${config.API_ENDPOINT}/customlist`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json().then(customList => this.setState({customList}))
      })
  }

  renderOptions = () => {
    return this.state.customList.map(data => {
      return (
        <>
        <option value={data.id} id={data.id} >{data.exercise_name}</option>
        </>
      )
    })
  }

  selectOption = (e) => {
    this.setState({selection: e.target.value})
  }

  renderGraph = () => {
    const selectedExercise = this.state.customList.filter(data  => {
      const id = parseInt(data.id)
      const selectionId = parseInt(this.state.selection)
      return id === selectionId
    })
    return selectedExercise.map(data => {
      const value1 = parseInt(data.max_value_1)
      const value2 = parseInt(data.max_value_2)
      const value3 = parseInt(data.max_value_3)
      const value4 = parseInt(data.max_value_4)
      const value5 = parseInt(data.max_value_5)
      const value6 = parseInt(data.max_value_6)
      const value7 = parseInt(data.max_value_7)
      const value8 = parseInt(data.max_value_8)
      const value9 = parseInt(data.max_value_9)
      const value10 = parseInt(data.max_value_10)
      const value11 = parseInt(data.max_value_11)
      const value12 = parseInt(data.max_value_12)

      const newExerciseName = data.exercise_name.split('_').join(' ')

      return (
        
        <div style={{ display: 'flex', maxWidth: 800 }}>
          <Chart
            width={400}
            height={400}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Workout', 'week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week8', 'week9', 'week10', 'week11', 'week12'],
              [newExerciseName, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12],
            ]}
            options={{
              title: 'Gains',
              chartArea: { width: '40%' },
              hAxis: {
                title: 'Progress',
                minValue: 0,
              },
              vAxis: {
                title: 'Weights',
              },
            }}
            legendToggle
          />
        </div>
      )
    })
  }


  render() {

    return (
      <>
        <Header></Header>
        <section className='background'></section>
        <div className='selection-container'>
          <h1>Select an exercise to see your progress!</h1>
          <select className='select-drop-down' value={this.state.selection} onChange={(e) => this.selectOption(e)}>
            <option></option>
            {this.renderOptions()}
          </select>
        </div>

        {this.state.selection? this.renderGraph(): null}
        
      </>
    )
  }
}

export default CustomProgress;


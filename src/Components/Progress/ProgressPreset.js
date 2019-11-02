import React from 'react';
import Chart from 'react-google-charts'
import FitContext from '../FitContext/FitContext'
import config from '../../config'
import TokenService from '../../services/Token-service'
import Header from '../Header/Header'
import './CustomProgress.css'

class PresetProgress extends React.Component {
  
  static contextType = FitContext

  constructor(props) {
    super(props)
    this.state = {
      preSetList: [],
      selection: '',
    }
  }

  componentDidMount = () => {
    fetch(`${config.API_ENDPOINT}/insertweights`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json().then(preSetList => this.setState({preSetList}))
      })
  }

  renderOptions = () => {
    const arr = this.state.preSetList.map(data => data.exercise_name)
    const uniqueNames = new Set(arr)
    const arrOfUniqueNames = [...uniqueNames]
    return arrOfUniqueNames.map((data, index) => {
      return (
        <>
        <option value={data} id={index} >{data}</option>
        </>
      )
    })
  }

  selectOption = (e) => {
    this.setState({selection: e.target.value})
  }

  renderGraph = () => {
    const selectedExercise = this.state.preSetList.filter(data  => {
      return data.exercise_name === this.state.selection
    })

    const ids = selectedExercise.map(data => data.id)
    const exerciseName = selectedExercise.map(data => data.exercise_name)
    
    const a = ids.sort((a,b) => a-b)
    const sort1 = a[0]
    const sort2 = a[1]
    const sort3 = a[2]
    const sort4 = a[3]
    const sort5 = a[4]
    const sort6 = a[5]
    const sort7 = a[6]
    const sort8 = a[7]
    const sort9 = a[8]
    const sort10 = a[9]
    const sort11 = a[10]
    const sort12 = a[11]


    const val1 = selectedExercise.filter(data => data.id === sort1)
    const val2 = selectedExercise.filter(data => data.id === sort2)
    const val3 = selectedExercise.filter(data => data.id === sort3)
    const val4 = selectedExercise.filter(data => data.id === sort4)
    const val5 = selectedExercise.filter(data => data.id === sort5)
    const val6 = selectedExercise.filter(data => data.id === sort6)
    const val7 = selectedExercise.filter(data => data.id === sort7)
    const val8 = selectedExercise.filter(data => data.id === sort8)
    const val9 = selectedExercise.filter(data => data.id === sort9)
    const val10 = selectedExercise.filter(data => data.id === sort10)
    const val11 = selectedExercise.filter(data => data.id === sort11)
    const val12 = selectedExercise.filter(data => data.id === sort12)

    const value1 = parseInt(val1[0].max_value)
    const value2 = parseInt(val2[0].max_value)
    const value3 = parseInt(val3[0].max_value)
    const value4 = parseInt(val4[0].max_value)
    const value5 = parseInt(val5[0].max_value)
    const value6 = parseInt(val6[0].max_value)
    const value7 = parseInt(val7[0].max_value)
    const value8 = parseInt(val8[0].max_value)
    const value9 = parseInt(val9[0].max_value)
    const value10 =parseInt(val10[0].max_value)
    const value11 = parseInt(val11[0].max_value)
    const value12 = parseInt(val12[0].max_value)

    const newExerciseName = exerciseName[0].split('_').join(' ')


      return (
        
        <div className='graph-container' style={{ display: 'flex', justifyContent: 'center', }}>
          <Chart
            width="100%"
            height={600}
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

export default PresetProgress;


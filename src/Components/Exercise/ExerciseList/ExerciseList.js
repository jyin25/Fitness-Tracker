import React from 'react'
import './ExcerciseList.css'
import Nav from '../../Nav/Nav'
import {Link} from 'react-router-dom'
import FitContext from '../../FitContext/FitContext'

class ExerciseList extends React.Component {

  

  static contextType = FitContext;

  constructor(props) {
    super(props)
    this.state = {
      BenchPress: {
        input1: '',
        input2: '',
        input3: ''
      },
      exercise1: {
        input1: '',
        input2: '',
        input3: ''
      },
    }
  }


  handleInput1 = (e, exerciseName) => {
    let newVal = e.target.value
    this.setState((prevState, props) => ({
      [exerciseName]: {
        ...prevState[exerciseName],
        input1: newVal,
      }
    }))
  }

  handleInput2 = (e, exerciseName) => {
    let newVal = e.target.value
    this.setState((prevState, props) => ({
      [exerciseName]: {
        ...prevState[exerciseName],
        input2: newVal,
      }
    }))
  }

  handleInput3 = (e, exerciseName) => {
    let newVal = e.target.value
    this.setState((prevState, props) => ({
      [exerciseName]: {
        ...prevState[exerciseName],
        input3: newVal,
      }
    }))
  }

  handleSubmit = (e, name, selectedWeek, storePrPerWeek, selectedDay, exerciseName) => {
    e.preventDefault()

    let num1 = this.state[exerciseName].input1? parseInt(this.state[exerciseName].input1): 0
    let num2 = this.state[exerciseName].input2? parseInt(this.state[exerciseName].input2): 0
    let num3 = this.state[exerciseName].input3? parseInt(this.state[exerciseName].input3): 0
    let pr = Math.max(num1, num2, num3)

    storePrPerWeek(pr, selectedWeek, name, selectedDay)
  }


  renderExerciseList = (exerciseObj, selectedWeek, selectedDay, selectExcercise, storePrPerWeek) => {
    const key = Object.keys(exerciseObj).join(''); // muscle group name
    const exerciseArr = exerciseObj[key]; //exercises for specific musle group in the arr
    const exerciseName = exerciseArr.map(data => Object.keys(data).join('')) //grabbing each of the exercises in the arr

    return (
      <>
        <div>
          <h1 className='exercise-title'>{key}</h1>
            <div className='exercise-list'>
              <ul>
                {exerciseName.map((name, index) => {
                  const combineName = name.replace(/\s/g, '')
                  return (
                    <>
                      <div className='exercise-container'>
                        <li onClick={() => selectExcercise(combineName, name, index, exerciseArr)}><Link to={`/${combineName}`}>{name}</Link></li>
                        <form className='pr-input' onSubmit={(e) => this.handleSubmit(e, name, selectedWeek, storePrPerWeek, selectedDay, combineName)}>
                          <input className='input-box' value={this.state[combineName].input1} type='text' onChange={(e) => this.handleInput1(e, combineName)}></input>
                          <input className='input-box' value={this.state[combineName].input2} type='text' onChange={(e) => this.handleInput2(e, combineName)}></input>
                          <input className='input-box' value={this.state[combineName].input3} type='text' onChange={(e) => this.handleInput3(e, combineName)}></input>
                          <button className='submit-box' type='submit'>Save</button>
                        </form>
                      </div>
                    </>
                  )
                })}
              </ul>
            </div>
        </div> 
      </>
    )
  }


  render() {
    const {exerciseObj} = this.props //object with muscle group name and nested array with exercises separated by each muscle group
    const {selectedWeek, selectedDay, selectExcercise, storePrPerWeek} = this.context
    return (
      <>
        {this.renderExerciseList(exerciseObj, selectedWeek, selectedDay, selectExcercise, storePrPerWeek)}
      </>
    )
  }
}

export default ExerciseList;
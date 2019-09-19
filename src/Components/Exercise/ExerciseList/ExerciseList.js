import React from 'react'
import './ExcerciseList.css'
import Nav from '../../Nav/Nav'
import {Link} from 'react-router-dom'
import FitContext from '../../FitContext/FitContext'

class ExerciseList extends React.Component {

  static contextType = FitContext;

  
  renderExerciseList = (exerciseObj, selectedWeek, selectedDay, selectExcercise) => {
    const key = Object.keys(exerciseObj).join('');
    const exerciseArr = exerciseObj[key];
    console.log(exerciseArr)
    const exerciseName = exerciseArr.map(data => Object.keys(data).join(''))
    console.log(exerciseName)
    

    return (
      <>
        <div>
          <h1 className='exercise-title'>{key}</h1>
            <div className='exercise-list'>
              <ul>
                {exerciseName.map((name, index) => {
                  const combineName = name.replace(/\s/g, '')
                  console.log(index)
                  return (
                    <>
                    <div className='exercise-container'>
                      <li onClick={() => selectExcercise(combineName, name, index, exerciseArr)}><Link to={`/${selectedWeek.week}/${selectedDay}/${combineName}`}>{name}</Link></li>
                      <div className='pr-input'>
                        <input className='input-box'></input>
                        <input className='input-box'></input>
                        <input className='input-box'></input>
                        <button className='submit-box'>Save</button>
                      </div>
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
    const {exerciseObj} = this.props
    const {selectedWeek, selectedDay, selectExcercise} = this.context
    return (
      <>
        {this.renderExerciseList(exerciseObj, selectedWeek, selectedDay, selectExcercise)}
      </>
    )
  }
}

export default ExerciseList;
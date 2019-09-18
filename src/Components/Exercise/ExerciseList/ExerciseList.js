import React from 'react';
import './ExcerciseList.css';
import Nav from '../../Nav/Nav'


class ExerciseList extends React.Component {
  
  renderExerciseList = (exerciseObj) => {
    const key = Object.keys(exerciseObj).join('');
    const exerciseArr = exerciseObj[key];
    console.log(exerciseArr)
    const exerciseName = exerciseArr.map(data => Object.keys(data).join(''))
    console.log(exerciseName)
    

    return (
      <>
        <div>
          <h1>{key}</h1>
          <ul>
            <div className='exercise-list'>
              <ul>
                {exerciseName.map(name => {
                  return (
                    <>
                      <li>{name}</li>
                      <input></input>
                    </>
                  )
                  })}
              </ul>
              
            </div>
          </ul>
        </div> 
      </>
    )
  }


  render() {
    const {exerciseObj} = this.props
    return (
      <>
        {this.renderExerciseList(exerciseObj)}
      </>
    )
  }
}

export default ExerciseList;
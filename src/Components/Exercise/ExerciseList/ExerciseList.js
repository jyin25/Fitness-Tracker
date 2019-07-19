import React from 'react';
import './ExcerciseList.css';

class ExerciseList extends React.Component {
  
  renderExerciseList = (exerciseObj) => {
    const key = Object.keys(exerciseObj).join('');
    const obj = exerciseObj[key];
    console.log(obj)

    return (
      <>
        <div>
          <h1>{key}</h1>
          <p>input</p>
          <ul>
            <div className='exercise-list'>
              <li>{obj.description1}</li>
              <input></input>
            </div>
            <div className='exercise-list'>
              <li>{obj.description2}</li>
              <input></input>
            </div>
          </ul>
        </div> 
      </>
    )
  }


  render() {
    const {exerciseObj} = this.props
    console.log(exerciseObj)
    return (
      <>
        {this.renderExerciseList(exerciseObj)}
      </>
    )
  }
}

export default ExerciseList;
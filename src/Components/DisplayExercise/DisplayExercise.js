import React from 'react'
import FitContext from '../FitContext/FitContext'
import Header from '../Header/Header'
import './DisplayExercise.css'

class DisplayExercise extends React.Component {

  static contextType = FitContext;

  renderExerciseInfo = (newExerciseName, video, howTo) => {

    return (
      <section className='display-exercise-info-container'>
        <h1>{newExerciseName}</h1>
        <div className='video'>
          <iframe title={newExerciseName} src={`${video}`}></iframe>
        </div>
        <h2>Instructions</h2>
        <p className='how-to'>{howTo}</p>
      </section>
    )
  }

  render() {
    const {newExerciseName, video, howTo} = this.context.selectedExercise

    return (
      <>
        <Header></Header>
        <section className='background'></section>
        {this.renderExerciseInfo(newExerciseName, video, howTo)}
      </>
    )
  }
}

export default DisplayExercise
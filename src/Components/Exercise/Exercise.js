import React from 'react';
import FitContext from '../FitContext/FitContext';
import ExerciseList from './ExerciseList/ExerciseList'
import Header from '../Header/Header'
import config from '../../config'
import TokenService from '../../services/Token-service'
import './Exercise.css'

class Exercies extends React.Component {
  static contextType = FitContext;

  componentDidMount = () => {
    fetch (`${config.API_ENDPOINT}/weeks/${this.context.selectedWeek.id}/${this.context.selectedDay.id}`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res => {
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json().then(exercisesTracking => this.context.setExercises(exercisesTracking))
      })
  }

  renderExercise = (preSetExercises) => {
    
    return preSetExercises.map(data => {
      return (
        <>
          <ExerciseList exerciseObj={data}></ExerciseList>
        </>
      )
    })

  }


  render() {
    const {preSetExercises} = this.context;
    return (
      <>
        <Header></Header>
        <section className='background'></section>
          <p className='instructions'>Click on the exercise for more information</p>
          <p className='instructions'> Record your best lift per exercise to start tracking!</p>
        <section className='custom-exercise-list'>
          <div className='exercise-container'>
            <ul>{this.renderExercise(preSetExercises)}</ul>
          </div>
        </section>
      </>
    )
  }
}

export default Exercies;
import React from 'react';
import FitContext from '../FitContext/FitContext';
import Reps from './Reps/Reps'
import ExerciseList from './ExerciseList/ExerciseList'
import Nav from '../Nav/Nav'
class Exercies extends React.Component {
  static contextType = FitContext;

  renderExercise = (preSetExercises, selectedWeek, selectedDay) => {
    const findWeekIndx = Object.keys(preSetExercises.data).find(data => Object.keys(preSetExercises.data[data]).join('') === selectedWeek.week);
    const setWeek = selectedWeek.week;
    console.log(setWeek)
    const findDayIndx = Object.keys(preSetExercises.data[findWeekIndx][setWeek]).find(data => 
      Object.keys(preSetExercises.data[findWeekIndx][setWeek][data]).join('') === selectedDay)
    const filterdDay = preSetExercises.data[findWeekIndx][setWeek][findDayIndx][selectedDay]
    console.log(filterdDay)
    return filterdDay.map(data => {
      return (
        <>
          <ExerciseList exerciseObj={data}></ExerciseList>
        </>
      )
    })

  }


  render() {
    const {preSetExercises, selectedWeek, selectedDay} = this.context;
    console.log(Object.keys(preSetExercises.data))
    console.log(selectedDay)
    return (
      <>
        <Nav></Nav>
        <div className='Workout-List-Container'>{this.renderExercise(preSetExercises, selectedWeek, selectedDay)}</div>
      </>
    )
  }
}

export default Exercies;
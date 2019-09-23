import React from 'react'
import Header from '../../Header/Header'
import Search from '../../Search/Search'
import FitContext from '../../FitContext/FitContext'
import store from '../../../Store'
import {Link} from 'react-router-dom'

class DisplayExercisesMuscle extends React.Component {

  static contextType = FitContext;

  constructor(props) {
    super(props)
    this.state = {
      exercises: [
        {
          exercise: 'pullup',
          isCheck: false
        },
        {
          exercise: 'DeadLift',
          isCheck: false
        }
      ],
      customList: [],
    }
  }

  componentDidMount = () => {
    //pull all exercises with isChecked and name from api and append to state
  }

  handleChange = (e) => {
    const selectedExercise = this.state.exercises.filter(data => data.exercise === e.target.id)
    selectedExercise[0].isCheck = e.target.checked

    this.setState({
      ...this.state.exercises,
      selectedExercise
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const checkedExercise = this.state.exercises.filter(data => data.isCheck === true)
    const exerciseList = checkedExercise.map(data => data.exercise)
    this.setState({
      customList: [...this.state.customList, ...exerciseList]
    })

    this.updateDatabaseWithList(exerciseList)
  }

  updateDatabaseWithList = (exerciseList) => {
    console.log(exerciseList) //post request to database
  }

  renderSelectedMuscleGroup = (muscle, muscleData, selectExcercise) => {
    console.log(muscleData)
    const exerciseArr = muscleData[muscle].exercise
    console.log(exerciseArr)
    return exerciseArr.map((data, index) => {
      const exerciseName = Object.keys(data).join()
      const newVal = this.state.exercises.find(data => data.exercise === exerciseName)
      const combineName = exerciseName.replace(/\s/g, '')
      return (
        <>
          <input type='checkbox' checked={newVal.isChecked} id={exerciseName} onChange={(e) => this.handleChange(e)}/>
          <label onClick={() => selectExcercise(combineName, exerciseName, index, exerciseArr)}><Link to={`/${exerciseName}`}>{exerciseName}</Link></label>
        </>
      )
    })
  }
 
  render() {
    const {selectedMuscleGroup, muscleGroupData, selectExcercise} = this.context
    return (
      <> 
        <Header></Header>
        <Search></Search>
        <section>
          <h1>{selectedMuscleGroup}</h1>
          <form className='muscle-group-exercises' onSubmit={(e) => this.handleSubmit(e)}>
            {this.renderSelectedMuscleGroup(selectedMuscleGroup, muscleGroupData, selectExcercise)}
            <input type='submit'></input>
          </form>
        </section>

      </>
    )
  }
}

export default DisplayExercisesMuscle
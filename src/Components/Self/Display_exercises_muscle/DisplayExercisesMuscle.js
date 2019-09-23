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
        {pullup: {
          isCheck: false
        }},
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

  renderSelectedMuscleGroup = (muscle, muscleData) => {
    const exerciseArr = muscleData[muscle].exercise

    return exerciseArr.map((data, index) => {
      const exerciseName = Object.keys(data).join()
      const newVal = this.state.exercises.find(data => data.exercise === exerciseName)

      return (
        <>
          <input type='checkbox' checked={newVal.isChecked} id={exerciseName} onChange={(e) => this.handleChange(e)}/>
          <label><Link to={`/musclegroup/${exerciseName}`}>{exerciseName}</Link></label>
        </>
      )
    })
  }
 
  render() {
    const {selectedMuscleGroup, muscleGroupData} = this.context
    return (
      <> 
        <Header></Header>
        <Search></Search>
        <section>
          <h1>{selectedMuscleGroup}</h1>
          <form className='muscle-group-exercises' onSubmit={(e) => this.handleSubmit(e)}>
            {this.renderSelectedMuscleGroup(selectedMuscleGroup, muscleGroupData)}
            <input type='submit'></input>
          </form>
        </section>

      </>
    )
  }
}

export default DisplayExercisesMuscle
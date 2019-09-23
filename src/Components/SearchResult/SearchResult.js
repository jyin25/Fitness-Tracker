import React from 'react'
import './SearchResult.css'
import {FaSearch} from "react-icons/fa"
import Store from '../../Store'
import FitContext from '../FitContext/FitContext'
import Search from '../Search/Search'
import Header from '../Header/Header'
import {Link} from 'react-router-dom'

class SetTracking extends React.Component {
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
        },
        {
          exercise: 'pull',
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

  renderExcerciseList = (searchResult, selectExcercise) => {
    return searchResult.map((data, index) => {
      const exerciseName = Object.keys(data).join()
      const newVal = this.state.exercises.find(data => data.exercise === exerciseName)
      const combineName = exerciseName.replace(/\s/g, '')
      return (
        <>
          <input type='checkbox' checked={newVal.isChecked} id={exerciseName} onChange={(e) => this.handleChange(e)}/>
          <label onClick={() => selectExcercise(combineName, exerciseName, index, searchResult)}><Link to={`/${exerciseName}`}>{exerciseName}</Link></label>
        </>
      )
    })
  }
  
  render() {
    const {filteredExercises, selectExcercise} = this.context
    console.log(filteredExercises)
    return (
      <>
        <Header></Header>
        <Search></Search>
        <section>
          <h1>Search Result</h1>
          <form className='muscle-group-exercises' onSubmit={(e) => this.handleSubmit(e)}>
            {this.renderExcerciseList(filteredExercises, selectExcercise)}
            <input type='submit'></input>
          </form>

        </section>
        
      </>
    )
  }
}

export default SetTracking
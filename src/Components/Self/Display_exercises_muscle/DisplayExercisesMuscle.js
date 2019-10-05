import React from 'react'
import Header from '../../Header/Header'
import Search from '../../Search/Search'
import FitContext from '../../FitContext/FitContext'
import {Link} from 'react-router-dom'
import config from '../../../config'
import TokenService from '../../../services/Token-service'
import './DisplayExercisesMuscle.css'

class DisplayExercisesMuscle extends React.Component {

  static contextType = FitContext;

  constructor(props) {
    super(props)
    this.state = {
      filterExercises: [],
      customList: [],
      exercises: [],
    }
  }

  componentDidMount = () => {
    const muscleGroupId = this.context.selectedGroup.id
    fetch (`${config.API_ENDPOINT}/musclegroup/${muscleGroupId}`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json().then(exercises => this.setState({exercises}))
      })

    fetch(`${config.API_ENDPOINT}/customlist`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json().then(customList => {
          const customExerciseId = customList.map(data => data.exercise_id)
          this.setState({customList: customExerciseId})
        })
      })

  }


  handleChange = (e) => {
    const selectedExercise = this.state.exercises.map(data => {
      const num = parseInt(data.id)
      const selectedNum = parseInt(e.target.id)
      if(num === selectedNum) {
        data.is_check = !data.is_check
      }
      return data
    })

    this.setState({
      filterExercises: selectedExercise
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const checkedExercise = this.state.filterExercises.filter(data => data.is_check === true)
    const exerciseList = checkedExercise.map(data => data.id)
    const newList = exerciseList.filter(val => !this.state.customList.includes(val))
    this.setState({
      customList: [...this.state.customList, ...newList]
    })

    const insertList = {
      exercise_id: newList
    }

    fetch (`${config.API_ENDPOINT}/customlist`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(insertList)
    })
    .then(res => {
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json().then(data => this.addedExerciseSuccess())
    })
  }

  addedExerciseSuccess = () => {
    const {history} = this.props
    history.push('/CustomList')
  }

  renderSelectedMuscleGroup = (muscle, muscleData, selectExcercise) => {

    return this.state.exercises.map((data) => {
      const newExerciseName = data.exercise_name.split('_').join(' ')
      return (
        <div className='muscle-exercise-container'>
          <input className='input-checkbox' type='checkbox' checked={data.isChecked} id={data.id} onChange={(e) => this.handleChange(e)}/>
          <label onClick={() => this.context.selectExcercise(newExerciseName, data.exercise_name, data.video, data.exercise_how_to)}><Link to={`/${data.exercise_name}`}><p className='muscle-group-exercise-name'>{newExerciseName}</p></Link></label>
        </div>
      )
    })
  }
 
  render() {
    return (
      <> 
        <Header></Header>
        <Search></Search>
        <section>
          <h1 className='title-text'>{this.context.selectedGroup.muscle_name}</h1>
          <form className='muscle-group-exercises' onSubmit={(e) => this.handleSubmit(e)}>
            {this.renderSelectedMuscleGroup()}
            <div className='submit-container'>
              <button type='submit' className='search-submit'>Save</button>
            </div>
          </form>
        </section>

      </>
    )
  }
}

export default DisplayExercisesMuscle
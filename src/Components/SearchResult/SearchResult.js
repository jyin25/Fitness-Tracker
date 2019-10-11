import React from 'react'
import './SearchResult.css'
import FitContext from '../FitContext/FitContext'
import Search from '../Search/Search'
import Header from '../Header/Header'
import {Link} from 'react-router-dom'
import config from '../../config'
import TokenService from '../../services/Token-service'

class SetTracking extends React.Component {
  static contextType = FitContext;

  constructor(props) {
    super(props)
    this.state = {
      filterExercises: [],
      customList: [],
      filteredExercises: [],
    }
  }

  componentDidMount = () => {
    this.setState({filteredExercises: this.context.filteredExercises})

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
    const selectedExercise = this.state.filteredExercises.map(data => {
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

  renderExcerciseList = (selectExcercise) => {
    return this.state.filteredExercises.map((data, index) => {
      const newExerciseName = data.exercise_name.split('_').join(' ')

      return (
        <div className='search-result-container'>
          <input className='input-checkbox' type='checkbox' checked={data.is_check} id={data.id} onChange={(e) => this.handleChange(e)}/>
          <label onClick={() => selectExcercise(newExerciseName, data.exercise_name, data.video, data.exercise_how_to)}><Link to={`/${data.exercise_name}`}><p className='muscle-group-exercise-name'>{newExerciseName}</p></Link></label>
        </div>
      )
    })
  }
  
  render() {
    const {selectExcercise} = this.context
    return (
      <>
        <Header></Header>
        <Search></Search>
        <section>
          <h1 className='title-text'>Search Result</h1>
          <form className='muscle-group-exercises' onSubmit={(e) => this.handleSubmit(e)}>
            {this.renderExcerciseList(selectExcercise)}
            <div className='submit-container'>
              <button type='submit' className='search-submit'>Save</button>
            </div>
          </form>

        </section>
        
      </>
    )
  }
}

export default SetTracking
import React from 'react'
import './ExcerciseList.css'
import {Link} from 'react-router-dom'
import FitContext from '../../FitContext/FitContext'
import config from '../../../config'
import TokenService from '../../../services/Token-service'

class ExerciseList extends React.Component {

  

  static contextType = FitContext;

  constructor(props) {
    super(props)
    this.state = {
      id: '',
      maxValue: ''
    }
  }

  componentDidMount = () => {
    this.setState({id: this.props.exerciseObj.id, maxValue: this.props.exerciseObj.max_value})
  }


  handleInput1 = (e) => {
    let newVal = e.target.value
    this.setState({maxValue: newVal})
  }


  handleSubmit = (e) => {
    e.preventDefault()

    let maxVal = parseInt(this.state.maxValue)

    this.postMaxVal(maxVal)
  }

  postMaxVal = (num) => {
    fetch (`${config.API_ENDPOINT}/insertweights`, {
      method: 'PATCH',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.id,
        max_value: num
      }),
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
  }


  renderExerciseList = (exerciseObj, selectExcercise) => {
    
    const {exercise_name, video, exercise_how_to, is_check} = exerciseObj
    const newExerciseName = exercise_name.split('_').join(' ')

    return (
      <li onClick={() => selectExcercise(newExerciseName, exercise_name, video, exercise_how_to, is_check)} className='custom-list-container'><Link to={`/${exercise_name}`}><p className='custom-exercise-name'>{newExerciseName}</p></Link>
        <form className='pr-input' onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input className='input-box' value={this.state.maxValue} type='text' onChange={(e) => this.handleInput1(e)}></input>
          </div>
            <button className='submit-box' type='submit'>Save</button>
        </form>
      </li>
    )
  }


  render() {
    const {exerciseObj} = this.props
    const {selectExcercise} = this.context
    return (
      <>
        {this.renderExerciseList(exerciseObj, selectExcercise)}
      </>
    )
  }
}

export default ExerciseList;
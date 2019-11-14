import React from 'react';
import FitContext from '../../FitContext/FitContext'
import Header from '../../Header/Header'
import Search from '../../Search/Search'
import config from '../../../config'
import TokenService from '../../../services/Token-service'
import {Link} from 'react-router-dom'
import './CustomList.css'

class CustomList extends React.Component {
  static contextType = FitContext;

  constructor(props) {
    super(props)
    this.state = {
      customList: [],
      isText: false,
    }
  }

  componentDidMount = () => {
    fetch(`${config.API_ENDPOINT}/customlist`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        (!res.ok) 
        ? res.json().then(e => Promise.reject(e))
        : res.json().then(customList => this.setState({customList}))
      })
  }

  handleInput1 = (e) => {
    let newVal = e.target.value


    if(isNaN(parseInt(e.target.value))) {
      this.setState({isText: true})
    } else {
      this.setState({isText: false})
    }



    const findEx = this.state.customList.map(data => {
      const id = parseInt(data.id)
      const inputId = parseInt(e.target.id)
       if (id === inputId) {
         const num = newVal
         data.max_value_1 = num
       }
       return data
    })

    this.setState({customList:findEx})
  }

  handleInput2 = (e) => {
    let newVal = e.target.value

    if(isNaN(parseInt(e.target.value))) {
      this.setState({isText: !this.state.isText})
    }

    const findEx = this.state.customList.map(data => {
      const id = parseInt(data.id)
      const inputId = parseInt(e.target.id)
       if (id === inputId) {
         const num = newVal
         data.max_value_2 = num
       }
       return data
    })

    this.setState({customList:findEx})
  }

  handleInput3 = (e) => {
    let newVal = e.target.value

    if(isNaN(parseInt(e.target.value))) {
      this.setState({isText: !this.state.isText})
    }

    const findEx = this.state.customList.map(data => {
      const id = parseInt(data.id)
      const inputId = parseInt(e.target.id)
       if (id === inputId) {
         const num = newVal
         data.max_value_3 = num
       }
       return data
    })

    this.setState({customList:findEx})
  }

  handleInput4 = (e) => {
    let newVal = e.target.value

    if(isNaN(parseInt(e.target.value))) {
      this.setState({isText: !this.state.isText})
    }

    const findEx = this.state.customList.map(data => {
      const id = parseInt(data.id)
      const inputId = parseInt(e.target.id)
       if (id === inputId) {
         const num = newVal
         data.max_value_4 = num
       }
       return data
    })

    this.setState({customList:findEx})
  }

  handleInput5 = (e) => {
    let newVal = e.target.value

    if(isNaN(parseInt(e.target.value))) {
      this.setState({isText: !this.state.isText})
    }

    const findEx = this.state.customList.map(data => {
      const id = parseInt(data.id)
      const inputId = parseInt(e.target.id)
       if (id === inputId) {
         const num = newVal
         data.max_value_5 = num
       }
       return data
    })

    this.setState({customList:findEx})
  }

  handleInput6 = (e) => {
    let newVal = e.target.value

    if(isNaN(parseInt(e.target.value))) {
      this.setState({isText: !this.state.isText})
    }

    const findEx = this.state.customList.map(data => {
      const id = parseInt(data.id)
      const inputId = parseInt(e.target.id)
       if (id === inputId) {
         const num = newVal
         data.max_value_6 = num
       }
       return data
    })

    this.setState({customList:findEx})
  }

  handleInput7 = (e) => {
    let newVal = e.target.value

    if(isNaN(parseInt(e.target.value))) {
      this.setState({isText: !this.state.isText})
    }

    const findEx = this.state.customList.map(data => {
      const id = parseInt(data.id)
      const inputId = parseInt(e.target.id)
       if (id === inputId) {
         const num = newVal
         data.max_value_7 = num
       }
       return data
    })

    this.setState({customList:findEx})
  }

  handleInput8 = (e) => {
    let newVal = e.target.value

    if(isNaN(parseInt(e.target.value))) {
      this.setState({isText: !this.state.isText})
    }

    const findEx = this.state.customList.map(data => {
      const id = parseInt(data.id)
      const inputId = parseInt(e.target.id)
       if (id === inputId) {
         const num = newVal
         data.max_value_8 = num
       }
       return data
    })

    this.setState({customList:findEx})
  }

  handleInput9 = (e) => {
    let newVal = e.target.value

    if(isNaN(parseInt(e.target.value))) {
      this.setState({isText: !this.state.isText})
    }

    const findEx = this.state.customList.map(data => {
      const id = parseInt(data.id)
      const inputId = parseInt(e.target.id)
       if (id === inputId) {
         const num = newVal
         data.max_value_9 = num
       }
       return data
    })

    this.setState({customList:findEx})
  }

  handleInput10 = (e) => {
    let newVal = e.target.value

    if(isNaN(parseInt(e.target.value))) {
      this.setState({isText: !this.state.isText})
    }

    const findEx = this.state.customList.map(data => {
      const id = parseInt(data.id)
      const inputId = parseInt(e.target.id)
       if (id === inputId) {
         const num = newVal
         data.max_value_10 = num
       }
       return data
    })

    this.setState({customList:findEx})
  }

  handleInput11 = (e) => {
    let newVal = e.target.value

    if(isNaN(parseInt(e.target.value))) {
      this.setState({isText: !this.state.isText})
    }

    const findEx = this.state.customList.map(data => {
      const id = parseInt(data.id)
      const inputId = parseInt(e.target.id)
       if (id === inputId) {
         const num = newVal
         data.max_value_11 = num
       }
       return data
    })

    this.setState({customList:findEx})
  }

  handleInput12 = (e) => {
    let newVal = e.target.value

        if(isNaN(parseInt(e.target.value))) {
      this.setState({isText: !this.state.isText})
    }

    const findEx = this.state.customList.map(data => {
      const id = parseInt(data.id)
      const inputId = parseInt(e.target.id)
       if (id === inputId) {
         const num = newVal
         data.max_value_12 = num
       }
       return data
    })

    this.setState({customList:findEx})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.state.customList.map(data => {
      const id = parseInt(data.id)
      const formId = parseInt(e.target.id)
      if(id === formId) {
        fetch (`${config.API_ENDPOINT}/customlist/insert_custom_weights`, {
          method: 'PATCH',
          headers: {
            'Authorization': `bearer ${TokenService.getAuthToken()}`,
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            id: formId,
            max_value_1: data.max_value_1,
            max_value_2: data.max_value_2,
            max_value_3: data.max_value_3,
            max_value_4: data.max_value_4,
            max_value_5: data.max_value_5,
            max_value_6: data.max_value_6,
            max_value_7: data.max_value_7,
            max_value_8: data.max_value_8,
            max_value_9: data.max_value_9,
            max_value_10: data.max_value_10,
            max_value_11: data.max_value_11,
            max_value_12: data.max_value_12,
          }),
        })
          .then(res => {
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json().then(e => e)
          })
      }
    })

  }

  handleDelete = (e) => {
    this.state.customList.map(data => {
      const id = parseInt(data.id)
      const formId = parseInt(e.target.id)
      console.log(id, formId)
      if(id === formId) {
        fetch (`${config.API_ENDPOINT}/customlist/delete_workout`, {
          method: 'DELETE',
          headers: {
            'Authorization': `bearer ${TokenService.getAuthToken()}`,
          }
        })
          .then(res => res)
      }
    })
  }




  
  renderExerciseList = (exerciseObj, selectExcercise) => {
    const {exercise_name, video, exercise_how_to, id} = exerciseObj
    const newExerciseName = exercise_name.split('_').join(' ')
    console.log(this.context.allExercises)

    return (
      <>
        <li onClick={() => selectExcercise(newExerciseName, exercise_name, video, exercise_how_to)} className='custom-list-container'><Link to={`/${exercise_name}`}><p className='custom-exercise-name'>{newExerciseName}</p></Link>
        <form className='pr-input' onSubmit={(e) => this.handleSubmit(e)} id={id}>
          <div>
            <input className='custom-input-box' value={exerciseObj.max_value_1} type='text' onChange={(e) => this.handleInput1(e)} id={id}></input>
            {exerciseObj.max_value_1? <input className='custom-input-box' value={exerciseObj.max_value_2} type='text' onChange={(e) => this.handleInput2(e)} id={id}></input>: null}
            {exerciseObj.max_value_2? <input className='custom-input-box' value={exerciseObj.max_value_3} type='text' onChange={(e) => this.handleInput3(e)} id={id}></input>: null}
            {exerciseObj.max_value_3? <input className='custom-input-box' value={exerciseObj.max_value_4} type='text' onChange={(e) => this.handleInput4(e)} id={id}></input>: null}
            {exerciseObj.max_value_4? <input className='custom-input-box' value={exerciseObj.max_value_5} type='text' onChange={(e) => this.handleInput5(e)} id={id}></input>: null}
            {exerciseObj.max_value_5? <input className='custom-input-box' value={exerciseObj.max_value_6} type='text' onChange={(e) => this.handleInput6(e)} id={id}></input>: null}
            {exerciseObj.max_value_6? <input className='custom-input-box' value={exerciseObj.max_value_7} type='text' onChange={(e) => this.handleInput7(e)} id={id}></input>: null}
            {exerciseObj.max_value_7? <input className='custom-input-box' value={exerciseObj.max_value_8} type='text' onChange={(e) => this.handleInput8(e)} id={id}></input>: null}
            {exerciseObj.max_value_8? <input className='custom-input-box' value={exerciseObj.max_value_9} type='text' onChange={(e) => this.handleInput9(e)} id={id}></input>: null}
            {exerciseObj.max_value_9? <input className='custom-input-box' value={exerciseObj.max_value_10} type='text' onChange={(e) => this.handleInput10(e)} id={id}></input>: null}
            {exerciseObj.max_value_10? <input className='custom-input-box' value={exerciseObj.max_value_11} type='text' onChange={(e) => this.handleInput11(e)} id={id}></input>: null}
            {exerciseObj.max_value_11? <input className='custom-input-box' value={exerciseObj.max_value_12} type='text' onChange={(e) => this.handleInput12(e)} id={id}></input>: null}
          </div>
          <button className='submit-box' type='submit'>Save</button> <button className='submit-box' id={id} onClick={(e) => this.handleDelete(e)}>Delete</button>
        </form>
        </li>
      </>
    )
  }

  alert = () => {
    alert('Invalid number!')
  }

  render() {
    const {selectExcercise} = this.context
    const warning = this.state.isText


    return (
      <>
        <Header></Header>
        <Search></Search>
        <section className='custom-exercise-list'>
          <h1>Custom List</h1>
          <p className="instructions">Click on the exercise for more information</p>
          <h3 className='description-howto'>Record the heaviest weight you lifted for the week</h3>
            <div className='exercise-container'>
              <ul>
              {warning? <p className='invalid-number'>Invalid number!</p>:null}
              {this.state.customList.map(exerciseObj => this.renderExerciseList(exerciseObj, selectExcercise))}
              </ul>
            </div>
        </section>
      </>
    )
  }
}
export default CustomList;
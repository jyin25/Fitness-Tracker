import React from 'react'
import {Link} from 'react-router-dom'
import './MuscleGroup.css'
import FitContext from '../FitContext/FitContext'
import Header from '../Header/Header'
import Search from '../Search/Search'
import config from '../../config'
import TokenService from '../../services/Token-service'

class MuscleGroup extends React.Component {
  static contextType = FitContext;

  constructor(props) {
    super(props)
    this.state = {
      muscleGroups: []
    }
  }

  componentDidMount = () => {
    fetch (`${config.API_ENDPOINT}/musclegroup`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json().then(muscleGroups => this.setState({muscleGroups}))
      })
  }

  displayFirstGroup = (selectMuscleGroup) => {
    const firstGroup = this.state.muscleGroups.slice(0, 5);

    return firstGroup.map(data => {
      if(data.muscle_name !== 'rest') {
        return (
          <>
            <div>
              <li className='muscle-text'>{data.muscle_name}</li>
              <Link to={`/muscleGroup/${data.muscle_name}`}><img src={data.muscle_pictures} className='muscle-container' onClick={() => selectMuscleGroup(data)}/></Link>
            </div>
          </>
        )
      }
    })
  }

  displaySecondGroup = (selectMuscleGroup) => {
    const secondGroup = this.state.muscleGroups.slice(5, this.state.muscleGroups.length);

    return secondGroup.map(data => {
      if(data.muscle_name !== 'rest') {
        return (
          <>
            <div>
              <li className='muscle-text'>{data.muscle_name}</li>
              <Link to={`/muscleGroup/${data.muscle_name}`}><img src={data.muscle_pictures} className='muscle-container' onClick={() => selectMuscleGroup(data)}/></Link>
            </div>
          </>
        )
      }
    })
  }



  render() {
    const {selectMuscleGroup} = this.context;
    return (
      <>
        <Header></Header>
        <Search></Search>
        <section className='muscle-group'>
          <h1>Muscle Group</h1>
          <ul className="first-muscle-group">
            {this.displayFirstGroup(selectMuscleGroup)}
          </ul>
          <ul className="second-muscle-group">
            {this.displaySecondGroup(selectMuscleGroup)}
          </ul>
        </section>


      </>
    )
  }
}

export default MuscleGroup;
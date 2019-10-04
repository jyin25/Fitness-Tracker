import React from 'react'
import {FaDumbbell} from "react-icons/fa"
import {FaTasks} from "react-icons/fa"
import {Link} from 'react-router-dom'
import Header from '../Header/Header'
import './Tracking.css'
import Search from '../Search/Search'
import config from '../../config'
import TokenService from '../../services/Token-service'
import FitContext from '../FitContext/FitContext'

class Tracking extends React.Component {

  static contextType = FitContext;


  componentDidMount = () => {
    fetch (`${config.API_ENDPOINT}/exerciselist`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json().then(data => this.context.getAllExercises(data))
      })
  }

  render() {
    
    return (
      <> 
        <Header></Header>
        <Search></Search>
        <section>
          <div className='tracking-text'>
            <h1>Start tracking your workouts now!</h1>
          </div>
          <div className='nav-icons-container'>
            <nav className='icon-container'>
              <Link to='/CustomList'><FaTasks className='icon custom-list-icon'/></Link>
              <p>Display custom workouts</p>
            </nav>
            <nav className='icon-container'>
              <Link to='/MuscleGroup'><FaDumbbell className='icon set-custom-icon'/></Link>
              <p>Set custom workouts</p>
            </nav>
          </div>
        </section>
      </>
    )
  }
}

export default Tracking
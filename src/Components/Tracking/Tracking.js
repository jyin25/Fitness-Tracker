import React from 'react'
import {FaDumbbell} from "react-icons/fa"
import {FaTasks} from "react-icons/fa"
import {Link} from 'react-router-dom'
import Header from '../Header/Header'
import './Tracking.css'
import Search from '../Search/Search'

class Tracking extends React.Component {

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
              <Link to='/PreSet'><FaTasks className='icon'/></Link>
              <p>Preset workout</p>
            </nav>
            <nav className='icon-container'>
              <Link to='/PreSet'><FaDumbbell className='icon'/></Link>
              <p>Preset workout</p>
            </nav>
          </div>
        </section>
      </>
    )
  }
}

export default Tracking
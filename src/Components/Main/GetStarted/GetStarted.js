import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../../Images/icon.png'
import './GetStarted.css'

class LoginDemo extends React.Component {

  render() {
    return (
      <>
      <div className='get-start-heading-container'>
        <h1 className='heading-title'>Fit Tracker</h1>
        <img className='login-logo' src={logo} alt='logo'></img>
      </div>
        <div className='get-started-container'>
          <h1>What is Fit Tracker?</h1>
          <section className='get-started-box-container'>
            <div className='get-started-box'>
              <p>Record how much you lift</p>
            </div>
            <div className='get-started-box'>
              <p>Create your own custom workouts to track</p>
            </div>
            <div className='get-started-box'>
              <p>Check your progress based on 12 weeks period</p>
            </div>
          </section>

          <button className='get-start' type='submit'><Link to='/start'>Get Started</Link></button>
        </div>
      </>
    )
  }
}

export default LoginDemo;
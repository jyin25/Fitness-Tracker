import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import Nav from '../Nav/Nav'
import LoginPage from '../Routes/LoginPage/LoginPage'
import Register from '../Routes/Register/Register'
import FitContext from '../FitContext/FitContext'
import Logout from '../Routes/Logout/Logout'
import TokenService from '../../services/Token-service'
import NavUsers from '../Nav/NavUsers'

class Header extends React.Component {
  static contextType = FitContext;

  render() {
    const userName = this.context.userName

    return (
      <> 
        <div className='heading-container'>
          <Nav></Nav>
          <Link to='/'><h1 className='heading-title'>Fit Tracker</h1></Link>
          <NavUsers></NavUsers>
        </div>
      </>
    )
  }
}

export default Header
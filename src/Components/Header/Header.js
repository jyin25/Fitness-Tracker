import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import Nav from '../Nav/Nav'
import FitContext from '../FitContext/FitContext'
import NavUsers from '../Nav/NavUsers'
import logo from '../../Images/icon.png'

class Header extends React.Component {
  static contextType = FitContext;

  render() {

    return (
      <> 
        <div className='heading-container'>
          <Nav></Nav>
          <Link className='logo-container' to='/user'>
            <img className='title-logo' src={logo} alt='logo'></img>
          </Link>
          <NavUsers></NavUsers>
        </div>
      </>
    )
  }
}

export default Header
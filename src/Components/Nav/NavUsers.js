import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'
import {FaUser} from "react-icons/fa";
import Logout from '../Routes/Logout/Logout'
import TokenService from '../../services/Token-service';
import LoginPage from '../Routes/LoginPage/LoginPage'
import Register from '../Routes/Register/Register'
import FitContext from '../FitContext/FitContext'
import './NavUsers.css'

class NavUsers extends React.Component {

  static contextType = FitContext;

  constructor(props) {
    super(props)
    this.state = {
      onClick: false
    }
  }

  displayOptions = (userName) => {
    return(
      <div className='user-box'>
        {TokenService.hasAuthToken() 
          ? <>
          <p>{userName}</p>
          <Logout></Logout>
          </>
          : <>
          <LoginPage></LoginPage>
          <Register></Register>
        </>}
      </div>
    )
  }

  handleClick = () => {
    this.setState({onClick: !this.state.onClick})
  }

  render() {
    const userName = this.context.userName

    const clickEvent = this.state.onClick

    return (
      <div className='nav-user'>
        <p onClick={() => this.handleClick()}><FaUser className='user-icon'/></p>
        {clickEvent? this.displayOptions(userName): null}
      </div>
    )
  }
}

export default NavUsers;
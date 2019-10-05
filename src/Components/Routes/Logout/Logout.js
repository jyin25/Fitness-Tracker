import React from 'react'
import {Link} from 'react-router-dom'
import TokenService from '../../../services/Token-service'
import './Logout.css'

class Logout extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  render() {
    return (
      <>
        <Link to='/'><p onClick={() => this.handleLogoutClick()} className='logout-text'>Logout</p></Link>
      </>
    )
  }
}

export default Logout
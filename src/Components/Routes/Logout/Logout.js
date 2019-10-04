import React from 'react'
import {Link} from 'react-router-dom'
import TokenService from '../../../services/Token-service'

class Logout extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  render() {
    return (
      <>
        <Link to='/'><p onClick={() => this.handleLogoutClick()}>Logout</p></Link>
      </>
    )
  }
}

export default Logout
import React from 'react'
import {Link} from 'react-router-dom'
import './LoginPage.css'

class LoginPage extends React.Component {

  render() {
    return (
      <> 
        <Link to='/auth/login'>
          <div className='login-container'>
            <h1 className='login'>Login</h1>
          </div>
        </Link>
      </>
    )
  }
}

export default LoginPage
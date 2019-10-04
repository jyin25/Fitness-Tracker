import React from 'react'
import {Link} from 'react-router-dom'
import './LoginPage.css'

class LoginPage extends React.Component {

  render() {

    return (
      <> 
        <Link to='/login'>
          <div className='login-container'>
            <p className='login'>Login</p>
          </div>
        </Link>
      </>
    )
  }
}

export default LoginPage
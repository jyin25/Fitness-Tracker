import React from 'react'
import {Link} from 'react-router-dom'
import './Register.css'

class Register extends React.Component {

  render() {
    return (
      <> 
        <Link to='/RegisterForm'>
          <div className='register-container'>
            <p className='register'>Register</p>
          </div>
        </Link>
      </>
    )
  }
}

export default Register
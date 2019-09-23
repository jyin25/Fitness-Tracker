import React from 'react'
import {Link} from 'react-router-dom'
import './Register.css'

class Register extends React.Component {

  render() {
    return (
      <> 
        <Link to='/Register'>
          <div className='register-container'>
            <h1 className='register'>Register</h1>
          </div>
        </Link>
      </>
    )
  }
}

export default Register
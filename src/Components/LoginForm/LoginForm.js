import React from 'react'
import Header from '../Header/Header'
import Login from '../Routes/LoginPage/LoginPage'
import './LoginForm.css'
import Register from '../Routes/Register/Register'

class LoginForm extends React.Component {

  render() {
    return (
      <> 
        <Header></Header>
          <section className='background'>
          <Register></Register>            
          </section>

        <form>
          <label>
            Username
          </label>
          <input></input>
          <label>
            Password
          </label>
          <input></input>
          <input type='submit'></input>
        </form>
      </>
    )
  }
}

export default LoginForm
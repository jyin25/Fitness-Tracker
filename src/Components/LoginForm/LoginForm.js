import React from 'react'
import Header from '../Header/Header'
import Login from '../Routes/LoginPage/LoginPage'
import './LoginForm.css'
import Register from '../Routes/Register/Register'
import TokenService from '../../services/Token-service'
import AuthApiService from '../../services/auth-api-service'

class LoginForm extends React.Component {
  state = {error: null}

  handleFormSubmit = (e) => {
    e.preventDefault()
    const {user_name, password} = e.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
    .then(res => {
      user_name.value =''
      password.value=''
      TokenService.saveAuthToken(res.authToken)
    })
    .catch(res => {
      this.setState({error: res.error})
    })

  }

  render() {
    return (
      <> 
        <Header></Header>
          <section className='background'>
          <Register></Register>            
          </section>

        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          <label>
            Username
          </label>
          <input required name='user_name' className='loginForm_user_name'/>
          <label>
            Password
          </label>
          <input required type='password' name='password' className='loginForm_password'/>
          <button type='submit'>Login</button>
        </form>
      </>
    )
  }
}

export default LoginForm
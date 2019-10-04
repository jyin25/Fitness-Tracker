import React from 'react'
import Header from '../Header/Header'
import './LoginForm.css'
import TokenService from '../../services/Token-service'
import AuthApiService from '../../services/auth-api-service'
import FitContext from '../FitContext/FitContext'

class LoginForm extends React.Component {
  state = {error: null}

  static contextType = FitContext;

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  onLoginSuccess = () => {
    const {location, history} = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    const {user_name, password} = e.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
    .then(res => {
      this.context.saveUserName(user_name.value)
      user_name.value =''
      password.value=''
      TokenService.saveAuthToken(res.authToken)
      this.onLoginSuccess()
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
          </section>

        <form onSubmit={(e) => this.handleFormSubmit(e)} className='login-form'>
          <label className='login-label'>
            Username
          </label>
          <input required name='user_name' className='loginForm-input'/>
          <label className='login-label'>
            Password
          </label>
          <input required type='password' name='password' className='loginForm-input'/>
          <div className='submit-container'>
            <button className='login-submit' type='submit'>Login</button>
          </div>
        </form>
      </>
    )
  }
}

export default LoginForm
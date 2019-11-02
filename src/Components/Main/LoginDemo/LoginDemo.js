import React from 'react'
import {Link} from 'react-router-dom'
import TokenService from '../../../services/Token-service'
import AuthApiService from '../../../services/auth-api-service'
import FitContext from '../../FitContext/FitContext'
import config from '../../../config'
import './LoginDemo.css'
import logo from '../../../Images/icon.png'

class LoginDemo extends React.Component {

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
    const destination = (location.state || {}).from || '/user'
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
      user_name.value =''
      password.value=''
      TokenService.saveAuthToken(res.authToken)
      this.onLoginSuccess()
    })
    .catch(res => {
      this.setState({error: res.error})
    })

  }

  clickDemo = () => {
    TokenService.saveAuthToken(config.DEMO_TOKEN_KEY)
    this.onLoginSuccess()
  }

  render() {
    const error = this.state.error
    return (
      <>
      <div className='login-container'>
        <h1 className='heading-title'>Fit Tracker</h1>
        <img className='login-logo' src={logo} alt='logo'></img>
      </div>
        {error? <p className='error-message'>{error}</p>: null}
        <div className='login-form-container'>
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
              <button className='register-submit'><Link to='/RegisterForm'>Register</Link></button>
              <button className='demo-submit' onClick={() => this.clickDemo()}>Demo</button>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default LoginDemo;
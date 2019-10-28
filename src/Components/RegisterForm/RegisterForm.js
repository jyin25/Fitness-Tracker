import React from 'react'
import Header from '../Header/Header'
import AuthApiService from '../../services/auth-api-service'
import './RegisterForm.css'

class RegisterForm extends React.Component {

  state = {
    error: null,
    inputPw: '',
  }

  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  onRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  handleRegisterSubmit = (e) => {
    e.preventDefault()
    const {full_name, user_name, password} = e.target

    AuthApiService.postUser({
      full_name: full_name.value,
      user_name: user_name.value,
      password: password.value,
    })
    .then(user => {
      full_name.value = ''
      user_name.value=''
      password.value=''
      this.onRegistrationSuccess()
    })
    .catch(res => {
      this.setState({error: res.error})
    })

  }

  password = (e) => {
    this.setState({inputPw: e.target.value})
  }

  render() {
    const inputPw = this.state.inputPw
    const error = this.state.error
    return (
      <> 
        <Header></Header>
          <section className='background'></section>

        {error? <p className='error-message'>{error}</p>: null}
        <div className='login-form-container'> 
          <form onSubmit={(e) => this.handleRegisterSubmit(e)} className='register-form'>
            <label className='register-label'>
              Full name
            </label>
            <input required name='full_name' type='text' className='register-input'/>
            <label className='register-label'>
              User name
            </label >
            <input required type='text' name='user_name' className='register-input'/>
            <label className='register-label'>
              Password
            </label>
            <input required type='password' name='password' className='register-input' onChange={(e) => this.password(e)}/>
            {inputPw? <p className='pw-message'>Password must be longer than 8 characters and contain 1 upper case, lower case, number and special character</p>: null}
            <div className='submit-container'>
              <button type='submit'>Register</button>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default RegisterForm
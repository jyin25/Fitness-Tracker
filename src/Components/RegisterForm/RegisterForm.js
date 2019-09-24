import React from 'react'
import Header from '../Header/Header'
import Login from '../Routes/LoginPage/LoginPage'
import AuthApiService from '../../services/auth-api-service'

class RegisterForm extends React.Component {

  state = {error: null}
  
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
          <Login></Login>            
          </section>

        <form onSubmit={(e) => this.handleRegisterSubmit(e)}>
          <label>
            Full name
          </label>
          <input required name='full_name' type='text' className='register_fullname'/>
          <label>
            User name
          </label>
          <input required type='text' name='user_name' className='register_username'/>
          <label>
            Password
          </label>
          <input required type='password' name='password' className='register_password'/>
          <button type='submit'>Register</button>
        </form>
      </>
    )
  }
}

export default RegisterForm
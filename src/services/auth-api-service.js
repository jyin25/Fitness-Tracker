const AuthApiService = {
  postLogin(user_name, password) {
    return fetch(`https://fit-database.herokuapp.com/api/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user_name, password),
    })
    .then(res => 
      (!res.ok)?
        res.json().then(e => Promise.reject(e))
        :res.json()
      )
  },
  postUser(full_name, user_name, password) {
    return fetch('https://fit-database.herokuapp.com/api/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(full_name, user_name, password),
    })
    .then(res => 
      (!res.ok)?
        res.json().then(e => Promise.reject(e)):
        res.json()
        )
  },
}

export default AuthApiService
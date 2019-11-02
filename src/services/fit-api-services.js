import config from '../config'
import TokenService from './Token-service'

const FitApiServices = {
  getWeeks() {
    return fetch(`${config.API_ENDPOINT}/weeks`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json().then(data => data)
      })
  }
}

export default FitApiServices;
import React from 'react';
import FitContext from '../FitContext/FitContext';
import {Link, Route} from 'react-router-dom';
import Days from '../Days/Days'
import './weeks.css'
import FitApiServices from '../../services/fit-api-services'
import config from '../../config'
import TokenService from '../../services/Token-service'

class Weeks extends React.Component {
  static contextType = FitContext;

  

  componentDidMount = () => {
    fetch (`${config.API_ENDPOINT}/weeks`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json().then(weeks => this.context.setWeeks(weeks))
      })
  }

  renderWeeks = (weeks, selectedWeek) => {
    const render = weeks.map(data => {
      return (
        <>
          <Link to={`/Preset/week${data.week_number}`}>
            <h2 className='week-container'
              onClick={()=> this.context.selectWeek(data)}>week {data.week_number}</h2>
          </Link>
        </>
      )
    })
    return render;
  }


  render() {
    const {weeks, selectedWeek} = this.context
    
    const firstSixWeeks = weeks.slice(0, 6)
    const secondSixWeeks = weeks.slice(6, 12)

    return (
      <section className='weeks-container'>
        <div className='left-column'>
          <ul className='column-container'>
            <li className='list-container'>
              {this.renderWeeks(firstSixWeeks, selectedWeek)}
            </li>
          </ul>
        </div>
        <div className='right-column'>
          <ul className='column-container'>
            <li className='list-container'>
              {this.renderWeeks(secondSixWeeks, selectedWeek)}
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Weeks;
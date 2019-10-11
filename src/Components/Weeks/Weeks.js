import React from 'react';
import FitContext from '../FitContext/FitContext';
import {Link} from 'react-router-dom';
import './weeks.css'
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

  renderWeeks = (weeks) => {
    const render = weeks.map((data, index) => {
      return (
        <>
          <Link to={`/Preset/week${data.week_number}`} key={index}>
            <h2 className='week-container' key={index}
              onClick={()=> this.context.selectWeek(data)}>week {data.week_number}</h2>
          </Link>
        </>
      )
    })
    return render;
  }

  render() {
    const {weeks} = this.context

    const secondSixWeeks = weeks.filter(data => data.week_number%2 === 0)
    const firstSixWeeks = weeks.filter(data => data.week_number%2)

    return (
      <section className='weeks-container'>
        <div className='left-column'>
          <ul className='column-container'>
            <li className='list-container' key='list-container-1'>
              {this.renderWeeks(firstSixWeeks)}
            </li>
          </ul>
        </div>
        <div className='right-column'>
          <ul className='column-container'>
            <li className='list-container' key='list-container-2'>
              {this.renderWeeks(secondSixWeeks)}
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Weeks;
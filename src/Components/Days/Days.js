import React from 'react';
import FitContext from '../FitContext/FitContext';
import {Link} from 'react-router-dom';
import './Days.css'
import Header from '../Header/Header'
import config from '../../config'
import TokenService from '../../services/Token-service'

class Days extends React.Component {
  static contextType = FitContext;

  componentDidMount = () => {
    fetch (`${config.API_ENDPOINT}/weeks/${this.context.selectedWeek.id}`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json().then(data => this.context.setDays(data))
      })
  }
  
  renderDays (days) {
    const render = days.map((data, index) => {
      return (
        <Link key={index} to={`/week${this.context.selectedWeek.value}/${data.day_name}`}>
          <h3 key={index} className='day-container' onClick={() => this.context.selectDay(data)}>{data.day_name}</h3>
        </Link>
      )
    })
    return render;
  }
  
  
  render() {
    const {selectedWeek, days} = this.context
    return (
      <>
        <Header></Header>
        <section className='background'></section>
        {selectedWeek.value && 
        <header className='day-title-container'>
          <h1 className='title'>Days</h1>
        </header>}
        <section className='days-container'>
          {this.renderDays(days)}
        </section>
      </>
    )
  }
}

export default Days;
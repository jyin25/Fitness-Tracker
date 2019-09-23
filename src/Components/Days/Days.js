import React from 'react';
import FitContext from '../FitContext/FitContext';
import {Link} from 'react-router-dom';
import Nav from '../Nav/Nav'
import './Days.css'
import Header from '../Header/Header'

class Days extends React.Component {
  static contextType = FitContext;
  
  renderDays (days) {
    const render = days.map(data => {
      return (
        <Link to={`/week${this.context.selectedWeek.value}/${data}`}>
          <h3 className='day-container' onClick={() => this.context.selectDay(data)}>{data}</h3>
        </Link>
      )
    })
    return render;
  }
  
  
  render() {
    const {days, selectedWeek} = this.context
    console.log(this.context.selectedWeek)
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
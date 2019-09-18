import React from 'react';
import FitContext from '../FitContext/FitContext';
import {Link, Route} from 'react-router-dom';
import Days from '../Days/Days'
import './weeks.css'

class Weeks extends React.Component {
  static contextType = FitContext;

  constructor() {
    super()
    this.state={
      hidden: false
    }
  }

  componentDidMount = () => {
    this.setState({
      hidden: false
    })
  }

  renderWeeks = (weeks, selectedWeek) => {
    console.log(weeks)
    const render = weeks.map(data => {
      return (
        <>
          <Link to={`/Beginner/week${data}`}>
            <h2 className='week-container'
              onClick={()=> this.context.selectWeek(data)}>week {data}</h2>
          </Link>
        </>
      )
    })
    return render;
  }


  render() {
    const style = (this.state.hidden? {display: 'none'}: {})
    const {weeksRight, weeksLeft, selectedWeek} = this.context
    return (
      <section className='weeks-container'>
        <div className='left-column'>
          <ul className='column-container'>
            <li className='list-container'>
              {this.renderWeeks(weeksLeft, selectedWeek)}
            </li>
          </ul>
        </div>
        <div className='right-column'>
          <ul className='column-container'>
            <li className='list-container'>
              {this.renderWeeks(weeksRight, selectedWeek)}
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Weeks;
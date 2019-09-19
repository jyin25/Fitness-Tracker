import React from 'react';
import FitContext from '../FitContext/FitContext';
import {Link, Route} from 'react-router-dom';
import Days from '../Days/Days'

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
    console.log(selectedWeek.isHidden)
    const render = weeks.map(data => {
      return (
        <>
          <Link to={`/Preset/week${data}`}>
            <h2 
              onClick={()=> this.context.selectWeek(data)}>week {data}</h2>
          </Link>
        </>
      )
    })
    return render;
  }


  render() {
    const style = (this.state.hidden? {display: 'none'}: {})
    const {weeks, selectedWeek} = this.context
    console.log(selectedWeek.value)
    return (
      <>
        <div>
          <ul>
            <li>
              {this.renderWeeks(weeks, selectedWeek)}
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default Weeks;
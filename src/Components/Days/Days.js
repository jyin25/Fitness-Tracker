import React from 'react';
import FitContext from '../FitContext/FitContext';
import {Link} from 'react-router-dom';

class Days extends React.Component {
  static contextType = FitContext;
  
  renderDays (days) {
    const render = days.map(data => {
      return (
        <Link to={`/week${this.context.selectedWeek.value}/${data}`}>
          <h3 onClick={() => this.context.selectDay(data)}>{data}</h3>
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
        {selectedWeek.value && <h2>Week {selectedWeek.value}</h2>}
        {this.renderDays(days)}
      </>
    )
  }
}

export default Days;
import React from 'react';
import FitContext from '../FitContext/FitContext';
import {Link, Route} from 'react-router-dom';
import Weeks from '../Weeks/Weeks'
import Days from '../Days/Days'

class Beginner extends React.Component {
  static contextType = FitContext;

  render() {
    const {weeks, selectedWeek} = this.context
    const {isHidden} = this.context.selectedWeek
    return (
      <>
        <header>
          <h1>Preset List</h1>
        </header>
        <Weeks></Weeks>
      </>
    )
  }
}

export default Beginner;
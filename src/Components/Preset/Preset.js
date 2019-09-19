import React from 'react';
import FitContext from '../FitContext/FitContext';
import {Link, Route} from 'react-router-dom';
import Weeks from '../Weeks/Weeks'
import Days from '../Days/Days'
import Nav from '../Nav/Nav'
import './preSet.css'

class Preset extends React.Component {
  static contextType = FitContext;

  render() {
    const {weeks, selectedWeek} = this.context
    const {isHidden} = this.context.selectedWeek
    return (
      <>
        <Nav></Nav>
        <header className='week-title-container'>
          <h1 className='title'>Weeks</h1>
        </header>
        <Weeks></Weeks>
      </>
    )
  }
}

export default Preset;
import React from 'react';
import FitContext from '../FitContext/FitContext';
import Weeks from '../Weeks/Weeks'
import './preSet.css'
import Header from '../Header/Header'

class Preset extends React.Component {
  static contextType = FitContext;

  render() {

    return (
      <>
        <Header></Header>
        <section className='background'></section>
        <header className='week-title-container'>
          <h1 className='title'>Weeks</h1>
        </header>
        <Weeks></Weeks>
      </>
    )
  }
}

export default Preset;
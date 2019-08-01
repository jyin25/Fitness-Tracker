import React from 'react';
import {Route, Link} from 'react-router-dom';
import './Main.css'

function Main() {
  return (
    <div className='main-page-container'>
      <nav className='main-page-split beginner-pic'>
        <Link to='/Beginner'><p className='main-text'>Preset List</p></Link>
      </nav>
      <nav className='main-page-split make-pic'>
        <Link to='/Intermediate'><p className='main-text'>Make your own</p></Link>
      </nav>
      <nav className='main-page-split data-graph'>
        <Link to='/Advanced'><p className='main-text'>Advanced</p></Link>
      </nav>
    </div>
  )
}

export default Main;
import React from 'react';
import {Route, Link} from 'react-router-dom';
import './Nav.css'

function Nav() {
  return (
    <div className='nav-header'>
      <nav>
        <Link to='/PreSet'><p className='nav-text'>Preset List</p></Link>
        <Link to='/Self'><p className='nav-text'>Make your own</p></Link>
        <Link to='/Progress'><p className='nav-text'>Advanced</p></Link>
      </nav>
      <section>
        
      </section>
    </div>
  )
}

export default Nav;
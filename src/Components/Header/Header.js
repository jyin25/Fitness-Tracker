import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

class Header extends React.Component {

  render() {
    return (
      <> 
        <header className='heading-container'>
          <Link to='/'><h1 className='heading-title'>Fit Tracker</h1></Link>
        </header>
      </>
    )
  }
}

export default Header
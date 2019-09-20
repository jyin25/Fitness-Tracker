import React from 'react'
import './Header.css'

class Header extends React.Component {

  render() {
    return (
      <> 
        <header className='heading-container'>
          <h1 className='heading-title'>Fit Tracker</h1>
        </header>
      </>
    )
  }
}

export default Header
import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'

class Nav extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      onClick: false
    }
  }

  displayOptions = () => {
    return(
      <nav className='nav-box'>
        <Link to='/PreSet'><p className='nav-text'>Preset</p></Link>
        <Link to='/Tracking'><p className='nav-text'>Custom</p></Link>
        <Link to='/Progress'><p className='nav-text'>Progress</p></Link>
      </nav>
    )
  }

  handleClick = () => {
    this.setState({onClick: !this.state.onClick})
  }

  render() {

    const clickEvent = this.state.onClick

    return (
      <div>
        <p className='nav-menu' onClick={() => this.handleClick()}>☰</p>
        {clickEvent? this.displayOptions(): null}
      </div>
    )
  }
}

export default Nav;
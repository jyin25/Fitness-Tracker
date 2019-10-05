import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../Header/Header'
import './Progress.css'

class ProgressMain extends React.Component {


  render() {

    return (
      <>
        <Header></Header>
        <section className='background'></section>
        <Link to='/CustomProgress'><p className='progress-title'>Custom List</p></Link>
        <Link to='/PresetProgress'><p className='progress-title'>Preset List</p></Link>
      </>
    )
  }
}

export default ProgressMain;


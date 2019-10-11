import React from 'react';
import {Link} from 'react-router-dom';
import './Main.css'
import {FaRegChartBar} from "react-icons/fa";
import {FaDumbbell} from "react-icons/fa";
import {FaRegListAlt} from "react-icons/fa";
import Header from '../Header/Header'

function Main() {
  return (
    <>
      <Header></Header>
      <section className='background'>
      </section>
      <section className='nav-icons-container'>
        <nav className='icon-container'>
          <Link to='/PreSet'><FaDumbbell className='icon preset-icon'/></Link>
          <p>Preset workout</p>
        </nav>
        <nav className='icon-container'>
          <Link to='/Tracking'><FaRegListAlt className='icon custom-icon'/></Link>
          <p>Custom tracking</p>
        </nav>
        <nav className='icon-container'>
          <Link to='/progress'><FaRegChartBar className='icon progress-icon'/></Link>
          <p>Track progress</p>
        </nav>

      </section>



    </>
  )
}

export default Main;
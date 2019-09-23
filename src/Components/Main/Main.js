import React from 'react';
import {Route, Link} from 'react-router-dom';
import './Main.css'
import {FaRegChartBar} from "react-icons/fa";
import {FaDumbbell} from "react-icons/fa";
import {FaRegListAlt} from "react-icons/fa";
import {FaPowerOff} from "react-icons/fa";
import LoginPage from '../Routes/LoginPage/LoginPage'
import Header from '../Header/Header'
import Register from '../Routes/Register/Register'

function Main() {
  return (

    <>
      <Header></Header>
      <section className='background'>
        <LoginPage></LoginPage>
        <Register></Register>
      </section>
      <section className='nav-icons-container'>
        <nav className='icon-container'>
          <Link to='/PreSet'><FaDumbbell className='icon'/></Link>
          <p>Preset workout</p>
        </nav>
        <nav className='icon-container'>
          <Link to='/Tracking'><FaRegListAlt className='icon'/></Link>
          <p>Custom tracking</p>
        </nav>
        <nav className='icon-container'>
          <Link to='/progress'><FaRegChartBar className='icon'/></Link>
          <p>Progress</p>
        </nav>

      </section>
    


    </>
  )
}

export default Main;
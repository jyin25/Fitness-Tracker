import React from 'react'
import './SearchResult.css'
import {FaSearch} from "react-icons/fa"
import Store from '../../Store'
import FitContext from '../FitContext/FitContext'
import Search from '../Search/Search'
import Header from '../Header/Header'

class SetTracking extends React.Component {
  renderExcerciseList = () => [
    
  ]
  
  render() {

    return (
      <>
        <Header></Header>
        <Search></Search>
        {this.renderExcerciseList()}
      </>
    )
  }
}

export default SetTracking
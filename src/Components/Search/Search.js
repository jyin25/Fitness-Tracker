import React from 'react'
import './Search.css'
import {FaSearch} from "react-icons/fa"
import Store from '../../Store'
import FitContext from '../FitContext/FitContext'
import {Link} from 'react-router-dom'

class Search extends React.Component {
  static contextType = FitContext;

  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
    }
  }

  handleSearchText = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  // handleSearch = (e, searchResult) => {
  //   console.log(e)
  //   e.preventDefault()
  //   const filteredExercises = Store.exercises.filter(searchTerm => searchTerm.includes(this.state.searchTerm))
  //   console.log(filteredExercises)
  // }

  handleClick = (e, searchResult) => {
    //should be searching the exercise state from componentdidmount

    const filteredExercises = Store.exercises.filter(searchTerm => Object.keys(searchTerm).join().includes(this.state.searchTerm))
    searchResult(filteredExercises)
  }

  render() {
    const {searchResult} = this.context
    return (
      <> 
        <section className='background'>
          <form className='search' onSubmit={(e) => this.handleSearch(e, searchResult)}>
            <input type='text' placeholder='Search..' value={this.state.searchTerm} onChange={(e) => this.handleSearchText(e)}></input>
            <Link to='/Search_result'><button type='submit' onClick={(e) => this.handleClick(e, searchResult)}><FaSearch /></button></Link>
          </form>
        </section>
      </>
    )
  }
}

export default Search
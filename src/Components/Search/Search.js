import React from 'react'
import './Search.css'
import {FaSearch} from "react-icons/fa"
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

  handleClick = (e, searchResult) => {
    let filteredExercises = this.context.allExercises.filter(data => data.exercise_name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    searchResult(filteredExercises)
  }

  render() {
    const {searchResult} = this.context
    return (
      <> 
        <section className='background'>
          <form className='search' onSubmit={(e) => this.handleSearch(e, searchResult)}>
            <input className='search-bar' type='text' placeholder='Search..' value={this.state.searchTerm} onChange={(e) => this.handleSearchText(e)}></input>
            <Link to='/Search_result'><button className='search-button' type='submit' onClick={(e) => this.handleClick(e, searchResult)}><FaSearch className='search-icon'/></button></Link>
          </form>
        </section>
      </>
    )
  }
}

export default Search

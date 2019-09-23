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


  handleSearch = (e) => {
    e.preventDefault()
    const filteredExercises = Store.exercises.filter(searchTerm => searchTerm.includes(this.state.searchTerm))
    this.context.searchResult(filteredExercises)
  }

  handleSearchText = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  render() {

    return (
      <> 
        <section className='background'>
          <form className='search' onSubmit={(e) => this.handleSearch(e)}>
            <input type='text' placeholder='Search..' value={this.state.searchTerm} onChange={(e) => this.handleSearchText(e)}></input>
            <Link to='/Search_result'><button type='submit'><FaSearch /></button></Link>
          </form>
        </section>
      </>
    )
  }
}

export default Search
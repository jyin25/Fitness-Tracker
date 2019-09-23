import React from 'react';
import FitContext from '../../FitContext/FitContext'
import Header from '../../Header/Header'
import Search from '../../Search/Search'
import store from '../../../Store'

class CustomList extends React.Component {
  static contextType = FitContext;

  constructor(props) {
    super(props)
    this.state = {
      customList: [],
    }
  }

  componentDidMount = () => {
    //fetch request to get custom list
    this.setState({
      customList: store.exercises
    })

  }
  
  getCustomList = () => {
    console.log(this.state.customList)
    return this.state.customList.map(data => {
      return (
        <li>{data}</li>
      )
    })

  }

  render() {
    console.log(this.context.muscleGroupId)
    return (
      <>
        <Header></Header>
        <Search></Search>
        <section>
          <h1>Custom List</h1>
          {this.getCustomList()}
        </section>
      </>
    )
  }
}
export default CustomList;
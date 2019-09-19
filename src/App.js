import React from 'react';
import './App.css';
import STORE from './Store';
import Preset from './Components/Preset/Preset';
import {Route, Link} from 'react-router-dom';
import FitContext from './Components/FitContext/FitContext';
import Days from './Components/Days/Days'
import Exercise from './Components/Exercise/Exercise'
import Progress from './Components/Progress/Progress'
import Main from './Components/Main/Main';
import Self from './Components/Self/Self';
import SelfMain from './Components/Self/SelfMain/SelfMain'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      STORE,
      weeks: this.props.store.weeks,
      days: this.props.store.days,
      selectedWeek: {
        value: '',
        week: ''
      },
      selectedDay: '',
      muscleGroup: {
        id: '',
        name: ''
      }
    }
  }

  selectWeek = (data) => {
    console.log(data)
    if(data >= 1 && data <= 4) {
      this.setState({selectedWeek: {week: 'week1', value: data}})
    } else if (data >= 5 && data <=8) {
      this.setState({selectedWeek: {week: 'week5', value: data}})
    } else {
      this.setState({selectedWeek: {week: 'week9', value: data}})
    }
  }

  selectDay = (data) => {
    this.setState({selectedDay: data})
  }

  setGroup = (id, name) => {
    this.setState({
      muscleGroup: {
        id,
        name
      }
    })
  }

  componentWillMount() {
    fetch("http://wger.de/api/v2/exercise/", {
      headers: {
        'Authorization': 'Token c562f5998580918b7ce6aa86f6478415a2e69bca',
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }


  render () {
    const contextValue = {
      weeks: this.state.weeks,
      days: this.state.days,
      selectWeek: this.selectWeek,
      selectedWeek: this.state.selectedWeek,
      selectDay: this.selectDay,
      preSetExercises: this.state.STORE,
      selectedDay: this.state.selectedDay,
      setGroup: this.setGroup,
      muscleGroupId: this.state.muscleGroup.id
    }

    return (
      <div>
        <FitContext.Provider value={contextValue}>
          <Route
            exact path='/'
            component={Main}></Route>
          <Route
            exact path='/Preset'
            component={Preset}></Route>
          <Route
            path='/Self'
            component={Self}></Route>
          <Route
            path='/Progress'
            component={Progress}></Route>
          <Route
            exact path={`/Preset/week${this.state.selectedWeek.value}`}
            component={Days}>
          </Route>
          <Route
            exact path={`/week${this.state.selectedWeek.value}/${this.state.selectedDay}`}
            component={Exercise}>
          </Route>
          <Route
            path={`/${this.state.muscleGroup.name}`}
            component={SelfMain}></Route>
        </FitContext.Provider>
      </div>

    )
  }
}

export default App;

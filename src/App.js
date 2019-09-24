import React from 'react'
import './App.css'
import STORE from './Store'
import Preset from './Components/Preset/Preset'
import {Route, Switch} from 'react-router-dom'
import FitContext from './Components/FitContext/FitContext'
import Days from './Components/Days/Days'
import Exercise from './Components/Exercise/Exercise'
import Progress from './Components/Progress/Progress'
import Main from './Components/Main/Main'
import MuscleGroup from './Components/Self/MuscleGroup'
import DisplayExercisesMuscle from './Components/Self/Display_exercises_muscle/DisplayExercisesMuscle'
import DisplayExercise from './Components/DisplayExercise/DisplayExercise'
import LoginForm from './Components/LoginForm/LoginForm'
import Tracking from './Components/Tracking/Tracking'
import SearchResult from './Components/SearchResult/SearchResult'
import CustomList from './Components/Self/CustomList/CustomList'
import RegisterForm from './Components/RegisterForm/RegisterForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      STORE,
      weeksLeft: this.props.store.weeksLeft,
      weeksRight: this.props.store.weeksRight,
      days: this.props.store.days,
      selectedWeek: {
        value: '',
        week: ''
      },
      selectedDay: '',
      muscleGroup: '',
      muscleGroupData: [],
      selectedExercise: '',
      pr: {
        Bench_Press: {
          week1: [],
          week2: '',
          week3: ''
        },
        leg_press: {
          week1: '',
          week2: '',
          week3: ''
        },
      },
      filteredExercises: [],
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

  selectMuscleGroup = (data) => {
    const name = Object.keys(data).join()
    this.setState({
      muscleGroup: name
    })
    this.setState({
      muscleGroupData: data
    })
  }

  selectExcercise = (combineName, name, index, exerciseArr) => {
    this.setState({selectedExercise: {
      combineName: combineName,
      name: name,
      index: index,
      exerciseArr: exerciseArr
    }})
  }

  storePrPerWeek = (pr, selectedWeek, exerciseName, selectedDay) => {
    let newWeek = selectedWeek.week
    let newName = exerciseName.replace(/ /g,"_")
    let newPr = [pr]
    console.log(newPr)
    console.log(newName)
    this.setState((prevState, props) => ({
      pr: {
        ...prevState.pr,
        [newName]: {
          ...prevState.pr[newName],
          [newWeek]: [...prevState.pr[newName][newWeek], ...newPr]
        }
      }
    }))
  }

  searchResult = (data) => {
    this.setState({filteredExercises:data})
  }

  render () {
    const contextValue = {
      weeksLeft: this.state.weeksLeft,
      weeksRight: this.state.weeksRight,
      days: this.state.days,
      selectWeek: this.selectWeek,
      selectedWeek: this.state.selectedWeek,
      selectDay: this.selectDay,
      preSetExercises: this.state.STORE,
      selectedDay: this.state.selectedDay,
      selectMuscleGroup: this.selectMuscleGroup,
      selectExcercise: this.selectExcercise,
      selectedExercise: this.state.selectedExercise,
      storePrPerWeek: this.storePrPerWeek,
      graphData: this.state.pr.Bench_Press,
      searchResult: this.searchResult,
      filteredExercises: this.state.filteredExercises,
      selectedMuscleGroup: this.state.muscleGroup,
      muscleGroupData: this.state.muscleGroupData,
    }
    
    return (
      <div>
        <FitContext.Provider value={contextValue}>
          <Switch>
            <Route
              exact path='/'
              component={Main}/>
            <Route
              exact path='/PreSet'
              component={Preset}/>
            <Route
              exact path='/MuscleGroup'
              component={MuscleGroup}/>
            <Route
              path='/Progress'
              component={Progress}/>
            <Route
              exact path={`/Preset/week${this.state.selectedWeek.value}`}
              component={Days}/>
            
            <Route
              exact path={`/week${this.state.selectedWeek.value}/${this.state.selectedDay}`}
              component={Exercise}/>
            
            <Route 
              exact path={`/muscleGroup/${this.state.muscleGroup}`}
              component={DisplayExercisesMuscle}/>
            <Route
              exact path={`/${this.state.selectedExercise.combineName}`}
              component={DisplayExercise}/>
            <Route 
              exact path='/auth/Login'
              component={LoginForm}/>
            <Route           
              exact path='/Tracking'
              component={Tracking}/>
            <Route           
              exact path='/Search_result'
              component={SearchResult}/>
            <Route 
              exact path='/Customlist'
              component={CustomList}/>
            <Route 
              exact path='/RegisterForm'
              component={RegisterForm}/>
          </Switch>
        </FitContext.Provider>
      </div>

    )
  }
}

export default App;

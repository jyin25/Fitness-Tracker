import React from 'react'
import './App.css'
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
import CustomProgress from './Components/Progress/CustomProgress'
import PrivateRoute from './Components/Routes/PrivateRoute/PrivateRoute'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      preSetExercises: [],
      weeks: [],
      days: [],
      selectedWeek: {
        value: '',
        week: ''
      },
      selectedDay: '',
      muscleGroup: '',
      muscleGroupData: [],
      selectedExercise: {},
      filteredExercises: [],
      allExercises: [],
      selectedGroup: [],
      userName:'',
    }
  }

  setWeeks = weeks => {
    this.setState({weeks})
  }

  selectWeek = (data) => {
    console.log(data)
    this.setState({selectedWeek: {id: data.id, value: data.week_number}})

  }

  selectDay = (data) => {
    this.setState({selectedDay: {id: data.id, value: data.day_name}})
  }

  setDays = (days) => {
    this.setState({days})
  }

  getAllExercises = (allExercises) => {
    this.setState({allExercises})
  }

  setExercises = (preSetExercises) => {
    this.setState({preSetExercises})
  }

  selectExcercise = (newExerciseName, name, video, exercise_how_to, is_check) => {
    this.setState({selectedExercise: {
      newExerciseName: newExerciseName,
      name: name,
      video: video,
      howTo: exercise_how_to,
      isCheck: is_check
    }})
  }

  searchResult = (filteredExercises) => {
    this.setState({filteredExercises})
  }

  selectMuscleGroup = (selectedGroup) => {
    this.setState({selectedGroup})
  }

  saveUserName = (data) => {
    console.log(data)
    this.setState({userName: data})
  }

  render () {
    const contextValue = {
      saveUserName: this.saveUserName,
      userName: this.state.userName,
      getAllExercises: this.getAllExercises,
      selectedGroup: this.state.selectedGroup,
      allExercises: this.state.allExercises,
      setDays: this.setDays,
      setWeeks: this.setWeeks,
      weeks: this.state.weeks,
      days: this.state.days,
      preSetExercises: this.state.preSetExercises,
      setExercises: this.setExercises,
      selectWeek: this.selectWeek,
      selectedWeek: this.state.selectedWeek,
      selectDay: this.selectDay,
      selectedDay: this.state.selectedDay,
      selectMuscleGroup: this.selectMuscleGroup,
      selectExcercise: this.selectExcercise,
      selectedExercise: this.state.selectedExercise,
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
            <PrivateRoute
              exact path='/PreSet'
              component={Preset}/>
            <Route
              exact path='/MuscleGroup'
              component={MuscleGroup}/>
            <PrivateRoute
              exact path='/Progress'
              component={Progress}/>
            <Route
              exact path={`/Preset/week${this.state.selectedWeek.value}`}
              component={Days}/>
            
            <Route
              exact path={`/week${this.state.selectedWeek.value}/${this.state.selectedDay.value}`}
              component={Exercise}/>
            
            <Route 
              exact path={`/muscleGroup/${this.state.selectedGroup.muscle_name}`}
              component={DisplayExercisesMuscle}/>
            <Route
              exact path={`/${this.state.selectedExercise.name}`}
              component={DisplayExercise}/>
            <Route 
              exact path='/Login'
              component={LoginForm}/>
            <PrivateRoute           
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
            <Route 
              exact path='/CustomProgress'
              component={CustomProgress}/>
          </Switch>
        </FitContext.Provider>
      </div>

    )
  }
}

export default App;

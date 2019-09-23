import React from 'react'
import Nav from '../Nav/Nav'
import store from '../../Store'
import {Link} from 'react-router-dom'
import './MuscleGroup.css'
import FitContext from '../FitContext/FitContext'
import Header from '../Header/Header'
import Search from '../Search/Search'

class MuscleGroup extends React.Component {
  static contextType = FitContext;

  displayFirstGroup = (selectMuscleGroup) => {
    const muscleGroupArr = store.muscle_groups; //make api call to the muscle group
    const firstGroup = muscleGroupArr.slice(0, 5);

    return firstGroup.map(data => {
      const name = Object.keys(data)
      const imgLink = data[name].img
      return (
        <>
          <div>
            <li className='muscle-text'>{name}</li>
            <Link to={`/muscleGroup/${name}`}><img src={`${imgLink}`} className='muscle-container' onClick={() => selectMuscleGroup(data)}/></Link>
          </div>
        </>
      )
    })
  }

  displaySecondGroup = (selectMuscleGroup) => {
    const muscleGroupArr = store.muscle_groups;
    const secondGroup = muscleGroupArr.slice(5, muscleGroupArr.length);

    return secondGroup.map(data => {
      const name = Object.keys(data)
      const imgLink = data[name].img
      return (
        <>
          <div>
            <li className='muscle-text'>{name}</li>
            <Link to={`/muscleGroup/${name}`}><img src={`${imgLink}`} className='muscle-container' onClick={() => selectMuscleGroup(name)}/></Link>
          </div>
        </>
      )
    })
  }



  render() {
    const {selectMuscleGroup} = this.context;
    return (
      <>
        <Header></Header>
        <Search></Search>
        <section className='muscle-group'>
          <h1>Muscle Group</h1>
          <ul className="first-muscle-group">
            {this.displayFirstGroup(selectMuscleGroup)}
          </ul>
          <ul className="second-muscle-group">
            {this.displaySecondGroup(selectMuscleGroup)}
          </ul>
        </section>


      </>
    )
  }
}

export default MuscleGroup;
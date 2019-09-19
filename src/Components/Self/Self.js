import React from 'react'
import Nav from '../Nav/Nav'
import store from '../../Store'
import {Link} from 'react-router-dom'
import './Self.css'
import FitContext from '../FitContext/FitContext'


class Self extends React.Component {
  static contextType = FitContext;

  displayFirstGroup = (selectMuscleGroup) => {
    const muscleGroupArr = store.muscle_groups;
    const firstGroup = muscleGroupArr.slice(0, 5);
    return firstGroup.map(data => {
      return (
        <>
          <div>
            <li className='muscle-text'>{data}</li>
            <Link to={`/muscleGroup/${data}`}><li className='muscle-container' onClick={() => selectMuscleGroup(data)}></li></Link>
          </div>
        </>
      )
    })
  }

  displaySecondGroup = (selectMuscleGroup) => {
    const muscleGroupArr = store.muscle_groups;
    const secondGroup = muscleGroupArr.slice(5, muscleGroupArr.length);
    return secondGroup.map(data => {
      return (
        <>
          <div>
            <li className='muscle-text'>{data}</li>
            <Link><li className='muscle-container' onClick={() => selectMuscleGroup(data)}></li></Link>
          </div>
        </>
      )
    })
  }



  render() {
    const {selectMuscleGroup} = this.context;

    return (
      <>
        <Nav></Nav>
        <section className='muscle-group'>
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

export default Self;
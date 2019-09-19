import React from 'react'
import Nav from '../Nav/Nav'
import FitContext from '../FitContext/FitContext'

class DisplayExercise extends React.Component {

  static contextType = FitContext;

  renderExerciseInfo = (name, index, exerciseArr) => {
    const displayVideo = exerciseArr[index][name].video
    const displayDescription = exerciseArr[index][name].howTo
    return (
      <>
        <h1>{name}</h1>
        <iframe src={`${displayVideo}`}></iframe>
        <h2>Instructions</h2>
        <p>{displayDescription}</p>
      </>
    )
  }

  render() {
    const {combineName, name, index, exerciseArr} = this.context.selectedExercise
    return (
      <>
        <Nav></Nav>
        {this.renderExerciseInfo(name, index, exerciseArr)}
      </>
    )
  }
}

export default DisplayExercise
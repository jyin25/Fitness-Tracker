import React from 'react';
import FitContext from '../../FitContext/FitContext'

class SelfMain extends React.Component {
  static contextType = FitContext;

  //fetch api call from muscle gropu id
  
  render() {
    console.log(this.context.muscleGroupId)
    return (
      <>
      
        <p>sdfsdfsd</p>
      </>
    )
  }
}
export default SelfMain;
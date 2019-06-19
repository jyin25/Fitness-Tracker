import React from 'react';
import './App.css';
import Beginner from './Beginner/Beginner';
import Interm from './Intermediate/Intermediate';
import Advanced from './Advanced/Advanced';



class App extends React.Component {
  
  render () {
    const weeks = this.props.store.weeks;
    console.log(weeks);
    const days = this.props.store.days;
    return (
      <div>
        <Beginner weeks={weeks} days={days}/>
        <Interm weeks={weeks} days={days}/>
        <Advanced weeks={weeks} days={days}/>
      </div>

    )
  }
}

export default App;

import React from 'react';
import {Link, Route} from 'react-router-dom';
import FitContext from '../FitContext/FitContext';


class Self extends React.Component {
  static contextType = FitContext;

  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
      selectedMuscleId: ''
    }
  }

  componentDidMount = () => {
    fetch('http://wger.de/api/v2/muscle/')
      .then(res => {
        if(!res.ok) {
          alert('database down')
        }
        return res;
      })
      .then(res => res.json())
      .then(data => this.setState({exercises: data.results}))
  }

  selectMuscleGroup = (id, name) => {
    this.setState({
      selectedMuscleId:id
    });
    this.context.setGroup(id, name);
    console.log(this.context)
  }

  renderResults = () => {
    const render = this.state.exercises.map(data => {
      return (
        <>
          <Link to={`${data.name}`}>
            <h2 key={data.id} onClick={() => this.selectMuscleGroup(data.id, data.name)}>
              {data.name}
            </h2>
          </Link>
        </>
      )
    });
    return render;
  }

  render() {

    return (
        <div>
            <h1>Muscle Group</h1>
            {this.renderResults()}
        </div>
    )
  }
}

export default Self;
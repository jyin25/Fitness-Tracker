import React from 'react'
import './Muscle.css'
import Nav from '../../Nav/Nav'

class Muscle extends React.Component {
  selection() {
    return (
      <div className='muscle-day-selection-container'>
        <div className='muscle-day-selection'>
          <p>Mon</p>
          <input type='checkbox'></input>
        </div>

        <div className='muscle-day-selection'>
          <p>Tues</p>
          <input type='checkbox'></input>
        </div>

        <div className='muscle-day-selection'>
          <p>Wed</p>
          <input type='checkbox'></input>
        </div>

        <div className='muscle-day-selection'>
          <p>Thurs</p>
          <input type='checkbox'></input>
        </div>
        <div className='muscle-day-selection'>
          <p>Fri</p>
          <input type='checkbox'></input>
        </div>
        <div className='muscle-day-selection'>
          <p>Sat</p>
          <input type='checkbox'></input>
        </div>
        <div className='muscle-day-selection'>
          <p>Sun</p>
          <input type='checkbox'></input>
        </div>
    </div>
    )
  }

  weekSelection() {
    return (
      <>  
        <select>
          <option value='1'>week 1</option>
          <option value='2'>week 2</option>
          <option value='3'>week 3</option>
          <option value='4'>week 4</option>
        </select>
      </>
    )
  }

  render() {
    return (
      <>
        <Nav></Nav>
        <div className='muscle-display-container'>
          <div>
            <ul>
                <li className='muscle-list'>
                  <div className='muscle-display'>
                    <div>
                      <p>chest press</p>
                      {this.weekSelection()}
                    </div>
                    {this.selection()}
                  </div>
                </li>
                <li className='muscle-list'>
                  <div className='muscle-display'>
                    <div>
                      <p>chest press</p>
                      {this.weekSelection()}
                    </div>
                    {this.selection()}
                  </div>
                </li>                
                <li className='muscle-list'>
                  <div className='muscle-display'>
                    <div>
                      <p>chest press</p>
                      {this.weekSelection()}
                    </div>
                    {this.selection()}
                  </div>
                </li>
            </ul>
          </div>

        </div>

      </>
    )
  }
}

export default Muscle;
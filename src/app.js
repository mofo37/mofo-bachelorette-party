import React, { Component } from 'react';
import Clock from './clock.js';
import './app.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deadline: 'November 9, 2018',
      newDeadline: ''
    }
  }

  changeDeadline() {
   this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return (
      <div className='App'>
        <h1 className='App-title'>Countdown to Mofo’s Bachelorette Party</h1>
        <Clock 
          deadline={this.state.deadline}
        />
        {/*<Form inline>
          <FormControl 
            className='Deadline-input'
            placeholder='new date'
            onChange={event => this.setState({newDeadline:event.target.value})}
          />
          <Button onClick={()=> this.changeDeadline()}>Submit</Button>
        </Form>*/}
      </div>
    )
  }
}

export default App;
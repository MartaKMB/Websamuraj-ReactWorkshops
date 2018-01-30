import React, { Component } from 'react';
import './App.css';
import AppListDate from './AppListDate';

class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      times: [],
      counter: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // nawiasy okrągłe to inf dla interpretera, że { to obiekt a nie funkcia, ( - oznacza return
    this.setState(prevState => ({
      counter: ++prevState.counter,
      times: [...prevState.times, new Date()]
    }));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Kliknij i zobacz godzinę</button>

        <p>ilość kliknięć: {this.state.counter}</p>
        <AppListDate times={this.state.times}/>
      </div>
    );
  }
}

export default App;

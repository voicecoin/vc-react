import React, { Component } from 'react';

//components
import Home from './containers/Home/Home'
//style
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;

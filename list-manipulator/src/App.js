import React, { Component } from 'react';
import './App.css';
import Manipulator from './components/Manipulator'

class App extends Component {

  constructor(props){
    super(props);
    this.manipulator = new Manipulator(); 
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center">Manipulate List</h2>
          <Manipulator />
      </div>
    );
  }
}

export default App;

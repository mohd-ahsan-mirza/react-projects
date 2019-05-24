import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Compare from './components/Compare'

function App() {
  return (
    <div className="container">
      <h2 className="text-center">Compare Lists</h2>
        <Compare />
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import LnLogo from './components/LnLogo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LnLogo />
      </div>
    );
  }
}

export default App;

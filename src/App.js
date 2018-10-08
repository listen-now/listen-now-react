import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.less';

import Logo from './components/Logo';
import Search from './components/Search';
import Panel from './components/Panel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Search />
        <Panel />
      </div>
    );
  }
}

export default App;

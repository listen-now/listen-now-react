import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.less';

import Logo from './components/Logo';
import Search from './components/Search';
import Panel from './components/Panel';
import Player from './components/Player';

const mockUserInfo = {
  avatar:
    'http://www.ghost64.com/qqtupian/zixunImg/local/2016/11/25/14800673277815.jpg',
  username: '乔巴'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Search />
        <Panel />
        <Player />
      </div>
    );
  }
}

export default App;

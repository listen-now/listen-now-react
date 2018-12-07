import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.less';

import ActinBar from './components/ActionBar';

import Home from './pages/Home';
import SongList from './pages/SongList';
import Search from './pages/Search';
import Enjoy from './pages/Enjoy';
import NotFound from './pages/NotFound';

const mockUserInfo = {
  avatar:
    'http://www.ghost64.com/qqtupian/zixunImg/local/2016/11/25/14800673277815.jpg',
  username: '乔巴'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <ActinBar />

        <div className="app-router">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/song-list" component={SongList} />
              <Route path="/search" component={Search} />
              <Route path="/enjoy" component={Enjoy} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;

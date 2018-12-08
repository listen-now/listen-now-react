import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.less';

import ActinBar from './components/ActionBar';

import Home from './pages/Home';
import SongList from './pages/SongList';
import Search from './pages/Search';
import Enjoy from './pages/Enjoy';
import NotFound from './pages/NotFound';

import { hasToken, setItem } from './util/util';
import { getBeforehandToken, getToken, getHotSongList } from './util/api';

import message from 'antd/lib/message';
import 'antd/lib/message/style/css';

class App extends Component {
  componentDidMount = async () => {
    // 无长效 token
    if (!hasToken()) {
      await this.getToken();
    }
    // 获取热门歌单
    this.getHotSongList();
  };

  componentWillUnmount = () => {
    this.p1.cancel();
    this.p2.cancel();
  };

  getToken = async () => {
    // 获取预 token
    this.p1 = getBeforehandToken();
    let res;
    try {
      res = await this.p1.promise;
    } catch (err) {
      return message.error(err.message);
    }
    const tokenMessage = res.token_message;
    if (!tokenMessage) {
      return message.error('获取预 token 失败');
    }
    const token = tokenMessage.substring(2, tokenMessage.length - 1);

    // 获取长效 token
    this.p2 = getToken(1, token);
    try {
      res = await this.p2.promise;
    } catch (err) {
      return message.error(err.message);
    }
    setItem('token', token);
  };

  getHotSongList = async () => {
    let res;
    this.p3 = getHotSongList();
    try {
      res = await this.p3.promise;
    } catch (err) {
      return message.error(err.message);
    }
    console.log('res:', res);
  };

  render() {
    return (
      <div className="app">
        <div className="app-action-bar">
          <ActinBar />
        </div>

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

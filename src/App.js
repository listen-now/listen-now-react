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
import platform from './util/platform';
import { getBeforehandToken, getToken, search } from './util/api';

import message from 'antd/lib/message';
import 'antd/lib/message/style/css';

class App extends Component {
  componentDidMount = () => {
    // 无长效 token
    if (!hasToken()) {
      this.getToken();
    }
  };

  componentWillUnmount = () => {
    this.getBeforehandToken.cancel();
    this.getToken.cancel();
  };

  getToken = async () => {
    // 获取预 token
    this.getBeforehandToken = getBeforehandToken();
    let res;
    try {
      res = await this.getBeforehandToken.promise;
    } catch (err) {
      return message.error(err.message);
    }
    const tokenMessage = res.token_message;
    if (!tokenMessage) {
      return message.error('获取预 token 失败');
    }
    const token = tokenMessage.substring(2, tokenMessage.length - 1);

    // 获取长效 token
    this.getToken = getToken(1, token);
    try {
      res = await this.getToken.promise;
    } catch (err) {
      return message.error(err.message);
    }
    setItem('token', token);
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

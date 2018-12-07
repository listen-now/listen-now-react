import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ActionBar.less';

import Logo from '../Logo';
import Search from '../Search';
import Panel from '../Panel';
import Player from '../Player';

/**
 * 左侧操作栏
 */
export default class ActionBar extends PureComponent {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div className="action-bar">
        <Logo />
        <Search />
        <Panel />
        <Player />
      </div>
    );
  }
}

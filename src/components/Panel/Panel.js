import React, { Component } from 'react';
import LnIcon from '../../packages/LnIcon';
import PropTypes from 'prop-types';
import './Panel.less';
import PanelUser from './PanelUser';
import NavItem from './NavItem';

const navList = [
  {
    url: 'javascript:;',
    iconType: 'discover',
    text: '发现'
  },
  {
    url: 'javascript:;',
    iconType: 'collect',
    text: '收藏'
  },
  {
    url: 'javascript:;',
    iconType: 'song-list',
    text: '歌单'
  },
  {
    url: 'javascript:;',
    iconType: 'history',
    text: '历史'
  },
  {
    url: 'javascript:;',
    iconType: 'message',
    text: '消息'
  },
  {
    url: 'javascript:;',
    iconType: 'space',
    text: '空间'
  },
  {
    url: 'javascript:;',
    iconType: 'set',
    text: '设置'
  }
];

/**
 * Panel
 */
export default class Panel extends Component {
  static propTypes = {
    /**
     * 用户信息
     * 默认：-
     */
    userInfo: PropTypes.object
  };
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      navList
    };
  }

  render() {
    const { userInfo } = this.props;
    const { navList } = this.state;
    return (
      <div className="panel">
        <div className="panel__header">
          <PanelUser userInfo={userInfo} />
        </div>
        <ul className="panel__nav-list">
          {navList.map(item => (
            <NavItem key={item.text} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './PanelUser.less';

const avatar =
  'http://www.ghost64.com/qqtupian/zixunImg/local/2016/11/25/14800673277815.jpg';

/**
 * PanelUser
 */
export default class PanelUser extends Component {
  static propTypes = {
    userInfo: PropTypes.object
  };

  static defaultTypes = {};

  render() {
    const { userInfo } = this.props;
    let src = avatar,
      hasLogin = false;
    if (userInfo) {
      src = userInfo.avatar;
      hasLogin = true;
    }
    return (
      <div className="panel-user">
        <img src={src} alt="avatar" className="panel-user__avatar" />
        <div className="panel-user__content">
          {hasLogin ? (
            <Fragment>
              <span className="panel-user__welcome">欢迎！</span>
              <span className="panel-user__username">HaoChen</span>
            </Fragment>
          ) : (
            <span className="panel-user__please-login">请登录</span>
          )}
        </div>
        <button className="panel-user__loginout" type="button">
          [登出]
        </button>
      </div>
    );
  }
}

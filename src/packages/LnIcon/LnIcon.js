import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './LnIcon.less';

/**
 * icon
 */
export default class LnIcon extends Component {
  static propTypes = {
    /**
     * icon 类型
     */
    type: PropTypes.string.isRequired,
    /**
     * 尺寸（单位：px）
     */
    size: PropTypes.number
  };
  static defaultProps = {
    size: 16
  };
  render() {
    const { type, size, style, className } = this.props;
    const iconClassNames = classNames(
      {
        'ln-icon': true,
        iconfont: true,
        [`icon-${type}`]: true
      },
      className
    );
    return (
      <i className={iconClassNames} style={{ ...style, fontSize: size }} />
    );
  }
}

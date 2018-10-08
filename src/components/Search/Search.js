import React, { Component } from 'react';
import LnIcon from '../../packages/LnIcon';
import PropTypes from 'prop-types';
import './Search.less';

/**
 * search
 */
export default class Search extends Component {
  static propTypes = {
    /**
     * 搜索框的值
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * 输入框内容发生变化时的回调
     */
    onChange: PropTypes.func,
    /**
     * 按下回车时的回调
     */
    onPressEnter: PropTypes.func
  };
  static defaultProps = {
    onChange: () => {},
    onPressEnter: () => {}
  };

  onChange = e => {
    const { onChange } = this.props;
    onChange && onChange(e);
  };

  onKeyDown = e => {
    if (e.keyCode === 13) {
      const { onPressEnter } = this.props;
      onPressEnter && onPressEnter(e);
    }
  };

  render() {
    const { value } = this.props;
    return (
      <div className="search">
        <LnIcon type="search" className="search__icon" />
        <input
          type="text"
          placeholder="搜索"
          value={value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          className="search__input"
        />
      </div>
    );
  }
}

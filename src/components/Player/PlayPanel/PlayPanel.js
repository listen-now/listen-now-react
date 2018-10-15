import React, { Component } from 'react';
import './PlayPanel.less';
import PropTypes from 'prop-types';

/**
 * PlayPanel
 */
export default class PlayPanel extends Component {
  static propTypes = {
    /**
     * 背景图
     */
    bgImage: PropTypes.string.isRequired,

    /**
     * 播放状态
     * 可选：'playing' 播放；'pausing' 暂停
     */
    playStatus: PropTypes.oneOf(['playing', 'pausing'])
  };
  static defaultProps = {};
  render() {
    const { bgImage } = this.props;
    return (
      <div
        className="play-panel"
        style={{ background: `url(${bgImage}) no-repeat` }}
      />
    );
  }
}

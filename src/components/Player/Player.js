import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Player.less';
import { LnIcon } from '../../packages';

/**
 * Player
 */
export default class Player extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    const { value } = this.props;
    return (
      <div className="player">
        <div className="player-controls">
          <div className="player-controls__volume">
            <LnIcon
              type="subtract"
              size={12}
              className="player-controls__substract"
            />
            <div className="player-controls__volume-bar">
              <span className="player-controls__point" />
            </div>
            <LnIcon type="add" size={12} className="player-controls__add" />
          </div>
          <div className="player-controls__song-info">
            <LnIcon type="info" />
          </div>
          <div className="player-controls__collect">
            <LnIcon type="collect" />
          </div>
          <div className="player-controls__play-mode">
            <LnIcon type="random" />
          </div>
          <div className="player-controls__play-list">
            <LnIcon type="song-list" />
          </div>
        </div>
        <div />
      </div>
    );
  }
}

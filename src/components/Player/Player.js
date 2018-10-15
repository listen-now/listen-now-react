import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Player.less';
import { LnIcon } from '../../packages';
import Draggable from 'react-draggable';
import PlayPanel from './PlayPanel';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';

/**
 * Player
 */
export default class Player extends Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      playPanelList: [
        {
          name: '111',
          author: 'a111',
          bgImage:
            'http://www.ghost64.com/qqtupian/zixunImg/local/2016/11/25/14800673277815.jpg',
          playStatus: 'pausing'
        },
        {
          name: '222',
          author: 'a222',
          bgImage:
            'http://www.ghost64.com/qqtupian/zixunImg/local/2016/11/25/14800673277815.jpg',
          playStatus: 'playing'
        },
        {
          name: '333',
          author: 'a333',
          bgImage:
            'http://www.ghost64.com/qqtupian/zixunImg/local/2016/11/25/14800673277815.jpg',
          playStatus: 'pausing'
        }
      ]
    };
  }

  componentDidMount() {
    const certifySwiper = new Swiper(
      '.player-controls__swiper .swiper-container',
      {
        loop: true,
        initialSlide: 1,
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        centeredSlides: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 100,
          depth: 150,
          modifier: 3,
          slideShadows: true
        }
      }
    );
  }

  onMouseMove = e => {
    console.log(e);
  };

  handleDrag = (e, data) => {
    const x = data.x;
  };

  render() {
    const { playPanelList } = this.state;
    return (
      <div className="player">
        <div className="player-controls">
          <div className="player-controls__wrap">
            <div className="player-controls__volume">
              <LnIcon
                type="subtract"
                size={12}
                className="player-controls__substract"
              />
              <div className="player-controls__volume-bar">
                <Draggable
                  axis="x"
                  bounds={{ left: 0, right: 61 }}
                  onDrag={this.handleDrag}
                >
                  <span className="player-controls__point" />
                </Draggable>
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

          <div className="player-controls__swiper">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {playPanelList.map(songInfo => (
                  <div key={songInfo.name} className="swiper-slide">
                    <PlayPanel
                      bgImage={songInfo.bgImage}
                      playStatus={songInfo.playStatus}
                    />
                  </div>
                ))}
              </div>
            </div>
            <button type="button" className="player-controls__pre">
              <LnIcon type="pre-song" className="player-controls__pre-song" />
            </button>
            <button type="button" className="player-controls__next">
              <LnIcon type="next-song" className="player-controls__next-song" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

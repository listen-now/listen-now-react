import React, { Component } from 'react';
import LnIcon from '../../packages/LnIcon';
import PropTypes from 'prop-types';
import './Panel.less';

/**
 * Panel
 */
export default class Panel extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    const { value } = this.props;
    return <div className="panel">panel</div>;
  }
}

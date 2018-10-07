import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import './LnLogo.less';

/**
 * Logo
 */
export default class LnLogo extends Component {
  render() {
    return (
      <div className="ln-logo">
        <img className="ln-logo__img" src={logo} />
        <h1 className="ln-logo__h1">Listen-now</h1>
      </div>
    );
  }
}

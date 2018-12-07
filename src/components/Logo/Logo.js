import React, { PureComponent } from 'react';
import logo from '../../assets/images/logo.png';
import './Logo.less';

/**
 * Logo
 */
export default class LnLogo extends PureComponent {
  render() {
    return (
      <div className="logo">
        <img className="logo__img" src={logo} />
        <h1 className="logo__h1">Listen-now</h1>
      </div>
    );
  }
}

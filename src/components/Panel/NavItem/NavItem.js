import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './NavItem.less';
import LnIcon from '../../../packages/LnIcon';

/**
 * NavItem
 */
export default class NavItem extends PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  static defaultTypes = {};

  render() {
    const { item } = this.props;
    return (
      <li className="nav-item">
        <a href={item.url} className="nav-item__link">
          <LnIcon type={item.iconType} size={20} className="nav-item__icon" />
          <span className="nav-item__text">{item.text}</span>
        </a>
      </li>
    );
  }
}

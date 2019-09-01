import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import * as types from '../items/types';

import './style.css';

const getItemClass = ({ type }) => {
  switch (type) {
    case types.BASIC_SWORD:
      return 'basic-sword';
    default:
      return null;
  }
};

function ItemPanel({ item }) {
  return <div className={cx('panel-item', getItemClass(item))} />;
}

ItemPanel.propTypes = {
  item: PropTypes.shape({}).isRequired
};

export default ItemPanel;

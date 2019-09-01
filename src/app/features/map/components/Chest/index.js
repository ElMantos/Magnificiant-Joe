import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { player } from 'State';

import './style.css';

function BasicChest({ key, metadata }) {
  const { isOpen } = metadata;
  return (
    <div
      key={key}
      className={cx('tile basic-chest', isOpen && 'basic-chest-open')}
      style={{
        width: player.constants.SPRITE_SIZE,
        height: player.constants.SPRITE_SIZE
      }}
    />
  );
}

BasicChest.propTypes = {
  key: PropTypes.string,
  metadata: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired
  }).isRequired
};

export default BasicChest;

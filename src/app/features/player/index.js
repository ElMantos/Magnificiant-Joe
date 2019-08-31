import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import { player } from 'State';
import handleMovement from './movement';
import walkSprite from './assets/playerWalk.png';

function Player({ playerPosition }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: playerPosition[1],
        left: playerPosition[0],
        backgroundImage: `url('${walkSprite}')`,
        backgroundPosition: '0 0',
        width: `${player.constants.SPRITE_SIZE}px`,
        height: `${player.constants.SPRITE_SIZE}px`
      }}
    />
  );
}

Player.propTypes = {
  playerPosition: PropTypes.arrayOf(PropTypes.number).isRequired
};

const enhance = compose(
  handleMovement,
  connect(
    state => ({
      playerPosition: player.selectors.getPlayerPosition(state)
    }),
    null
  )
);

export default enhance(Player);

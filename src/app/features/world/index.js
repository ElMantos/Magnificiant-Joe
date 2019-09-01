import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { world } from 'State';
import config from 'Config';
import Player from '../player';
import Map from '../map';
import { firstMap } from '../../data/maps';

function World({ addWorldTiles }) {
  useEffect(() => {
    addWorldTiles(firstMap);
  });
  return (
    <div
      style={{
        width: `${config.constants.MAP_WIDTH}px`,
        height: `${config.constants.MAP_HEIGHT}px`,
        position: 'relative',
        margin: '10px auto'
      }}
    >
      <Map map={firstMap.tiles} className={firstMap.mapClass} />
      <Player />
    </div>
  );
}

World.propTypes = {
  addWorldTiles: PropTypes.func.isRequired
};

const enhance = connect(
  null,
  dispatch => ({
    addWorldTiles: tiles => dispatch(world.actions.addTiles(tiles))
  })
);

export default enhance(World);

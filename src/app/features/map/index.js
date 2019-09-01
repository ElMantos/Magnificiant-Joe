import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { connect } from 'react-redux';

import { player, world } from 'State';
import { MAP_TILES } from './constants';

import './style.css';

function getSpriteTile(type) {
  switch (type) {
    case MAP_TILES.basicTree:
      return 'basic-tree';
    case MAP_TILES.grass:
      return '';
    default:
      return '';
  }
}

function MapTile({ value }) {
  return (
    <div
      className={cx('tile', getSpriteTile(value))}
      style={{
        width: player.constants.SPRITE_SIZE,
        height: player.constants.SPRITE_SIZE
      }}
    />
  );
}

MapTile.propTypes = {
  value: PropTypes.number.isRequired
};

function MapRow({ tiles }) {
  return (
    <div className="flex flex-row">
      {tiles.map((tile, key) => (
        <MapTile key={`tile-${key}`} value={tile} />
      ))}
    </div>
  );
}

MapRow.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.number).isRequired
};

function Map({ map, className, addWorldTiles }) {
  useEffect(() => {
    addWorldTiles(map);
  });

  return (
    <div
      className={cx('w-full h-full flex flex-col', className)}
      style={{
        border: '4px solid lightgrey'
      }}
    >
      {map.map((row, key) => (
        <MapRow key={`row-${key}`} tiles={row} />
      ))}
    </div>
  );
}

Map.propTypes = {
  map: PropTypes.arrayOf(PropTypes.array).isRequired,
  className: PropTypes.string.isRequired,
  addWorldTiles: PropTypes.func.isRequired
};

const enhance = connect(
  null,
  dispatch => ({
    addWorldTiles: tiles => dispatch(world.actions.addTiles(tiles))
  })
);

export default enhance(Map);

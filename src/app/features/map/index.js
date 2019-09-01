import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { connect } from 'react-redux';

import { player, world } from 'State';
import { MAP_TILES } from './constants';
import { BasicChest } from './components';

import './style.css';

function getSpriteTile(item, key) {
  const { tile } = item;

  switch (tile) {
    case MAP_TILES.basicChest.tile:
      return <BasicChest metadata={item.metadata} key={key} />;
    case MAP_TILES.basicRock.tile:
      return <MapTile key={key} className="tile basic-rock" />;
    case MAP_TILES.basicTree.tile:
      return <MapTile key={key} className="tile basic-tree" />;
    case MAP_TILES.grass.tile:
      return <MapTile key={key} />;
    default:
      return <MapTile key={key} />;
  }
}

function MapTile({ className }) {
  return (
    <div
      className={cx('tile', className)}
      style={{
        width: player.constants.SPRITE_SIZE,
        height: player.constants.SPRITE_SIZE
      }}
    />
  );
}

MapTile.propTypes = {
  className: PropTypes.string
};

function MapRow({ tiles }) {
  return (
    <div className="flex flex-row first-map">
      {tiles.map((item, key) => getSpriteTile(item, key))}
    </div>
  );
}

MapRow.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.shape).isRequired
};

function Map({ worldTile, className }) {
  console.log(worldTile);
  if (!worldTile.tiles.length) {
    return <span>Loading</span>;
  }
  return (
    <div
      className={cx('w-full h-full flex flex-col', className)}
      style={{
        border: '4px solid lightgrey'
      }}
    >
      {worldTile.tiles.map((row, key) => (
        <MapRow key={`row-${key}`} tiles={row} />
      ))}
    </div>
  );
}

Map.propTypes = {
  worldTile: PropTypes.arrayOf(PropTypes.shape).isRequired,
  className: PropTypes.string.isRequired
};

const enhance = connect(state => ({
  worldTile: world.selectors.getTiles(state)
}));

export default enhance(Map);

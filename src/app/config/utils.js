import { player } from 'State';
import * as constants from './constants';

const observeImpassable = (newPos, tiles) => {
  const y = newPos[0] / player.constants.SPRITE_SIZE;
  const x = newPos[1] / player.constants.SPRITE_SIZE;
  if (y < 0 || x < 0) {
    return false;
  }
  const nextTile = tiles.tiles[x][y];
  return nextTile.tile >= 500;
};

export const observeCollectable = (pos, tiles) => {
  const y = pos[0] / player.constants.SPRITE_SIZE;
  const x = pos[1] / player.constants.SPRITE_SIZE;
  if (y < 0 || x < 0) {
    return false;
  }

  const mapTiles = tiles.tiles;

  const northTile = mapTiles[x][y - 1];
  const westTile = mapTiles[x - 1][y];
  const eastTile = mapTiles[Number(x) + 1][y];
  const southTile = mapTiles[x][Number(y) + 1];

  if (northTile.tile >= 1000) {
    return {
      actionTile: northTile,
      index: [x, y - 1]
    };
  }

  if (westTile.tile >= 1000) {
    return {
      actionTile: westTile,
      index: [x - 1, y]
    };
  }

  if (eastTile.tile >= 1000) {
    return {
      actionTile: eastTile,
      index: [x + 1, y]
    };
  }

  if (southTile.tile >= 1000) {
    return {
      actionTile: southTile,
      index: [x, y + 1]
    };
  }

  return false;
};

export const observeMovementBoundaries = (oldPos, newPos, tiles) => {
  if (observeImpassable(newPos, tiles)) return oldPos;

  const condition =
    newPos[0] >= 0 &&
    newPos[0] < constants.MAP_WIDTH &&
    (newPos[1] >= 0 && newPos[1] < constants.MAP_HEIGHT);
  return condition ? newPos : oldPos;
};

export const getNewPosition = (direction, oldPos) => {
  const spriteSize = Number(player.constants.SPRITE_SIZE);
  const x = Number(oldPos[0]);
  const y = Number(oldPos[1]);

  switch (direction) {
    case 'WEST':
      return [x - spriteSize, y];
    case 'EAST':
      return [x + spriteSize, y];
    case 'NORTH':
      return [x, y - spriteSize];
    case 'SOUTH':
      return [x, y + spriteSize];
    default:
      return oldPos;
  }
};

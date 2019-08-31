import { player } from 'State';
import * as constants from './constants';

export const observeMovementBoundaries = (oldPos, newPos) => {
  const condition =
    newPos[0] >= 0 &&
    newPos[0] < constants.MAP_WIDTH &&
    (newPos[1] >= 0 && newPos[1] < constants.MAP_HEIGHT);
  console.log(condition);
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

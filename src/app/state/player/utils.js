import { SPRITE_SIZE } from './constants';

export const getNewPosition = (direction, oldPos) => {
  const spriteSize = Number(SPRITE_SIZE);
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

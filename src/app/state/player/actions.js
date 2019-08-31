import * as actionTypes from './actionTypes';

export const directionMove = newPosition => {
  console.log(newPosition);
  return {
    type: actionTypes.PLAYER_MOVE,
    payload: newPosition
  };
};

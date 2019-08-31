import * as actionTypes from './actionTypes';

export const directionMove = (newPosition, direction) => {
  return {
    type: actionTypes.PLAYER_MOVE,
    payload: {
      position: newPosition,
      direction
    }
  };
};

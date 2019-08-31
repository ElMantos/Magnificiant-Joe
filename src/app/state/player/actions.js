import * as actionTypes from './actionTypes';

export const directionMove = newPosition => ({
  type: actionTypes.PLAYER_MOVE,
  payload: {
    position: newPosition
  }
});

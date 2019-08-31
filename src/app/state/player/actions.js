import * as actionTypes from './actionTypes';

export const directionMove = (newPosition, direction) => {
  console.log(newPosition);
  return {
    type: actionTypes.PLAYER_MOVE,
    payload: {
      position: newPosition,
      direction
    }
  };
};

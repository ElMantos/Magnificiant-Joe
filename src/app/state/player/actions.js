import * as actionTypes from './actionTypes';

export const addPlayerItem = item => {
  return {
    type: actionTypes.ADD_PLAYER_ITEMS,
    payload: item
  };
};

export const directionMove = (newPosition, direction) => {
  return {
    type: actionTypes.PLAYER_MOVE,
    payload: {
      position: newPosition,
      direction
    }
  };
};

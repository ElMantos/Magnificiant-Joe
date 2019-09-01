import * as actionTypes from './actionTypes';

export const changeChestState = index => {
  return {
    type: actionTypes.CHANGE_CHEST_STATE,
    payload: index
  };
};

export const addTiles = tiles => ({
  type: actionTypes.ADD_TILES,
  payload: tiles
});

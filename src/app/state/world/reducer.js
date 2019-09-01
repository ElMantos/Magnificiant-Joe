import * as actionTypes from './actionTypes';

const defaultState = {
  tiles: {
    tiles: [],
    mapClass: ''
  }
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_CHEST_STATE:
      // eslint-disable-next-line no-case-declarations
      const updatedTiles = state.tiles.tiles;
      updatedTiles[payload[0]][payload[1]].metadata.isOpen = !updatedTiles[
        payload[0]
      ][payload[1]].metadata.isOpen;
      return {
        ...state,
        tiles: {
          ...state.tiles,
          tiles: updatedTiles
        }
      };
    case actionTypes.ADD_TILES:
      return {
        ...state,
        tiles: payload
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;

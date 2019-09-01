import * as actionTypes from './actionTypes';

const defaultState = {
  tiles: []
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
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

import * as actionTypes from './actionTypes';

const defaultState = {
  position: [0, 0]
};

const playerReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case actionTypes.PLAYER_MOVE:
      return {
        ...state,
        position: payload
      };
    default:
      return {
        ...state
      };
  }
};

export default playerReducer;

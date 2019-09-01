import * as actionTypes from './actionTypes';
import { DIRECTIONS } from './constants';

const defaultState = {
  position: [0, 0],
  direction: DIRECTIONS.west,
  items: []
};

const playerReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_PLAYER_ITEMS:
      return {
        ...state,
        items: state.items.concat([payload])
      };
    case actionTypes.PLAYER_MOVE:
      return {
        ...state,
        position: payload.position,
        direction: payload.direction
      };
    default:
      return {
        ...state
      };
  }
};

export default playerReducer;

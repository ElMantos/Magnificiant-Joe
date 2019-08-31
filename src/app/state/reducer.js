import { combineReducers } from 'redux';

import player from './player';

const rootReducer = combineReducers({
  [player.constants.PLAYER_NAME]: player.playerReducer
});

export default rootReducer;

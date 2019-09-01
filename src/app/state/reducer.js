import { combineReducers } from 'redux';

import player from './player';
import world from './world';

const rootReducer = combineReducers({
  [player.constants.PLAYER_NAME]: player.playerReducer,
  [world.constants.WORLD_NAME]: world.worldReducer
});

export default rootReducer;

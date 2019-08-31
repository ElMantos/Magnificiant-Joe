import { combineReducers } from 'redux';

import user from './user';

const rootReducer = combineReducers({
  user: user.userReducer
});

export default rootReducer;

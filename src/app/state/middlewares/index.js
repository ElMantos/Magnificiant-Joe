import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';

export default [thunk, apiMiddleware];

import { invoke } from '../redux-api';
import * as actionTypes from './actionTypes';

const testObj = {
  endpoint: 'https://jsonplaceholder.typicode.com/todos/1',
  method: 'GET',
  headers: {},
  types: ['START', 'SUCCESS', 'FAIL']
};

const testStateAsync = () => ({
  type: actionTypes.TEST_STATE
});

const testInvokeAsync = () => {
  return invoke(testObj);
};

export const testState = () => {
  return async dispatch => {
    await dispatch(testStateAsync());
    dispatch(testInvokeAsync());
  };
};

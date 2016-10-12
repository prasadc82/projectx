import { combineReducers } from 'redux';
import * as tripReducer from './trip'

export default combineReducers(Object.assign(
  tripReducer,
));
import { combineReducers } from 'redux';
import * as tripReducer from './trip'
import { combineForms } from 'react-redux-form';

// export default combineReducers(Object.assign(
//   tripReducer,
// ));

export default combineForms({trip: { }})
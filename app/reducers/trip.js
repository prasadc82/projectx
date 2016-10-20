import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const trip = createReducer({}, {
  [types.SET_TRIP_BY](state, action) {
    return Object.assign(state, { tripBy: action.tripBy }); 
  },
  [types.SET_TRIP_TYPE](state, action) {
    return Object.assign(state, { tripType: action.tripType }); 
  },
  // [types.SET_TRIP_SOURCE](state, action) {
  //   return Object.assign(state, { tripSource: action.tripSource });
  // },
  // [types.SET_TRIP_DESTINATION](state, action) {
  //   return Object.assign(state, { tripDestination: action.tripDestination });
  // },
  [types.SET_TRIP_STARTDATETIME](state, action) {
    return Object.assign(state, { tripStartDateTime: action.tripStartDateTime });
  },
  [types.SET_TRIP_RETURNDATETIME](state, action) {
    return Object.assign(state, { tripReturnDateTime: action.tripReturnDateTime });
  },
});

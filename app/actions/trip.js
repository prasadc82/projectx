import * as types from './types'

export function setTripBy(tripBy) {
  return {
    type: types.SET_TRIP_BY,
    tripBy: tripBy
  }
}

export function setTripType(tripType) {
  return {
    type: types.SET_TRIP_TYPE,
    tripType: tripType
  }
}

// export function setTripSource(src) {
//   return {
//     type: types.SET_TRIP_SOURCE,
//     tripSource: src.nativeEvent.text
//   }
// }

// export function setTripDestination(dest) {
//   return {
//     type: types.SET_TRIP_DESTINATION,
//     tripDestination: dest.nativeEvent.text
//   }
// }

export function setTripStartDateTime(startDate) {
  return {
    type: types.SET_TRIP_STARTDATETIME,
    tripStartDateTime: startDate
  }
}

export function setTripReturnDateTime(returnDate) {
  return {
    type: types.SET_TRIP_RETURNDATETIME,
    tripReturnDateTime: returnDate
  }
}


export function setTripPoint(location) {
  return {
    type: types.SET_TRIP_POINT,
    tripPoint: location
  }
}

import * as TripActions from './trip'
import { actions } from 'react-redux-form/native';

export const ActionCreators = Object.assign({},
  TripActions,
  actions
);
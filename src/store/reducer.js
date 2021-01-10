import { combineReducers } from 'redux'
import { betReducer } from './bet.reducer';

const createReducer = asyncReducers => combineReducers({
  bet: betReducer,
  ...asyncReducers
})

export default createReducer;

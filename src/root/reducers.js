import { combineReducers } from 'redux';
import * as HomeReducer from '../shell/Home/reducers';
import * as ErrorReducer from '../shell/ErrorCompoenent/reducers';

const rootReducer = combineReducers({
  ...HomeReducer,
  ...ErrorReducer
})

export default rootReducer;
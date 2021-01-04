import {combineReducers} from 'redux';
import commonReducer from './commonReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
  authReducer,
  commonReducer,
});

export default reducers;

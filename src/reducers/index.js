import { combineReducers } from 'redux';
import testReducer from './reducer';

export default combineReducers({
    test: testReducer,
});
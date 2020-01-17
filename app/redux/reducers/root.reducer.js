import {combineReducers} from 'redux';
import bookstate from './bookstate.reducer';

const rootReducer = combineReducers({
  bookstate,
});

export default rootReducer;

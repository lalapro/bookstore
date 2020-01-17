import {combineReducers} from 'redux';
import profile from './profile.reducer';
import medicalHistory from './medicalHistory.reducer';
import familyMembers from './familyMembers.reducer';
import screens from './screens.reducer';

const rootReducer = combineReducers({
  profile,
  medicalHistory,
  familyMembers,
  screens,
});

export default rootReducer;

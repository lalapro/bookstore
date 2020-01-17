import * as actionTypes from '../actions/actionTypes';
import {Constants} from '../../configs';

const {MEDICAL_HISTORY_LIST} = Constants;
const initialState = {
  ...MEDICAL_HISTORY_LIST,
};

const medicalHistory = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MEDICAL_HISTORY:
      return {...state, ...action.payload};
    case actionTypes.CLEAN_MEDICAL_HISTORY:
      return initialState;
    default:
      return state;
  }
};

export default medicalHistory;

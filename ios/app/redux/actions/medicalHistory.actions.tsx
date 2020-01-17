import * as actionTypes from './actionTypes';

export const setMedicalHistory = state => dispatch => {
  dispatch({
    type: actionTypes.SET_MEDICAL_HISTORY,
    payload: state,
  });
};

export const cleanMedicalHistory = state => dispatch => {
  dispatch({
    type: actionTypes.CLEAN_MEDICAL_HISTORY,
    payload: state,
  });
};

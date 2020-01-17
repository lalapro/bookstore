import * as actionTypes from './actionTypes';

export const setFamilyMembers = state => dispatch => {
  dispatch({
    type: actionTypes.SET_FAMILY,
    payload: state,
  });
};

export const cleanFamilyMembers = state => dispatch => {
  dispatch({
    type: actionTypes.CLEAN_FAMILY,
    payload: state,
  });
};

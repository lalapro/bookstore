import * as actionTypes from './actionTypes';

export const setBookstate = state => dispatch => {
  dispatch({
    type: actionTypes.SET_BOOKSTATE,
    payload: state,
  });
};

export const cleanFamilyMembers = state => dispatch => {
  dispatch({
    type: actionTypes.CLEAN_BOOKSTATE,
    payload: state,
  });
};

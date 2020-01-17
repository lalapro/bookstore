import * as actionTypes from './actionTypes';

export const setProfile = state => dispatch => {
  dispatch({
    type: actionTypes.SET_PROFILE,
    payload: state,
  });
};

export const cleanProfile = state => dispatch => {
  dispatch({
    type: actionTypes.CLEAN_PROFILE,
    payload: state,
  });
};

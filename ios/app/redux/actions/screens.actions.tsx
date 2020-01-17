import * as actionTypes from './actionTypes';

export const setScreens = state => dispatch => {
  dispatch({
    type: actionTypes.SET_SCREENS,
    payload: state,
  });
};

export const cleanScreens = state => dispatch => {
  dispatch({
    type: actionTypes.CLEAN_SCREENS,
    payload: state,
  });
};

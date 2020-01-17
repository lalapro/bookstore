import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isEdit: false,
};

const screens = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SCREENS:
      return {...state, ...action.payload};
    case actionTypes.CLEAN_SCREENS:
      return initialState;
    default:
      return state;
  }
};

export default screens;

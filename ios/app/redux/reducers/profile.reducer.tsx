import * as actionTypes from '../actions/actionTypes';

const initialState = {
  firstName: '',
  lastName: '',
  gender: '',
  birthdate: '',
  email: '',
  phone: '',
  streetAddress: '',
  city: '',
  state: '',
  zip: '',
  maritalStatus: '',
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PROFILE:
      return {...state, ...action.payload};
    case actionTypes.CLEAN_PROFILE:
      return initialState;
    default:
      return state;
  }
};

export default profile;

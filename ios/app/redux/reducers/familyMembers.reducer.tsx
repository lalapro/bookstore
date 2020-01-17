import * as actionTypes from '../actions/actionTypes';
import {Constants} from '../../configs';

const {FAMILY_MEMBER_STARTING} = Constants;

interface FamilyMember {
  name: string;
  age: string;
  deceased: string;
}

const initialState: FamilyMember[] = [
  {
    name: 'Self',
    age: '',
    deceased: '',
  },
  {
    name: 'Mom',
    age: '',
    deceased: '',
  },
  {
    name: 'Dad',
    age: '',
    deceased: '',
  },
];

const familyMembers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FAMILY:
      return [...action.payload];
    case actionTypes.CLEAN_FAMILY:
      return FAMILY_MEMBER_STARTING;
    default:
      return state;
  }
};

export default familyMembers;

import * as actionTypes from '../actions/actionTypes';
import {Constants} from '../../configs';

const {BOOKS} = Constants

const initialState = {
  selectedCategory: '',
  selectedBook: {},
  books: BOOKS
};

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const bookstate = (state = initialState, action) => {
  if (action.payload && action.payload.selectedCategory) {
    const shuffled = shuffle(BOOKS);
    action.payload.books = shuffled
  }
  switch (action.type) {
    case actionTypes.SET_BOOKSTATE:
      return {...state, ...action.payload};
    case actionTypes.CLEAN_BOOKSTATE:
      return initialState;
    default:
      return state;
  }
};

export default bookstate;

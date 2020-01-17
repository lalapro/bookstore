import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root.reducer';

const customMiddleWare = (store: any) => (next: any) => (action: any) => {
  next(action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, customMiddleWare),
);

export default store;

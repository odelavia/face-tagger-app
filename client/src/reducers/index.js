import { combineReducers } from 'redux';
import nav__reducer from './nav__reducer';

const reducer = combineReducers({
  nav: nav__reducer,
});

export default reducer;
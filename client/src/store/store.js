import { createStore } from 'redux';
import reducer from '../reducers';

const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;

import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxMulti from 'redux-multi';

import combineReducers from './combineReducers';
import redirectMiddleware from './redirectMiddleware';

const store = createStore(combineReducers, applyMiddleware(reduxThunk, reduxMulti, redirectMiddleware));

export default store;
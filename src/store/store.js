
import {createStore,combineReducers} from 'redux';
import {paintReducer} from './../actions/action.js';

export const store =  createStore( paintReducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

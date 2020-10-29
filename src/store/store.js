
import {createStore,combineReducers} from 'redux';
import {selectReducer} from './../actions/selectAction.js';
import {submitReducer} from './../actions/submitAction.js';

export default   createStore( combineReducers(
  {
    select: selectReducer,
    submit: submitReducer
  }
),
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

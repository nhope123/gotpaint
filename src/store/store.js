
import {createStore,combineReducers} from 'redux';
import {selectReducer} from './../actions/selectAction.js';
import {submitReducer} from './../actions/submitAction.js';
import {inventoryReducer} from './../actions/inventoryAction.js';
// Storage
import createElectronStorage from "redux-persist-electron-storage";
import { persistStore, persistReducer } from 'redux-persist';


const ElectronStore = require('electron-store');
const electronStore = new ElectronStore();

const persistConfig = {
  key: 'root',
  storage: createElectronStorage({electronStore})
};

const rootReducer =  combineReducers(
  {
    select: selectReducer,
    submit: submitReducer,
    invent: inventoryReducer
  }
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default ()=>{
let store = createStore(
    persistedReducer
    );
 let persistor = persistStore(store);

return {store , persistor};

}
//,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()}

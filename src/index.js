import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store, persistor} from './store/store.js';
import { PersistGate } from 'redux-persist/integration/react'
import './style/index.scss';
import './style/nav.scss';
import './style/form.scss';
import './style/inventory.scss';
//import App from './App';
import Paint from './components/paintApp.js';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Paint />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.register();
reportWebVitals();

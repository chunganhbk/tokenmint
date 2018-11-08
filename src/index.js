import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './app/store/configureStore';
import { loadAllAccounts } from './app/actions/accountsActions';
import ReactGA from 'react-ga';
import { getNetworkType } from './app/actions/networkActions';
import * as deviceDetector from './tools/deviceDetector';
import { setIsMobileDevice } from './app/actions/deviceActions';

const store = configureStore();

window.addEventListener('load', function () {
  store.dispatch(getNetworkType());
  store.dispatch(loadAllAccounts());
  store.dispatch(setIsMobileDevice(deviceDetector.isMobileDevice()));
});

ReactGA.initialize('UA-125703137-2');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

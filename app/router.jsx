import React from 'react';
import { AppContainer as HMRContainer} from 'react-hot-loader'; 
import { Provider } from 'react-redux';
import store from './store'
import { Router, hashHistory } from 'react-router';

import Routes from 'routes';

export default () => (
  <HMRContainer>
    <Provider store={store}>
      <Router history={hashHistory}>
        { Routes }
      </Router>
    </Provider>
  </HMRContainer>
);
import { Router, Route, hashHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';

import store from './store'
import AppContainer from 'containers/App.jsx';

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}/>
    </Router>
  </Provider>
, document.getElementById('app'))

import { Router, Route, hashHistory } from 'react-router';
import { render } from 'react-dom';
import React from 'react';

import App from 'App/App.jsx';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>
), document.getElementById('app'))

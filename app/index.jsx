import { Router, Route, hashHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { AppContainer as HMRContainer} from 'react-hot-loader'; 

import store from './store'
import AppContainer from 'containers/App.jsx';

render(
  <HMRContainer>
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={AppContainer}/>
      </Router>
    </Provider>
  </HMRContainer>
, document.getElementById('app')
)

 if (module.hot) {
    module.hot.accept('containers/App.jsx', () => {
      render(
        <HMRContainer>
            <Provider store={store}>
              <Router history={hashHistory}>
                <Route path="/" component={AppContainer}/>
              </Router>
            </Provider>
          </HMRContainer>
        , document.getElementById('app')
      );
    });
}
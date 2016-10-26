import { render } from 'react-dom';
import React from 'react';
import Router from 'router';

render (
  <Router />
, document.getElementById('app'));

if (module.hot) {
  module.hot.accept('containers/App.jsx', () => {
    render(
      <Router />
    , document.getElementById('app'));
  });
}
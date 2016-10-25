import {render} from 'react-dom';
import { uniqueKey } from '../../utils/react-utils';
import React, { Component, PropTypes } from 'react';
import style from './app.scss';

export default class App extends Component {

  render () {
    return (
      <div>
        <h1 className={style.title}> Hello World </h1>
      </div>
    )
  }
}

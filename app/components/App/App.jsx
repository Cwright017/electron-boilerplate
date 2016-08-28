import {render} from 'react-dom';
import React from 'react';
import style from './app.scss';

export default class App extends React.Component {

  render () {
    return (
      <div>
        <h1 className={style.title}> Hello World </h1>
      </div>
    )
  }
}

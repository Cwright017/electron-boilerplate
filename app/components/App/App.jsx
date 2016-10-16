import {render} from 'react-dom';
import React, { Component, PropTypes } from 'react';
import style from './app.scss';

export default class App extends Component {

  render () {
    return (
      <div>
        <h1 className={style.title}> Hello World </h1>

        { this.props.todos.map((todo) => {
         return <h2> {todo} </h2>
        })}
      </div>
    )
  }
}

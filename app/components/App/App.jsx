import {render} from 'react-dom';
import { uniqueKey } from '../../utils/react-utils';
import React, { Component, PropTypes } from 'react';
import style from './app.scss';

export default class App extends Component {
  static PropTypes = {
    todos: React.PropTypes.array.isRequired
  }

  render () {
    return (
      <div>
        <h1 className={style.title}> Hello World </h1>
        {
          this.props.todos.map((todo) => {
            return <span> { todo } </span>;
          })
        }
      </div>
    )
  }
}

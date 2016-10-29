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
      <div className='App' >
        <h1 className='title'> Hello World </h1>
        {
          this.props.todos.map((todo, i) => {
            return <span key={i} className='App__todo' > { todo } </span>;
          })
        }
      </div>
    )
  }
}

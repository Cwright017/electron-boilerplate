import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react';
import App from 'components/App/App.jsx'

import * as testActionCreator from '../redux/todo-redux'

class AppContainer extends Component {

  componentDidMount() {
    let i = 0;
    const x = setInterval(() => {
      this.props.addTodo(`helloWorld ${i}`);
      i++;
    }, 2000);
  }

  render () {
    return <App todos={this.props.todos} />
  }
}

export default connect(
  state => ({
    todos: state.todos
  }),
  dispatch => bindActionCreators(testActionCreator, dispatch)
)(AppContainer);

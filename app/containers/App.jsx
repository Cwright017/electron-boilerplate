import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react';
import App from 'components/App/App.jsx'

import * as testActionCreator from '../redux/todo-redux'

class AppContainer extends Component {

  componentDidMount() {
    this.props.addTodo('First todo');
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

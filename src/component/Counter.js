import React, { Component } from 'react';
import { connect } from 'react-redux';
import { counter } from '../reducers/count';
import { increaseCounter, decreaseCounter } from '../reducers/count';

class Counter extends Component {
  handleIncCounter = (evt) => {
    evt.preventDefault()
    this.props.increaseCounter()
  }
  handleDecCounter = (evt) => {
    evt.preventDefault()
    this.props.decreaseCounter()
  }
  render() {
    return (
      <div>
        <span>{this.props.count.count}</span>
        <div>
          <button onClick={this.handleIncCounter}>+</button>
          <button onClick={this.handleDecCounter}>-</button>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {count: state.count}
  },
  {increaseCounter, decreaseCounter}
)(Counter)
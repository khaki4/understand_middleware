import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter, incrementAsync } from '../reducers/count';

class Counter extends Component {
  handleIncCounter = (evt) => {
    evt.preventDefault()
    this.props.incrementAsync()
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
  {increaseCounter, decreaseCounter, incrementAsync}
)(Counter)
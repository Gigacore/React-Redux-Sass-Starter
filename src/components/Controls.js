import React, { Component } from "react";
import { connect } from "react-redux";

import { incrementNum, decrementNum, resetCounter } from "../actions/counterActions";

@connect(() => {})

 class Controls extends Component {

  increment = () => {
    this.props.dispatch(incrementNum());
  }

  decrement = () => {
    this.props.dispatch(decrementNum());
  }

  resetCount = () => {
    this.props.dispatch(resetCounter(0));
  }

  render() {
    return (
      <div className="controls">
        <div onClick={() => {this.increment()}}>
          <span>+</span>
        </div>
        <div onClick={() => {this.resetCount()}}>
          <span>RESET</span>
        </div>
        <div onClick={() => {this.decrement()}}>
          <span>-</span>
        </div>
      </div>
    )
  }
}

export default Controls;
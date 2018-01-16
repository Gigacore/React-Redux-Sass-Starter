import React, { Component } from "react";
import { connect } from "react-redux";

import { incrementNum, decrementNum, resetCounter } from "../actions/counterActions";

@connect(() => {})

export default class Controls extends Component {

  _increment = () => {
    this.props.dispatch(incrementNum());
  }

  _decrement = () => {
    this.props.dispatch(decrementNum());
  }

  _resetCount = () => {
    this.props.dispatch(resetCounter(0));
  }

  render() {
    return (
      <div className="controls">
        <div onClick={() => {this._increment()}}>
          <span>+</span>
        </div>
        <div onClick={() => {this._resetCount()}}>
          <span>RESET</span>
        </div>
        <div onClick={() => {this._decrement()}}>
          <span>-</span>
        </div>
      </div>
    )
  }
}
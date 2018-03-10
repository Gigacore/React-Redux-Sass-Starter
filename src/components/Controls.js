import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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

    const { resetLabel, incrementLabel, decrementLabel } = this.props;

    return (
      <div className="controls">
        <div onClick={() => {this.increment();}}>
          <span>{incrementLabel}</span>
        </div>
        <div onClick={() => {this.resetCount();}}>
          <span>{resetLabel}</span>
        </div>
        <div onClick={() => {this.decrement();}}>
          <span>{decrementLabel}</span>
        </div>
      </div>
    );
  }
}

Controls.propTypes = {
  dispatch: PropTypes.func,
  resetLabel: PropTypes.string,
  incrementLabel: PropTypes.string,
  decrementLabel: PropTypes.string
};

Controls.defaultProps = {
  resetLabel: "RESET",
  incrementLabel: "+",
  decrementLabel: "-"
};

export default Controls;
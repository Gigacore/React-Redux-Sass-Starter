import React, { Component } from "react";
import Controls from "../components/Controls";
import { connect } from "react-redux";

import { incrementNum, decrementNum, resetCounter } from "../actions/counterActions";

export class Controller extends Component {

  render() {
    return (
      <Controls {...this.props}/>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(incrementNum());
    },
    decrement: () => {
      dispatch(decrementNum());
    },
    resetCount: payload => {
      dispatch(resetCounter(payload));
    }
  };
};

export default connect(null, mapDispatchToProps)(Controls);

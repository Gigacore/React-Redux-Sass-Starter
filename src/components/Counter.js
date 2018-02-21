import React, { Component } from "react";
import Controls from "./Controls";

import { connect } from 'react-redux';

@connect((store) => {
  return {
    count: store
  }
})

 class Counter extends Component {
  render() {

    const { count } = this.props.count;

    return (
      <div className="counter">
        <div>{count}</div>
        <Controls />
        <hr />
        <span>
          <a href="https://github.com/Gigacore/React-Redux-Starter">Fork it on Github</a>
        </span>
      </div>
    )
  }
}
export default Counter;
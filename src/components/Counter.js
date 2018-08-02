import React, { Component } from "react";
import PropTypes from "prop-types";
import Controls from "../containers/Controls";

 class Counter extends Component {
  render() {

    const { count } = this.props;

    return (
      <div className="counter">
        <div>{count}</div>
        <Controls />
        <hr />
        <span>
          <a href='https://github.com/Gigacore/React-Redux-Starter'>Fork it on Github</a>
        </span>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number
};

export default Counter;

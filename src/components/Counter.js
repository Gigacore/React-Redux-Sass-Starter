import React from "react";
import PropTypes from "prop-types";
import Controls from "../containers/Controls";

const Counter = ({ count }) => {
  return (
    <div className="counter">
      <div>{count}</div>
      <Controls />
      <hr />
      <span>
        <a href="https://github.com/Gigacore/React-Redux-Sass-Starter">Fork it on Github</a>
      </span>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Counter;

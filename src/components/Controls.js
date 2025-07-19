import React from "react";
import PropTypes from "prop-types";

const Controls = ({ increment, decrement, reset, resetLabel, incrementLabel, decrementLabel }) => {
  return (
    <div className="controls">
      <div onClick={increment}>
        <span>{incrementLabel}</span>
      </div>
      <div onClick={reset}>
        <span>{resetLabel}</span>
      </div>
      <div onClick={decrement}>
        <span>{decrementLabel}</span>
      </div>
    </div>
  );
};

Controls.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  resetLabel: PropTypes.string,
  incrementLabel: PropTypes.string,
  decrementLabel: PropTypes.string,
};

Controls.defaultProps = {
  resetLabel: "RESET",
  incrementLabel: "+",
  decrementLabel: "-",
};

export default Controls;

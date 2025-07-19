import React from "react";
import { useDispatch } from "react-redux";
import Controls from "../components/Controls";
import { incrementNum, decrementNum, resetCounter } from "../actions/counterActions";

const ControlsContainer = () => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementNum());
  };

  const decrement = () => {
    dispatch(decrementNum());
  };

  const reset = () => {
    dispatch(resetCounter());
  };

  return <Controls increment={increment} decrement={decrement} reset={reset} />;
};

export default ControlsContainer;

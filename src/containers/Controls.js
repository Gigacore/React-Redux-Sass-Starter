import React from "react";
import { useDispatch } from "react-redux";
import Controls from "../components/Controls";
import { increment, decrement, reset } from "../features/counter/counterSlice";

const ControlsContainer = () => {
  const dispatch = useDispatch();

  return (
    <Controls
      increment={() => dispatch(increment())}
      decrement={() => dispatch(decrement())}
      reset={() => dispatch(reset())}
    />
  );
};

export default ControlsContainer;

import React from "react";
import { useSelector } from "react-redux";
import Counter from "../components/Counter";

const CounterContainer = () => {
  const count = useSelector((state) => state.counter.value);
  return <Counter count={count} />;
};

export default CounterContainer;

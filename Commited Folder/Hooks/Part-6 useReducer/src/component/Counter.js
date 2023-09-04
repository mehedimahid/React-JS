import React from "react";
import { Button } from "antd";
import { useReducer } from "react";
const initialState = 5;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function Counter() {
  const [count, dipatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count-{count}</p>
      <Button type="primary" onClick={() => dipatch("increment")}>
        Increment
      </Button>
      <Button type="primary" danger onClick={() => dipatch("decrement")}>
        Decrement
      </Button>
    </div>
  );
}

export default Counter;

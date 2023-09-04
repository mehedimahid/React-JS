import React from "react";
import { Button } from "antd";
import { useReducer } from "react";
const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

function ComplexCounter() {
  const [count, dipatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count-{count.counter}</p>
      <Button
        type="primary"
        onClick={() =>
          dipatch({
            type: "increment",
          })
        }
      >
        Increment
      </Button>
      <Button
        type="primary"
        danger
        onClick={() =>
          dipatch({
            type: "decrement",
          })
        }
      >
        Decrement
      </Button>
    </div>
  );
}

export default ComplexCounter;

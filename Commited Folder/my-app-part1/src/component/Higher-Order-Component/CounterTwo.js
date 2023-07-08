import React, { useState } from "react";

function CounterTwo() {
  // Declare a state variable called "count" and initialize it to 0
  const [count, setCount] = useState(0);

  const increment = () => {
    // Update the value of "count" by incrementing it
    setCount(count + 1);
  };

  const decrement = () => {
    // Update the value of "count" by decrementing it
    count && setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterTwo;

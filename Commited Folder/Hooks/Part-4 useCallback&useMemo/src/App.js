import { useState, useCallback, useMemo } from "react";
import "./App.css";
import Title from "./component/Title";
import ShowCount from "./component/ShowCount";
import Button from "./component/Button";

function App() {
  const [count1, setCount1] = useState(0);
  const [countFive, setCountFive] = useState(0);

  const incrementOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const incrementFive = useCallback(() => {
    setCountFive((prevCount) => prevCount + 5);
  }, []);

  const isEvenorOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div className="App">
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <span>{isEvenorOdd ? "Even" : "Odd"}</span>
      <Button handleClick={incrementOne}> Increment by one</Button>
      <hr />
      <ShowCount count={countFive} title="Counter 2" />
      <Button handleClick={incrementFive}> Increment by five</Button>
    </div>
  );
}

export default App;

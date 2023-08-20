import { useState, useCallback } from "react";
import "./App.css";
import Title from "./component/Title";
import Count from "./component/ShowCount";
import Button from "./component/Button";

function App() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge((prevAge) => prevAge + 1);
  }, []);

  const incrementSalary = useCallback(() => {
    setSalary((prevSalary) => prevSalary + 1000);
  }, []);

  return (
    <div className="App">
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}> increment age</Button>
      <hr />
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}> increment Salary</Button>
    </div>
  );
}

export default App;

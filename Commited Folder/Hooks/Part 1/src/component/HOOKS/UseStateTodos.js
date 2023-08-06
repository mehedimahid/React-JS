import { useState } from "react";

function UseStateTodos() {
  const [todo, setTodos] = useState("");
  const [warning, setWarning] = useState(null);

  const changeHandler = (e) => {
    const inputValue = e.target.value;
    const updateWarning = inputValue.includes(".js")
      ? "You need JavaScrift skill to complete the task. Do you have it?"
      : null;
    setTodos(inputValue);
    setWarning(updateWarning);
  };

  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea name="todo" value={todo} onChange={changeHandler} />
      </p>
      <hr />
      <h2>{warning || "Good Choise"}</h2>
    </div>
  );
}

export default UseStateTodos;

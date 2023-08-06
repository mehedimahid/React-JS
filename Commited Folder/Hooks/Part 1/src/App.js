import "./App.css";
import HookCounter from "./component/HOOKS/HookCounter";
import UseStateTodos from "./component/HOOKS/UseStateTodos";
function App() {
  return (
    <div className="App">
      <UseStateTodos />
      <HookCounter />
    </div>
  );
}

export default App;

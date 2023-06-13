import "./App.css";
import ClickCounter from "./component/Higher-Order-Component/ClickCounter";
import HoverCounter from "./component/Higher-Order-Component/HoverCounter";

function App() {
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;

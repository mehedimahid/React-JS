import "./App.css";
import ClickCounter from "./component/Higher-Order-Component/ClickCounter";
import ClickCounterTwo from "./component/Higher-Order-Component/ClickCounterTwo";
import HoverCounter from "./component/Higher-Order-Component/HoverCounter";
import HoverCounterTwo from "./component/Higher-Order-Component/HoverCounterTwo";

function App() {
  return (
    <div className="App">
      <ClickCounterTwo />
      <HoverCounterTwo />
    </div>
  );
}

export default App;

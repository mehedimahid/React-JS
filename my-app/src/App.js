import "./App.css";
import ClickCounterTwo from "./component/Higher-Order-Component/ClickCounterTwo";
import Counter from "./component/Higher-Order-Component/Counter";
import CounterTwo from "./component/Higher-Order-Component/CounterTwo";

import HoverCounterTwo from "./component/Higher-Order-Component/HoverCounterTwo";

function App() {
  return (
    <div className="App">
      {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter>

      <Counter>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}
      <CounterTwo />
    </div>
  );
}

export default App;

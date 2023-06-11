import "./App.css";
import Errorbounding from "./component/Error/Errorbounding";
import Hero from "./component/Error/Hero";
import Portals from "./component/Portals";

import FRParentInput from "./component/Refs/FRParentInput";

function App() {
  return (
    <div className="App">
      <Errorbounding>
        <Hero HeroName="Batman" />
      </Errorbounding>
      <Errorbounding>
        <Hero HeroName="superman" />
      </Errorbounding>
      <Errorbounding>
        <Hero HeroName="Joker" />
      </Errorbounding>
    </div>
  );
}

export default App;

import "./App.css";
import ComponentC from "./component/Context/ComponentC";
import { UserProvider } from "./component/Context/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Mehedi Hasan">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;

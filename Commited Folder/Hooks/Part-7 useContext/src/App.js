import React from "react";
import ComponentD from "./component/ComponentD";
export const UserContext = React.createContext();
export const SecondContext = React.createContext();

function App() {
  return (
    <div>
      <UserContext.Provider value={"Mehedi"}>
        <SecondContext.Provider value={"Hasan"}>
          <ComponentD />
        </SecondContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

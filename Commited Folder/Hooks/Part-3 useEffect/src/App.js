import { useState } from "react";
import "./App.css";
import MyClassComponent from "./component/MyClassComponent";
import MyFunctionalComponent from "./component/MyFunctionalComponent";

function App() {
  const [show,setShow] = useState(true)
  return (
    <div className="App">
      <div>
         {/* {show && <MyClassComponent />} */}
         {show && <MyFunctionalComponent />}
      </div>
      <p>
        <button type="button" onClick={()=> setShow((prevShow)=>!prevShow)} >
          {show ? 'Hide Post': 'Show Post'}
        </button>
      </p>
    </div>
  );
}

export default App;

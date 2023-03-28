import "./App.css";
// import logo from './logo.svg'
import Hello from "./component/Hello";
// import { Hello } from './component/Hello';
import Welcome from "./component/Welcome";
import Hellojsx from "./component/whyJSX";
import Withoutjsx from "./component/whyJSX";
import Message from "./component/Message";
import Counter from "./component/Counter";
import FunctionClick from "./component/FunctionClick";
import ClassClick from "./component/ClassClick";
import EventBind from "./component/EventBind";
import ParentComponent from "./component/ParentComponent";
import UserGreating from "./component/UserGreating";
import NameList from "./component/NameList";
import StyleSheet from "./component/styleWithCSS/StyleSheet";
import Inline from "./component/styleWithCSS/Inline";
import "./component/styleWithCSS/appStyle.css";
import styles from "./component/styleWithCSS/appStyle.module.css";
import Form from "./component/Form";

function App() {
  return (
    <div className="App">
      {/* <Hello name = 'Diana' heroName = 'Wonder Woman'/>
      <Welcome name = 'Diana ' heroName = 'Wonder Woman'/> */}
      {/* <Counter/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreating/> */}
      {/* <NameList /> */}
      {/* <StyleSheet /> */}
      {/* <Inline /> */}
      {/* <h2 className="error">ERROR</h2>
      <h2 className={styles.success}>Success</h2> */}
      <Form />
    </div>
  );
}

export default App;

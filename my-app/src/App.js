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
import LifeCycleA from "./component/LifeCycle/LifeCycleA";
import ComponentUpdate from "./component/LifeCycle/ComponentUpdate";
import FragmentDemo from "./component/Fragment/FragmentDemo";
import Table from "./component/Fragment/Table";
import RefsDemo from "./component/Refs/RefsDemo";

function App() {
  return (
    <div className="App">
      <RefsDemo />
    </div>
  );
}

export default App;

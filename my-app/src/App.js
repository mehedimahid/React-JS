
import './App.css';
// import logo from './logo.svg'
import Hello from './component/Hello';
// import { Hello } from './component/Hello';
import Welcome from './component/Welcome';
import Hellojsx from './component/whyJSX';
import Withoutjsx from './component/whyJSX';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';

function App() {
  return (
    <div className="App">
      {/* <Hello name = 'Diana' heroName = 'Wonder Woman'/>
      <Welcome name = 'Diana ' heroName = 'Wonder Woman'/> */}
      {/* <Counter/> */}
      {/* <FunctionClick/> */}
      <ClassClick/>
    </div>
  );
}

export default App;

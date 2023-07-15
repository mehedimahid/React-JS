import "./App.css";
import ParentsComp from "./component/Component/ParentsComp";
import PureComp from "./component/Component/PureComp";
import FragmentDemo from "./component/Fragment/FragmentDemo";
import Table from "./component/Fragment/Table";
import RefsDemo from "./component/Refs/RefsDemo";

function AppB() {
  return (
    <div className="App">
      <RefsDemo />
    </div>
  );
}

export default AppB;

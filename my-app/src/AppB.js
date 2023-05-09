import "./App.css";
import ParentsComp from "./component/Component/ParentsComp";
import PureComp from "./component/Component/PureComp";
import FragmentDemo from "./component/Fragment/FragmentDemo";
import Table from "./component/Fragment/Table";

function AppB() {
  return (
    <div className="App">
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* <PureComp /> */}
      <ParentsComp />
    </div>
  );
}

export default AppB;

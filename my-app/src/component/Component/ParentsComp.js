import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";
import MemoComp from "./MemoComp";

class ParentsComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mehedi",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Mehedi",
      });
    }, 2000);
  }

  render() {
    console.log("*********Parent Component Render**********");
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <PureComp name={this.state.name} />
        <RegComp name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentsComp;

import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

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
        name: "Mahid",
      });
    }, 2000);
  }

  render() {
    console.log("*********Parent Component Render**********");
    return (
      <div>
        Parent Component
        <PureComp name={this.state.name} />
        <RegComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentsComp;

import React, { Component } from "react";
import FRInput from "./FRInput";

class FRParentInput extends Component {
  constructor(props) {
    super(props);
    this.inputRefs = React.createRef();
  }
  clickHandelar = () => {
    this.inputRefs.current.focus();
  };
  render() {
    return (
      <div>
        <FRInput ref={this.inputRefs} />
        <button onClick={this.clickHandelar}>Focus Input</button>
      </div>
    );
  }
}

export default FRParentInput;

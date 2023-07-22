import React, { Component } from "react";
import ComponentF from "./ComponentF";
import userContext from "./UserContext";

export class ComponentE extends Component {
  static contextType = userContext;
  render() {
    return (
      <div>
        Component E contextType {this.context}
        <ComponentF />;
      </div>
    );
  }
}
// ComponentE.contextType = userContext;
export default ComponentE;

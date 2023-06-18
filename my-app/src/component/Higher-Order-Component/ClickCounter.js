import React, { Component } from "react";
import UpdateComponent from "./HOC";

class ClickCounter extends Component {
  render() {
    const { count, IncrementCount, name } = this.props;
    return (
      <div>
        <button onClick={IncrementCount}>
          {name} Click {count} times
        </button>
      </div>
    );
  }
}

export default UpdateComponent(ClickCounter, 5);

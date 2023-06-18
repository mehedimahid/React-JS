import React, { Component } from "react";
import UpdateComponent from "./HOC";

class HoverCounter extends Component {
  render() {
    const { count, IncrementCount, name } = this.props;
    return (
      <div>
        <h1 onMouseOver={IncrementCount}>
          {name}Hovered {count} times
        </h1>
      </div>
    );
  }
}

export default UpdateComponent(HoverCounter, 10);

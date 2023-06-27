import React, { Component } from "react";

class HoverCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Mouse Hover {count} Time</h1>
      </div>
    );
  }
}

export default HoverCounterTwo;

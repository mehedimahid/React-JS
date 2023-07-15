import React, { Component } from "react";

const UpdateComponent = (OriginalComponent, IncrementNumber) => {
  class newComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    IncrementCount = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + IncrementNumber,
        };
      });
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          IncrementCount={this.IncrementCount}
          {...this.props}
        />
      );
    }
  }
  return newComponent;
};
export default UpdateComponent;

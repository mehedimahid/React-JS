import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class ComponentUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Hasan",
    };
    console.log("componentUpdating Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("componentUpdating getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("componentUpdating componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("componentUpdating shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevSate) {
    console.log("componentUpdating getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("componentUpdating getSnapshotBeforeUpdate");
  }
  changeState = () => {
    this.setState({
      name: "Mehedi",
    });
  };

  render() {
    console.log("componentUpdating render");
    return (
      <div>
        <div>componentUpdating</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default ComponentUpdate;

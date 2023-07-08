import React, { Component } from "react";

class UserGreating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //    if (this.state.isLoggedIn) {
    //     return <div>Welcome Tom</div>
    //    } else {
    //       return <div>Welcome Guest</div>
    //  }
    // let message
    // if (this.state.isLoggedIn) {
    //    message = <div>Welcome Tom</div>
    // } else {
    //    message = <div>Welcome Guest</div>
    // }
    // return <div>{message }</div>
    // // return message
    //  return this.state.isLoggedIn ? (
    //    <div>Welcome Tom</div>
    //  ) : (
    //    <div>Welcome Guest</div>
    //  );

    //Short-circuit operator
    return this.state.isLoggedIn && <div>Welcome Tom</div>; //Short-circuit operator
  }
}

export default UserGreating;
//tutorial number 16

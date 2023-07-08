import React, { Component } from "react";
// // 1st way
// class RefsDemo extends Component {
//   constructor(props) {
//     super(props);
//     this.inputRefs = React.createRef();
//   }
//   componentDidMount() {
//     this.inputRefs.current.focus();
//     console.log(this.inputRefs);
//   }
//   clickHandler = () => {
//     this.inputRefs.current.style.color = "red";
//     this.inputRefs.current.style.backgroundColor = "black";
//     console.log(this.inputRefs.current.value);
//   };
//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.inputRefs} />
//         <button onClick={this.clickHandler}>Click Here</button>
//       </div>
//     );
//   }
// }
// //2nd way
class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRefs = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }
  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }
    console.log(this.inputRefs);
  }

  clickHandler = () => {
    alert(this.cbRef.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click Here</button>
      </div>
    );
  }
}

export default RefsDemo;

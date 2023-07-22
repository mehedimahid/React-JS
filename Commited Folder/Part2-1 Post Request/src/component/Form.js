import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: "react",
    };
  }
  userNameChangehandelar = (event) => {
    this.setState({
      // [event.target.name]: event.target.value,
      username: event.target.value,
    });
    // console.log(event.target.value)
  };

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
    event.preventDefault();
  };
  render() {
    const { username, comment, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName : </label>
          <input
            type="text"
            value={username}
            onChange={this.userNameChangehandelar}
          ></input>
        </div>
        <div>
          <label>Comment : </label>
          <textarea
            type="text"
            value={comment}
            onChange={this.handleCommentChange}
          />
        </div>
        <div>
          <label>Topic: </label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;

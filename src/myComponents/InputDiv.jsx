import React, { Component } from "react";

export default class InputDiv extends Component {
  constructor(props) {
    super(props);
    this.state = { userText: "", dateCreated: "" };
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.userText) {
      let { userText, dateCreated } = this.state;
      dateCreated = Date.now().toString();
      this.setState({ dateCreated: Date.now() });
      const userInfo = { userText: userText, dateCreated: dateCreated };
      this.sendData(userInfo);
      this.setState({ userText: "" });
    }
  }

  sendData(message) {
    this.props.parentCallback(message);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ userText: value, dateCreated: "" });
  }

  render() {
    return (
      <div id="inputDiv">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <legend>My Notes App</legend>
          <textarea
            value={this.state.userText}
            placeholder="write stuff"
            onChange={(event) => {
              this.handleChange(event);
            }}
          />
          <input type="submit" name="add" value="add" />
        </form>
      </div>
    );
  }
}

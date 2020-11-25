import React, { Component } from "react";

export default class InputDiv extends Component {
  constructor(props) {
    super(props);
    this.state = { userText: "", dateCreated: "", userTitle: "" };
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.userText) {
      let { userText, dateCreated, userTitle } = this.state;
      dateCreated = Date.now().toString();
      this.setState({ dateCreated: Date.now() });
      const userInfo = {
        userText: userText,
        dateCreated: dateCreated,
        userTitle: userTitle,
      };
      this.sendData(userInfo);
      this.setState({ userText: "", userTitle: "" });
    }
  }

  sendData(message) {
    this.props.parentCallback(message);
  }

  handleChangeInText(event) {
    const value = event.target.value;
    this.setState({ userText: value, dateCreated: "" });
  }

  handleChangeInTitle(event) {
    const value = event.target.value;
    this.setState({ userTitle: value });
  }

  render() {
    return (
      <div id="inputDiv">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <legend>My Notes App</legend>
          <input
            className="titleInput"
            value={this.state.userTitle}
            placeholder="enter title (if you want)"
            onChange={(event) => {
              this.handleChangeInTitle(event);
            }}
          ></input>
          <textarea
            value={this.state.userText}
            placeholder="write stuff"
            onChange={(event) => {
              this.handleChangeInText(event);
            }}
          />
          <input className="textInput" type="submit" name="add" value="add" />
        </form>
      </div>
    );
  }
}

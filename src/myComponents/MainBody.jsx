import React, { Component } from "react";
import InputDiv from "./InputDiv";
import CardsList from "./CardsList";

export default class MainBody extends Component {
  constructor(props) {
    super(props);
    this.state = { notesArray: [] };
  }

  callbackFunction = (childData) => {
    this.setState((state) => {
      return { notesArray: [childData, ...state.notesArray] };
    });
  };

  render() {
    return (
      <div className="mainBody">
        this is the main body
        <InputDiv parentCallback={this.callbackFunction} />
        <CardsList data={this.state.notesArray} />
      </div>
    );
  }
}

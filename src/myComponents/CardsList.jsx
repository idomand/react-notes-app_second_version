import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
import CardItem from "./CardItem";

export default class CardsList extends Component {
  constructor(props) {
    super(props);
    this.state = { cardToDelete: "" };
  }

  deleteCardWithKey = (keyNumber) => {
    this.setState({ cardToDelete: keyNumber });
    this.props.data.forEach((element) => {
      let index;
      if (element.dateCreated === keyNumber) {
        index = this.props.data.indexOf(element);
        this.props.data.splice(index, 1);
      }
    });
  };
  render() {
    const results = this.props.data.map((element) => {
      return (
        <li key={element.dateCreated}>
          <CardItem
            text={element.userText}
            newId={element.dateCreated}
            DeleteCallback={this.deleteCardWithKey}
          />
        </li>
      );
    });
    return <ul className="class-list">{results}</ul>;
  }
}

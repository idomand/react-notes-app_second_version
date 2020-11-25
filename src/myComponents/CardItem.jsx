import React, { Component } from "react";

export default class cardItem extends Component {
  constructor(props) {
    super(props);
    this.state = { newId: props.newId };
  }

  getDate() {
    const dateNow = new Date();
    return (
      <p>
        {dateNow.toDateString()} {dateNow.getHours()}:{dateNow.getMinutes()}
      </p>
    );
  }

  deleteCard() {
    this.props.DeleteCallback(this.state.newId);
  }

  render() {
    return (
      <div className="card-item">
        <div className="card-top">
          {this.getDate()}
          <button
            onClick={() => {
              this.deleteCard();
            }}
          >
            Delete
          </button>
        </div>
        <div className="card-bottom">{this.props.text}</div>
      </div>
    );
  }
}

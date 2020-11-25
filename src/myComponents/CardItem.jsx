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
    const time = new Date(parseInt(this.props.timeCreated));
    const newTime = time.toLocaleString();

    return (
      <div className="card-item">
        <div className="card-top">
          <h4> {this.props.title}</h4>
          {newTime}
          <button
            className="delete-button"
            onClick={() => {
              this.deleteCard();
            }}
          >
            X
          </button>
        </div>
        <div className="card-bottom">{this.props.text}</div>
      </div>
    );
  }
}

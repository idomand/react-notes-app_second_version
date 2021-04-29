import React, { useState } from "react";
import moment from "moment";
import "./CreateCard.css";

export default function CreateCard({ parentCallback }) {
  const [cardText, setCardText] = useState("");
  // const [timeCreated, setTimeCreated] = useState(null);
  // const [dateCreated, setDateCreated] = useState("");
  const [cardTitle, setCardTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cardText) {
      const TIME = moment().format("MMMM Do YYYY, h:mm:ss a");
      // const newTime = new Date().toString();
      const cardInfo = {
        cardText: cardText,
        dateCreated: TIME,
        cardTitle: cardTitle,
      };
      sendData(cardInfo);
      setCardText("");
      setCardTitle("");
    }
  };

  const sendData = (message) => {
    parentCallback(message);
  };

  return (
    <div className="input-wrapper">
      <form onSubmit={(event) => handleSubmit(event)}>
        <legend>To Do App</legend>
        <input
          className="title-input"
          value={cardTitle}
          placeholder="enter title (optional)"
          onChange={(event) => {
            setCardTitle(event.target.value);
          }}
        ></input>
        <textarea
          value={cardText}
          placeholder="write note here"
          onChange={(event) => {
            setCardText(event.target.value);
          }}
        />
        <input className="text-input" type="submit" name="add" value="add" />
      </form>
    </div>
  );
}

import React, { useState } from "react";
import CardModal from "../CardModal/CardModal";
import moment from "moment";
import "./CardItem.scss";

export default function CardItem({
  text,
  title,
  newId,
  timeCreated,
  DeleteCallback,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [cardTitle, setCardTitle] = useState(title);
  const [cardText, setCardText] = useState(text);
  const [timeToDisplay, setTimeToDisplay] = useState(timeCreated);
  // const [timeHolder] = useState(new Date(parseInt(timeCreated)));
  // const [timeDisplay, setTimeDisplay] = useState(timeHolder.toLocaleString());

  function deleteCard() {
    DeleteCallback(newId);
  }
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const changeInModalCallback = (element, value) => {
    if (element === "cardTitle") {
      setCardTitle(value);
    } else if (element === "cardText") {
      setCardText(value);
    }
    const newCreatedAtTime = moment().format("MMMM Do YYYY, h:mm:ss a");

    setTimeToDisplay(newCreatedAtTime);
  };

  return (
    <div className="card-item">
      <div className="card-top">
        <div className="card-header">
          <h4>Title:</h4>
          <div className="card-item-title">
            <h4> {cardTitle || "Task note"}</h4>
          </div>
          <div>
            {" "}
            <button
              className="my-button"
              onClick={() => {
                deleteCard();
              }}
            >
              Delete
            </button>
            <button className="my-button" onClick={openModal}>
              edit
            </button>
          </div>
        </div>
        {timeToDisplay}
      </div>
      <div className="card-bottom">
        <p>{cardText}</p>
      </div>

      <CardModal
        cardTitle={cardTitle}
        cardText={cardText}
        status={isOpen}
        closeModal={closeModal}
        timeCreated={timeToDisplay}
        changeInModalCallback={changeInModalCallback}
      />
    </div>
  );
}

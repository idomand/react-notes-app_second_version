import React, { useState } from "react";
import CardModal from "../CardModal/CardModal";
import moment from "moment";
import "./CardItem.css";
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
        <h4> {cardTitle}</h4>
        {timeToDisplay}
        <button
          className="my-button"
          onClick={() => {
            deleteCard();
          }}
        >
          X
        </button>
        <button className="my-button" onClick={openModal}>
          info
        </button>
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

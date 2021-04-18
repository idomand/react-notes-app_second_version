import React, { useState } from "react";
import Modal from "./Modal";

export default function CardItem(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [userTitle, setUserTitle] = useState(props.title);
  const [userText, setUserText] = useState(props.text);
  const [timeHolder] = useState(new Date(parseInt(props.timeCreated)));
  const [timeDisplay, setTimeDisplay] = useState(timeHolder.toLocaleString());

  function deleteCard() {
    props.DeleteCallback(props.newId);
  }
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const changeInModalCallback = (element, value) => {
    if (element === "userTitle") {
      setUserTitle(value);
    } else if (element === "userText") {
      setUserText(value);
    }
    setTimeDisplay(new Date().toLocaleString());
  };

  return (
    <div className="card-item">
      <div className="card-top">
        <h4> {userTitle}</h4>
        {timeDisplay}
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
        <p>{userText}</p>
      </div>

      <Modal
        title={userTitle}
        text={userText}
        status={isOpen}
        closeModal={closeModal}
        timeCreated={timeDisplay}
        changeInModalCallback={changeInModalCallback}
      />
    </div>
  );
}

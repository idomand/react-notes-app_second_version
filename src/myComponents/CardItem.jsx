import React, { useState } from "react";
import Modal from "./Modal";

export default function CardItem(props) {
  const [isOpen, setIsOpen] = useState(false);
  function deleteCard() {
    props.DeleteCallback(props.newId);
  }

  const time = new Date(parseInt(props.timeCreated));
  const newTime = time.toLocaleString();

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="card-item">
      <div className="card-top">
        <h4> {props.title}</h4>
        {newTime}
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
        <p>{props.text}</p>
      </div>

      <Modal
        title={props.title}
        text={props.text}
        status={isOpen}
        closeModal={closeModal}
        timeCreated={newTime}
      />
    </div>
  );
}

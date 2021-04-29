import React, { useState } from "react";
import ModalInput from "../ModalInput/ModalInput";
import "./CardModal.css";
export default function CardModal({
  cardTitle,
  cardText,
  status,
  closeModal,
  timeCreated,
  changeInModalCallback,
}) {
  const [isEdit, setIsEdit] = useState(false);
  if (status === false) {
    return null;
  }

  const editMode = () => {
    setIsEdit(!isEdit);
  };

  return (
    <>
      <div className="overlays"></div>
      <div className="modal-wrapper">
        <div className="modal-container">
          <div className="card-item">
            <div className="card-top">
              <h4>{cardTitle}</h4>
              {timeCreated}
            </div>
            <div className="card-bottom">
              <p>{cardText}</p>
            </div>
          </div>
          <button className="my-button" onClick={closeModal}>
            {" "}
            Close
          </button>
          <button className="my-button" onClick={editMode}>
            {" "}
            Edit
          </button>

          {!isEdit ? null : (
            <ModalInput
              changeInModalCallback={changeInModalCallback}
              cardText={cardText}
              cardTitle={cardTitle}
            />
          )}
        </div>
      </div>
    </>
  );
}

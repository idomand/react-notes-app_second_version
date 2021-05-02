import React, { useState } from "react";
import ModalInput from "../ModalInput/ModalInput";
import "./CardModal.scss";
export default function CardModal({
  cardTitle,
  cardText,
  status,
  closeModal,
  timeCreated,
  changeInModalCallback,
}) {
  const [isEdit, setIsEdit] = useState(true);
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
          <button className="my-button hvr-grow-rotate" onClick={closeModal}>
            {" "}
            X
          </button>
          <div className="card-item">
            <div className="card-top">
              <div className="card-header">
                <h4>Title:</h4>
                <h4> {cardTitle || "Task note"}</h4>
                <div></div>
              </div>

              {timeCreated}
            </div>
            <div className="card-bottom">
              <p>{cardText}</p>
            </div>
          </div>
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

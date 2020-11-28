import React, { useState } from "react";
import ModalInput from "./ModalInput";

export default function Modal(props) {
  const [isEdit, setIsEdit] = useState(false);
  if (props.status === false) {
    return null;
  }

  const editMode = () => {
    setIsEdit(!isEdit);
  };

  return (
    <>
      <div className="overlays"></div>
      <div className="modal">
        <div className="modalDiv">
          <div className="card-item">
            <div className="card-top">
              <h4>{props.title}</h4>
              {props.timeCreated}
            </div>
            <div className="card-bottom">
              <p>{props.text}</p>
            </div>
          </div>
          <button onClick={props.closeModal}> Close</button>
          <button onClick={editMode}> Edit</button>

          {!isEdit ? null : (
            <ModalInput
              changeInModalCallback={props.changeInModalCallback}
              userText={props.text}
              userTitle={props.title}
            />
          )}
        </div>
      </div>
    </>
  );
}

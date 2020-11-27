import React, { useState } from "react";

export default function Modal(props) {
  const [isEdit, setIsEdit] = useState(false);
  if (props.status === false) {
    return null;
  }

  const editMode = () => {
    console.log("openEditMode");
    setIsEdit(true);
    console.log("isEdit", isEdit);
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
        </div>
      </div>
    </>
  );
}

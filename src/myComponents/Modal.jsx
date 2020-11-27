// import React, { Component } from "react";

// export default class Modal extends Component {
//   render() {
//     return <div>my model</div>;
//   }
// }

import React from "react";

export default function Modal(props) {
  if (props.status === false) {
    return null;
  }

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
          <button onClick={props.closeModal}> close modal</button>
        </div>
      </div>
    </>
  );
}

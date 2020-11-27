// import React, { Component } from "react";
// import Modal from "./Modal";

// export default class cardItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { newId: props.newId, isOpen: false };
//   }
//   getDate() {
//     const dateNow = new Date();
//     return (
//       <p>
//         {dateNow.toDateString()} {dateNow.getHours()}:{dateNow.getMinutes()}
//       </p>
//     );
//   }

//   deleteCard() {
//     this.props.DeleteCallback(this.state.newId);
//   }

//   openModel() {
//     this.setState({ isOpen: true });
//   }
//   closeModal = () => {
//     console.log("this :>> ", this);
//     this.setState({ isOpen: false });
//     console.log("this.state.inOpen :>> ", this.state.inOpen);
//   };
//   render() {
//     const time = new Date(parseInt(this.props.timeCreated));
//     const newTime = time.toLocaleString();

//     console.log("render");

//     return (
//       <div
//         className="card-item"
//         onClick={() => {
//           this.openModel();
//         }}
//       >
//         <div className="card-top">
//           <h4> {this.props.title}</h4>
//           {newTime}
//           <button
//             className="delete-button"
//             onClick={() => {
//               this.deleteCard();
//             }}
//           >
//             X
//           </button>
//         </div>
//         <div className="card-bottom">{this.props.text}</div>

//         <p>test--start</p>
//         <Modal status={this.state.isOpen} closeModal={this.closeModal} />
//         <p>test--start</p>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";
import Modal from "./Modal";

export default function CardItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  // function getDate() {
  //   const dateNow = new Date();
  //   return (
  //     <p>
  //       {dateNow.toDateString()} {dateNow.getHours()}:{dateNow.getMinutes()}
  //     </p>
  //   );
  // }

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

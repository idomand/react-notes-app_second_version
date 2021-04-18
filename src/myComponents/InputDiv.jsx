import React, { useState } from "react";
import moment from "moment";

export default function InputDiv({ parentCallback }) {
  const [userText, setUserText] = useState("");
  // const [timeCreated, setTimeCreated] = useState(null);
  const [dateCreated, setDateCreated] = useState("");
  const [userTitle, setUserTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userText) {
      const TIME = moment().format("MMMM Do YYYY, h:mm:ss a");
      const newTime = new Date().toString();
      const userInfo = {
        userText: userText,
        dateCreated: TIME,
        userTitle: userTitle,
      };
      console.log("userInfo :>> ", userInfo);
      sendData(userInfo);
      setUserText("");
      setUserTitle("");
    }
  };

  const sendData = (message) => {
    parentCallback(message);
  };
  const handleChangeInText = (event) => {
    const value = event.target.value;
    setUserText(value);
    setDateCreated("");
  };
  const handleChangeInTitle = (event) => {
    const value = event.target.value;
    setUserTitle(value);
  };

  return (
    <div id="inputDiv">
      <form onSubmit={(event) => handleSubmit(event)}>
        <legend>My Notes App -- updated version</legend>
        <input
          className="titleInput"
          value={userTitle}
          placeholder="enter title (optional)"
          onChange={(event) => {
            handleChangeInTitle(event);
          }}
        ></input>
        <textarea
          value={userText}
          placeholder="write note here"
          onChange={(event) => {
            handleChangeInText(event);
          }}
        />
        <input className="textInput" type="submit" name="add" value="add" />
      </form>
    </div>
  );
}

// import React, { Component } from "react";

// export default class InputDiv extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { userText: "", dateCreated: "", userTitle: "" };
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     if (this.state.userText) {
//       let { userText, dateCreated, userTitle } = this.state;
//       dateCreated = Date.now().toString();
//       this.setState({ dateCreated: Date.now() });
//       const userInfo = {
//         userText: userText,
//         dateCreated: dateCreated,
//         userTitle: userTitle,
//       };
//       this.sendData(userInfo);
//       this.setState({ userText: "", userTitle: "" });
//     }
//   }

//   sendData(message) {
//     this.props.parentCallback(message);
//   }

//   handleChangeInText(event) {
//     const value = event.target.value;
//     this.setState({ userText: value, dateCreated: "" });
//   }

//   handleChangeInTitle(event) {
//     const value = event.target.value;
//     this.setState({ userTitle: value });
//   }

//   render() {
//     return (
//       <div id="inputDiv">
//         <form onSubmit={(event) => this.handleSubmit(event)}>
//           <legend>My Notes App</legend>
//           <input
//             className="titleInput"
//             value={this.state.userTitle}
//             placeholder="enter title (optional)"
//             onChange={(event) => {
//               this.handleChangeInTitle(event);
//             }}
//           ></input>
//           <textarea
//             value={this.state.userText}
//             placeholder="write note here"
//             onChange={(event) => {
//               this.handleChangeInText(event);
//             }}
//           />
//           <input className="textInput" type="submit" name="add" value="add" />
//         </form>
//       </div>
//     );
//   }
// }

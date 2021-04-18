import React, { useState } from "react";
import moment from "moment";

export default function InputDiv({ parentCallback }) {
  const [userText, setUserText] = useState("");
  // const [timeCreated, setTimeCreated] = useState(null);
  // const [dateCreated, setDateCreated] = useState("");
  const [userTitle, setUserTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userText) {
      const TIME = moment().format("MMMM Do YYYY, h:mm:ss a");
      // const newTime = new Date().toString();
      const userInfo = {
        userText: userText,
        dateCreated: TIME,
        userTitle: userTitle,
      };
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
    // setDateCreated("");
  };
  const handleChangeInTitle = (event) => {
    const value = event.target.value;
    setUserTitle(value);
  };

  return (
    <div id="inputDiv">
      <form onSubmit={(event) => handleSubmit(event)}>
        <legend>To Do App</legend>
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

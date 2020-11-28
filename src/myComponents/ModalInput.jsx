import React, { useState } from "react";

export default function ModalInput(props) {
  const [userTitle, setUserTitle] = useState(props.userTitle);
  const [userText, setUserText] = useState(props.userText);
  //
  //
  const submitUpdate = (event) => {
    event.preventDefault();
    props.changeInModalCallback("userTitle", userTitle);
    props.changeInModalCallback("userText", userText);
  };
  const changeHandler = (event, element) => {
    if (element === "userTitle") {
      setUserTitle(event.target.value);
    } else if (element === "userText") {
      setUserText(event.target.value);
    }
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          submitUpdate(event);
        }}
      >
        <input
          type="text"
          placeholder={userTitle}
          onChange={(event) => {
            changeHandler(event, "userTitle");
          }}
        />
        <input
          type="text"
          placeholder={userText}
          onChange={(event) => {
            changeHandler(event, "userText");
          }}
        />

        <input type="submit" name="update" />
      </form>
    </>
  );
}

import React, { useState } from "react";

export default function ModalInput(props) {
  const [userTitle, setUserTitle] = useState(props.userTitle);
  const [userText, setUserText] = useState(props.userText);

  const submitUpdate = (event) => {
    event.preventDefault();

    if (userTitle !== props.userTitle || userText !== props.userText) {
      props.changeInModalCallback("userTitle", userTitle);
      props.changeInModalCallback("userText", userText);
    }
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
        className="modelInput"
        onSubmit={(event) => {
          submitUpdate(event);
        }}
      >
        <div>
          <span>update title:</span>
          <input
            type="text"
            placeholder={userTitle}
            onChange={(event) => {
              changeHandler(event, "userTitle");
            }}
          />
        </div>
        <div>
          <span>update text:</span>

          <input
            type="text"
            placeholder={userText}
            onChange={(event) => {
              changeHandler(event, "userText");
            }}
          />
        </div>

        <input type="submit" name="update" className="my-button" />
      </form>
    </>
  );
}

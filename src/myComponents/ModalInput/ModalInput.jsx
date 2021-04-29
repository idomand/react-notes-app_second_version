import React, { useState } from "react";
import "./ModalInput.css";
export default function ModalInput({
  changeInModalCallback,
  cardTitle,
  cardText,
}) {
  const [newCardTitle, setNewCardTitle] = useState(cardTitle);
  const [newCardText, setNewCardText] = useState(cardText);

  const submitUpdate = (event) => {
    event.preventDefault();
    console.log("newCardTitle :>> ", newCardTitle);
    console.log("cardTitle :>> ", cardTitle);
    console.log("newCardText :>> ", newCardText);
    console.log("cardText :>> ", cardText);
    if (cardTitle !== newCardTitle || cardText !== newCardText) {
      changeInModalCallback("cardTitle", newCardTitle);
      changeInModalCallback("cardText", newCardText);
    }
  };
  const changeHandler = (event, element) => {
    if (element === "cardText") {
      setNewCardText(event.target.value);
    } else if (element === "cardTitle") {
      setNewCardTitle(event.target.value);
    }
  };

  return (
    <>
      <form
        className="model-input"
        onSubmit={(event) => {
          submitUpdate(event);
        }}
      >
        <div>
          <span>update title:</span>
          <input
            type="text"
            placeholder={cardTitle}
            onChange={(event) => {
              changeHandler(event, "cardTitle");
            }}
          />
        </div>
        <div>
          <span>update text:</span>

          <input
            type="text"
            placeholder={cardText}
            onChange={(event) => {
              changeHandler(event, "cardText");
            }}
          />
        </div>

        <input type="submit" name="update" className="my-button" />
      </form>
    </>
  );
}

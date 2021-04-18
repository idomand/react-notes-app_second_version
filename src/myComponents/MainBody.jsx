import React, { useState } from "react";
import InputDiv from "./InputDiv";
import CardsList from "./CardsList";

export default function MainBody() {
  const [notesArray, setNotesArray] = useState([]);

  const callbackFunction = (childData) => {
    setNotesArray([childData, ...notesArray]);
  };
  return (
    <div className="mainBody">
      <InputDiv parentCallback={callbackFunction} />
      <CardsList notesArray={notesArray} />
    </div>
  );
}

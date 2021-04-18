import React, { useState } from "react";
import InputDiv from "../src/myComponents/InputDiv";
import CardsList from "../src/myComponents/CardsList";

export default function App() {
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

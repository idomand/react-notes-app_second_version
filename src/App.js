import React, { useState } from "react";
import InputDiv from "../src/myComponents/InputDiv/InputDiv";
import CardsList from "../src/myComponents/CardsList/CardsList";

export default function App() {
  const [notesArray, setNotesArray] = useState([]);

  const callbackFunction = (childData) => {
    setNotesArray([childData, ...notesArray]);
  };
  return (
    <div className="main-wrapper">
      <InputDiv parentCallback={callbackFunction} />
      <CardsList notesArray={notesArray} />
    </div>
  );
}

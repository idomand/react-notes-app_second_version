import React, { useState, useEffect } from "react";
import CreateCard from "./myComponents/CreateCard/CreateCard";
import CardsList from "../src/myComponents/CardsList/CardsList";
import localForage from "localforage";

export default function App() {
  const [cardsArray, setCardsArray] = useState([]);
  const [numberOfNotes, setNumberOfNotes] = useState(0);

  useEffect(() => {
    localForage.length().then((result) => {
      setNumberOfNotes(result);
    });
  }, [cardsArray]);

  useEffect(() => {
    localForage.iterate((value) => {
      setCardsArray((cardsArray) => [value, ...cardsArray]);
    });
  }, []);

  const callbackFunction = (childData) => {
    setCardsArray([childData, ...cardsArray]);
  };
  return (
    <div className="main-wrapper">
      <CreateCard parentCallback={callbackFunction} />
      <h1>
        number of notes: <strong>{numberOfNotes}</strong>
      </h1>
      <CardsList cardsArray={cardsArray} />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import CreateCard from "./myComponents/CreateCard/CreateCard";
import CardsList from "../src/myComponents/CardsList/CardsList";
import localForage from "localforage";

export default function App() {
  const [cardsArray, setCardsArray] = useState([]);
  console.log(`cardsArray`, cardsArray);

  useEffect(() => {
    localForage.length().then((result) => {
      console.log(`result`, result);
    });
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
      <CardsList cardsArray={cardsArray} />
    </div>
  );
}

import React, { useState } from "react";
import CreateCard from "./myComponents/CreateCard/CreateCard";
import CardsList from "../src/myComponents/CardsList/CardsList";

export default function App() {
  const [cardsArray, setCardsArray] = useState([]);

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

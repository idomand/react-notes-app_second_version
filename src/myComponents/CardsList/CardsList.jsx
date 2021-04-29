import React, { useState } from "react";
import CardItem from "../CardItem/CardItem";
import "./CardsList.css";
export default function CardsList({ cardsArray }) {
  const [, setCardToDelete] = useState("");

  const deleteCardWithKey = (keyNumber) => {
    setCardToDelete(keyNumber);
    cardsArray.forEach((element) => {
      let index;
      if (element.dateCreated === keyNumber) {
        index = cardsArray.indexOf(element);
        cardsArray.splice(index, 1);
      }
    });
  };

  const results = cardsArray.map((element) => {
    console.log("element :>> ", element);
    return (
      <li key={element.dateCreated}>
        <CardItem
          text={element.cardText}
          title={element.cardTitle}
          newId={element.dateCreated}
          timeCreated={element.dateCreated}
          DeleteCallback={deleteCardWithKey}
        />
      </li>
    );
  });
  return <ul className="class-list">{results}</ul>;
}

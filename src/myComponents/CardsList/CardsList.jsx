import React, { useState } from "react";
import CardItem from "../CardItem/CardItem";
import "./CardsList.scss";
import localForage from "localforage";

export default function CardsList({ cardsArray }) {
  const [, setCardToDelete] = useState("");

  const deleteCardWithKey = (keyNumber) => {
    console.log("keyNumber :>> ", keyNumber);
    setCardToDelete(keyNumber);
    cardsArray.forEach((element) => {
      let index;
      if (element.dateCreated === keyNumber) {
        localForage.removeItem(keyNumber);
        index = cardsArray.indexOf(element);
        cardsArray.splice(index, 1);
      }
    });
  };

  const results = cardsArray.map((element) => {
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

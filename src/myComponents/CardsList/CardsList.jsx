import React, { useState } from "react";
import CardItem from "../CardItem/CardItem";
import "./CardsList.css";
export default function CardsList({ notesArray }) {
  const [, setCardToDelete] = useState("");

  const deleteCardWithKey = (keyNumber) => {
    setCardToDelete(keyNumber);
    notesArray.forEach((element) => {
      let index;
      if (element.dateCreated === keyNumber) {
        index = notesArray.indexOf(element);
        notesArray.splice(index, 1);
      }
    });
  };

  const results = notesArray.map((element) => {
    return (
      <li key={element.dateCreated}>
        <CardItem
          text={element.userText}
          title={element.userTitle}
          newId={element.dateCreated}
          timeCreated={element.dateCreated}
          DeleteCallback={deleteCardWithKey}
        />
      </li>
    );
  });
  return <ul className="class-list">{results}</ul>;
}

import React from "react";
import useItem from "../hooks/useItem";
import ExpertiseItem from "./ExpertiseItem";
import Heading from "./Heading";
import Item from "./Item";

const ExpertiseBlock = () => {
  const { items, addItem, removeItem } = useItem([
    {
      id: 0,
      value: "React",
    },
    {
      id: 1,
      value: "Tailwindcss",
    },
    {
      id: 2,
      value: "Firebase",
    },
  ]);

  return (
    <div>
      <button onClick={addItem}>
        <Heading>Expertise</Heading>
      </button>
      <ul className="space-y-2">
        {items.map((item) => (
          <ExpertiseItem key={item.id} item={item} removeItem={removeItem} />
        ))}
      </ul>
    </div>
  );
};

export default ExpertiseBlock;

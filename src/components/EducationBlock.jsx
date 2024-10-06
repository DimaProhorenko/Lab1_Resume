import React from "react";
import useItem from "../hooks/useItem";
import EducationItem from "./EducationItem";
import Heading from "./Heading";

const EducationBlock = () => {
  const { items, addItem, removeItem } = useItem([
    {
      id: 0,
      studyPlace: "Odessa National Polytechnik University",
      year: "2017 - 2022",
    },
    {
      id: 1,
      studyPlace: "Odessa National Ecology University",
      year: "2024 - now",
    },
  ]);

  console.log(items);

  return (
    <div>
      <button onClick={addItem}>
        <Heading>Education</Heading>
      </button>
      <ul className="space-y-2">
        {items.map((item) => (
          <EducationItem
            key={item.id}
            id={item.id}
            onRemoveItem={removeItem}
            className="font-bold"
            studyPlace={item.studyPlace}
            year={item.year}
          />
        ))}
      </ul>
    </div>
  );
};

export default EducationBlock;

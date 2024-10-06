import React from "react";
import useItem from "../../hooks/useItem";
import Heading from "../Heading";
import WorkItem from "../Work/WorkItem";

const WorkBlock = () => {
  const { items, removeItem, addItem } = useItem([
    {
      id: 1,
      yearStart: 2020,
      yearEnd: 2021,
      company: "Comfort Technology",
      position: "Sales Manager",
    },
    {
      id: 2,
      yearStart: 2021,
      yearEnd: 2024,
      company: "Comfy Trade",
      position: "Product display specialist",
    },
    {
      id: 3,
      yearStart: 2024,
      yearEnd: "now",
      company: "Comfy Trade",
      position: "Internal security specialist",
    },
  ]);
  return (
    <div>
      <button onClick={addItem}>
        <Heading>Work</Heading>
      </button>
      <ul className="space-y-8">
        {items.map((item) => (
          <WorkItem key={item.id} item={item} onDelete={removeItem} />
        ))}
      </ul>
    </div>
  );
};

export default WorkBlock;

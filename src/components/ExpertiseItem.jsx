import React from "react";
import Item from "./Item";

const ExpertiseItem = ({ item, removeItem }) => {
  return (
    <Item
      key={item.id}
      id={item.id}
      onRemoveItem={removeItem}
      value={item.value}
    />
  );
};

export default ExpertiseItem;

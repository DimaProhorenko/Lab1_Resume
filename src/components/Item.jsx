import React from "react";
import InputWithDeleteButton from "./InputWithDeleteButton";

const Item = ({ type = "text", id, onRemoveItem, ...props }) => {
  return (
    <li>
      <InputWithDeleteButton id={id} onRemove={onRemoveItem} {...props} />
    </li>
  );
};

export default Item;

import React from "react";
import useHoverDeleteButton from "../hooks/useHoverDeleteButton";
import Input from "./Input";
import DeleteButton from "./Utilities/DeleteButton";

const InputWithDeleteButton = ({ id, onRemove, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } =
    useHoverDeleteButton();

  return (
    <div
      className="flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Input {...props} />
      {isHovered && <DeleteButton id={id} onDelete={onRemove} />}
    </div>
  );
};

export default InputWithDeleteButton;

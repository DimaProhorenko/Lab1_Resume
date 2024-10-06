import React from "react";
import useHoverDeleteButton from "../hooks/useHoverDeleteButton";
import Input from "./Input";
import DeleteButton from "./Utilities/DeleteButton";

const EducationItem = ({ id, onRemoveItem, studyPlace, year, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } =
    useHoverDeleteButton();

  return (
    <li
      className="flex items-center w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex-1">
        <Input className="font-semibold text-lg" value={studyPlace} />
        <Input className="text-sm text-stone-600" value={year} />
      </div>
      {isHovered && <DeleteButton id={id} onDelete={onRemoveItem} />}
    </li>
  );
};

export default EducationItem;

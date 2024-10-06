import React from "react";
import useHoverDeleteButton from "../../hooks/useHoverDeleteButton";
import Input from "../Input";
import DeleteButton from "../Utilities/DeleteButton";

const WorkItem = ({ onDelete, item }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } =
    useHoverDeleteButton();

  const { id, yearStart, yearEnd, company, position } = item;
  return (
    <div
      className="flex gap-4 items-stretch"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        {yearStart} <span className="block text-center">-</span> {yearEnd}
      </div>
      <div className="w-0.5 bg-orange-300"></div>
      <div>
        <Input className="font-semibold text-2xl" value={company} />
        <Input value={position} className="text-xl text-stone-600" />
      </div>
      {isHovered && (
        <DeleteButton
          id={id}
          onDelete={() => {
            onDelete(id);
          }}
        />
      )}
    </div>
  );
};

export default WorkItem;

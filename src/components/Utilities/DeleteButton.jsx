import React from "react";

const DeleteButton = ({ id, onDelete }) => {
  return (
    <button
      onClick={() => {
        onDelete(id);
      }}
      className="text-red-500"
    >
      X
    </button>
  );
};

export default DeleteButton;

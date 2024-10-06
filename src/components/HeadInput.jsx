import React from "react";
import Input from "./Input";

const HeadInput = ({ ...props }) => {
  return (
    <h1 className="font-bold text-4xl sm:text-6xl">
      <Input {...props} />
    </h1>
  );
};

export default HeadInput;

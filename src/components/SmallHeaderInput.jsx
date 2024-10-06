import React from "react";
import Input from "./Input";

const SmallHeaderInput = ({ ...props }) => {
  return (
    <h1 className="font-medium text-2xl">
      <Input {...props} />
    </h1>
  );
};

export default SmallHeaderInput;

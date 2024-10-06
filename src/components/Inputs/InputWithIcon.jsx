import React from "react";
import Input from "../Input";

const InputWithIcon = ({ Icon, ...props }) => {
  return (
    <div className="flex items-center gap-2">
      <Icon className="w-5" />
      <Input {...props} />
    </div>
  );
};

export default InputWithIcon;

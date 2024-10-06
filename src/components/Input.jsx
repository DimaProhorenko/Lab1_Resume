import React, { useState } from "react";

const Input = ({
  className,
  type = "text",
  name = "name",
  value = "Type something",
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);
  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <input
      className={`w-full block bg-transparent text-gray-900 ${className} focus:outline-none whitespace-normal break-words`}
      type={type}
      name={name}
      value={inputValue}
      onChange={changeHandler}
      {...props}
    />
  );
};

export default Input;

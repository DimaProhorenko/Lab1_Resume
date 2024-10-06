import React, { useEffect, useRef, useState } from "react";

const TextArea = ({
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
  const textareaRef = useRef(null);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  useEffect(() => {
    adjustHeight();
  }, []);
  return (
    <textarea
      ref={textareaRef}
      onInput={adjustHeight}
      rows="1"
      className={`w-full block bg-transparent text-gray-900 ${className} focus:outline-nonewk resize-none overflow-hidden min-h-12`}
      type={type}
      name={name}
      value={inputValue}
      onChange={changeHandler}
      {...props}
    ></textarea>
  );
};

export default TextArea;

import React from "react";
import { useField } from "formik";

const TextInput = ({ className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        className={`w-full block bg-transparent text-gray-900 ${className} focus:outline-none`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextInput;

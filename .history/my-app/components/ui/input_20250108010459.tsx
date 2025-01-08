import React from "react";

const Input = ({ type, placeholder }: { type: string, placeholder: string }) => {
  return <input type={type} placeholder={placeholder} className="p-2 border rounded" />;
};

export default Input;

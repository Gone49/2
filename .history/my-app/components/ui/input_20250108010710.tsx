// src/components/ui/input.tsx

import React from "react";

const Input = ({ placeholder, type }: { placeholder: string; type?: string }) => {
  return <input className="border p-2" placeholder={placeholder} type={type || "text"} />;
};

export default Input;

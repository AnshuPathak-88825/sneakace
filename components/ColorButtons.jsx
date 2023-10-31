import React from "react";

const ColorButtons = ({ children, className, onClick }) => {
  return (
    <button
      className={`p-2 rounded-xl bg-secondary text-background text-sm ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default ColorButtons;

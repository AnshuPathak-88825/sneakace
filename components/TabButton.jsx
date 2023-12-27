import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClass = active
    ? "text-black border-b-2 border-b-secondary"
    : "text-[#555] ";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-gray-500 ${buttonClass}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;

import React, { useState } from 'react';

const FillupButton = (label) => {
  console.log(label.label);
  const [active, setActive] = useState(0);

  const handleMouseOver = () => {
    setActive(1);
  };

  const handleMouseLeave = () => {
    setActive(0);
  };

  return (
    <div className="text-white  relative overflow-hidden cursor-pointer " onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <div
        className={`bg-purple-600 rounded-sm	 m-1 py-3 px-7 absolute font-Poppins_light ${!active ? '-translate-x-[220px]' : 'translate-x-0'} transition ease-in-out duration-500`}
      >
        {label.label}
      </div>
      <div className='bg-gray-600  rounded-sm	 m-1 py-3 px-7 font-Poppins_light'> {label.label}</div>
    </div>
  );
};

export default FillupButton;

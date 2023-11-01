import React from "react";
import MyAccountNav from "../../sections/MyAccountNav";
const MyAccount = () => {
  return (
    <div className="w-full  p-3">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center w-full h-full">
        <div className="flex-[1]">
            <MyAccountNav />
        </div>
        <div className="flex-grow">
            
        </div>
      </div>
    </div>
  );
};

export default MyAccount;

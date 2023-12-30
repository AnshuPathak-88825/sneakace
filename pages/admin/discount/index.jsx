import React from 'react'
import Sidebar from "../../../components/Admin_components/Sidebar"
import Discount from "../../../components/Admin_components/Discount"

const Cupon = () => {
  return (
    <>
        <div className="w-full flex flex-col min-h-screen bg-white text-black">
            <div className="w-full min-h-screen flex flex-row justify-start">
            <Sidebar/>
            <div className="w-full flex-1 p-10  "><Discount/></div>
            
            </div>
        </div>
        
    </>
  );
};
export default Cupon;

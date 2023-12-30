import { CiMail } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CgShutterstock } from "react-icons/cg";

import { MdViewColumn } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import { PiExportBold } from "react-icons/pi";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";


import { MdOutlineRemoveRedEye } from "react-icons/md";





const Discount = () => {

  return (
    <div className="w-full h-auto flex flex-col gap-2 px-16 py-4">
        <div className="font-bold text-6xl">
            CREATE CUPON
        </div>


        <div className="text-2xl text-teal-500">Create a New Cupon</div>

        <div className="w-full flex flex-wrap mt-2">
            <div className="w-full xl:w-1/2 xl:px-2 py-2">
                <input placeholder="Cupon code" className="w-full px-4 py-3 bg-grey-200 border rounded-lg bg-gray-200">
                </input>
            </div>
            <div className="w-full xl:w-1/2 xl:px-2 py-2">
                <input placeholder="Discount percent" className="w-full px-4 py-3 bg-grey-200 border rounded-lg bg-gray-200">
                </input>
            </div>
            <div className="w-full xl:w-1/2 xl:px-2 py-2">
                <input placeholder="Category" className="w-full px-4 py-3 bg-grey-200 border rounded-lg bg-gray-200">
                </input>
            </div>
        </div>
        <div className="w-full flex items-center justify-end">
            <button className="w-fit px-4 py-2 bg-[#9c27b0] text-white rounded-md">
                CREATE NEW CUPON
            </button>
        </div>
      
    </div>
  );
};

export default Discount;

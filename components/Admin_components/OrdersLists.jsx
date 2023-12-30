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





const OrdersLists = () => {

  return (
    <div className="w-full h-auto flex flex-col gap-4 px-16 py-4">
        <div className="font-bold text-6xl">
        Orders
        </div>


        <div className="w-full flex items-center gap-4  mt-12">
            <div className="w-2/5">
                <input placeholder="Search by customer number" className="appearance-none border rounded-lg w-full py-4 px-3">
                </input>
            </div>
            <div className="w-1/5 bg-grey-200">
                <select name="cars" id="cars" className="border rounded-lg w-full px-2 py-4 bg-grey-200">
                    <option value="" disabled selected>Status</option>
                    <option value="25">Pending</option>
                    <option value="50">Processing</option>
                    <option value="100">Delivered</option> 
                    <option value="100">All</option> 
                </select>
            </div>
            <div className="w-1/5">
                <select name="cars" id="cars" className="border rounded-lg w-full px-2 py-4 bg-grey-200">
                    <option value="" disabled selected>Sort</option>
                    <option value="25">Price Low to High</option>
                    <option value="50">Price High to Low</option>
                    <option value="100">New Orders</option> 
                    <option value="100">Old Orders</option> 
                </select>
            </div>
            <div className="w-1/5 bg-[#008080] rounded-lg flex items-center justify-center text-xl text-white font-semibold py-4">
                <button>+ Search</button>
            </div>

        </div>

        <div className="w-full min-w-[1000px] flex flex-col">
            <div className="w-full flex bg-[#a4a9fc] text-white font-semibold py-4 px-2 rounded-t-xl bg-[#008080]">
                <div className="w-1/12 flex items-center justify-center">
                    <button>Order ID</button>
                </div>
                <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                    <button>TIME</button>
                </div>
                <div className="min-w-[100px] w-3/12 flex items-center justify-center">
                    <button>SHIPPING ADDRESS</button>
                </div>
                <div className="min-w-[100px] w-2/12 flex items-center justify-center">
                    <button>PHONE</button>
                </div>
                <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                    <button>AMOUNT</button>
                </div>
                <div className="min-w-[100px] w-2/12 flex items-center justify-center">
                    <button>STATUS</button>
                </div>
                <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                    <button>ACTION</button>
                </div>
                <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                    <button>INVOICE</button>
                </div>
            </div>
            <div className="w-full max-h-[600px] text-sm overflow-y-scroll scroll-smooth scrollbar-hide rounded-b-xl">
                {[1,2,3].map((index) => (
                    <div className="w-full flex py-4 bg-[#f8f9fa] border-y">
                        <div className="w-1/12 flex items-center justify-center">
                            8258				
                        </div>
                        <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                            Jan 28, 2024
                        </div>
                        <div className="min-w-[100px] w-3/12 flex items-center justify-center">
                            P.O. Box 729, 8767 Dapibus Street
                        </div>
                        <div className="min-w-[100px] w-2/12 flex items-center justify-center">
                            (383) 194-4548
                        </div>
                        <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                            $42.55
                        </div>
                        <div className="min-w-[100px] w-2/12 flex items-center justify-center">
                            <div className="w-fit flex items-center justify-center px-4 py-1 bg-yellow-100 text-yellow-500 font-semibold rounded-full">
                                Pending
                            </div>
                        </div>
                        <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                            <select name="cars" id="cars" className="border rounded-md w-full p-1 bg-grey-200">
                                <option value="25">Pending</option>
                                <option value="50">Processing</option>
                                <option value="100">Delivered</option> 
                            </select>
                        </div>
                        <div className="min-w-[100px] w-1/12 flex items-center justify-center text-xl text-grey-200">
                            <MdOutlineRemoveRedEye />
                        </div>
                    </div>
                ))}
                {[1,2,3].map((index) => (
                    <div className="w-full flex py-4 bg-[#f8f9fa] border-y">
                        <div className="w-1/12 flex items-center justify-center">
                            8258				
                        </div>
                        <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                            Jan 28, 2024
                        </div>
                        <div className="min-w-[100px] w-3/12 flex items-center justify-center">
                            P.O. Box 729, 8767 Dapibus Street
                        </div>
                        <div className="min-w-[100px] w-2/12 flex items-center justify-center">
                            (383) 194-4548
                        </div>
                        <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                            $42.55
                        </div>
                        <div className="min-w-[100px] w-2/12 flex items-center justify-center">
                            <div className="w-fit flex items-center justify-center px-4 py-1 bg-green-100 text-green-500 font-semibold rounded-full">
                                Processing
                            </div>
                        </div>
                        <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                            <select name="cars" id="cars" className="border rounded-md w-full p-1 bg-grey-200">
                                <option value="25">Pending</option>
                                <option value="50">Processing</option>
                                <option value="100">Delivered</option> 
                            </select>
                        </div>
                        <div className="min-w-[100px] w-1/12 flex items-center justify-center text-xl text-grey-200">
                            <MdOutlineRemoveRedEye />
                        </div>
                    </div>
                ))}
                {[1,2,3].map((index) => (
                    <div className="w-full flex py-4 bg-[#f8f9fa] border-y">
                        <div className="w-1/12 flex items-center justify-center">
                            8258				
                        </div>
                        <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                            Jan 28, 2024
                        </div>
                        <div className="min-w-[100px] w-3/12 flex items-center justify-center">
                            P.O. Box 729, 8767 Dapibus Street
                        </div>
                        <div className="min-w-[100px] w-2/12 flex items-center justify-center">
                            (383) 194-4548
                        </div>
                        <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                            $42.55
                        </div>
                        <div className="min-w-[100px] w-2/12 flex items-center justify-center">
                            <div className="w-fit flex items-center justify-center px-4 py-1 bg-blue-100 text-blue-500 font-semibold rounded-full">
                                Delivered
                            </div>
                        </div>
                        <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                            <select name="cars" id="cars" className="border rounded-md w-full p-1 bg-grey-200">
                                <option value="25">Pending</option>
                                <option value="50">Processing</option>
                                <option value="100">Delivered</option> 
                            </select>
                        </div>
                        <div className="min-w-[100px] w-1/12 flex items-center justify-center text-xl text-grey-200">
                            <MdOutlineRemoveRedEye />
                        </div>
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  );
};

export default OrdersLists;

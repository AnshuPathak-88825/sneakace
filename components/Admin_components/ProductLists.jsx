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



const ProductLists = () => {

  return (
    <div className="w-full h-auto flex flex-col gap-4 px-16 py-4">
        <div className="font-bold text-6xl">
        Products List
        </div>


        <div className="text-sm font-semibold mt-12 flex">
            <button className="flex gap-1 items-center px-2 py-1 hover:bg-gray-200 rounded-md">
                <MdViewColumn className="text-xl"/>
                COLUMNS
            </button>
            <button className="flex gap-1 items-center px-2 py-1 hover:bg-gray-200 rounded-md">
                <IoFilterSharp className="text-xl"/>
                FILTERS
            </button>
            <button className="flex gap-1 items-center px-2 py-1 hover:bg-gray-200 rounded-md">
                DENSITY
            </button>
            <button className="flex gap-1 items-center px-2 py-1 hover:bg-gray-200 rounded-md">
                <PiExportBold className="text-xl"/>
                EXPORT
            </button>
        </div>

        <div className="w-full min-w-[1000px] flex flex-col">
            <div className="w-full flex bg-[#a4a9fc] py-4 rounded-t-xl">
                <div className="w-1/12 flex items-center justify-center">
                    <button>ID</button>
                </div>
                <div className="min-w-[100px] w-2/12 flex items-center justify-center">
                    <button>Product Name</button>
                </div>
                <div className="min-w-[100px] w-2/12 flex items-center justify-center">
                    <button>Category</button>
                </div>
                <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                    <button>Price</button>
                </div>
                <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                    <button>Stock</button>
                </div>
                <div className="min-w-[100px] w-2/12 flex items-center justify-center">
                    <button>Sales Count</button>
                </div>
                <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                    <button>Discount</button>
                </div>
                <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                    <button>Rating</button>
                </div>
                <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                    <button>Actions</button>
                </div>
            </div>
            <div className="w-full max-h-[550px] text-sm overflow-y-scroll scroll-smooth scrollbar-hide">
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((item,index) => (
                    <div key={index} className="w-full flex py-4 bg-[#f8f9fa] border-y">
                        <div className="w-1/12 flex items-center justify-center">
                            {item}
                        </div>
                        <div className="min-w-[100px] w-2/12 flex items-center justify-center">
                            Product Name
                        </div>
                        <div className="min-w-[100px] w-2/12 flex items-center justify-center">
                            Category
                        </div>
                        <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                            Price
                        </div>
                        <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                            Stock
                        </div>
                        <div className="min-w-[100px] w-2/12 flex items-center justify-center">
                            Sales Count
                        </div>
                        <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                            Discount
                        </div>
                        <div className="min-w-[100px] w-1/12 flex items-center justify-center">
                            Rating
                        </div>
                        <div className="min-w-[100px] w-1/12 flex items-center justify-evenly text-xl">
                            <MdEdit/>
                            <MdDeleteOutline />
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-end gap-4 bg-[#a4a9fc] p-4 rounded-b-xl">
                <div className="flex gap-1">
                    <label for="rowsperpage">Rows Per Page:</label>
                    <select name="cars" id="cars" className="bg-[#a4a9fc]">
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option> 
                    </select>
                </div>
                <div>1-30 of 30</div>
                <div className="flex items-center gap-3">
                    <div><FaChevronLeft/></div>
                    <div><FaChevronRight/></div>
                </div>
            </div>
        </div>
      
    </div>
  );
};

export default ProductLists;

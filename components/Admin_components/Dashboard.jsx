import { CiMail } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CgShutterstock } from "react-icons/cg";
const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <div className="font-bold">
        <h1>DASHBOARD</h1>
      </div>
      <div className="text-lg text-teal-500">Welcome to your dashboard</div>
      <div className="flex flex-row flex-wrap">
        <div className="h-35 w-1/5 bg-gray-200 m-4 flex flex-col justify-center items-center p-5 ">
          <CiMail className="h-10 w-10 p-1 text-teal-500 text-teal-500" />
          <div className="p-1 font-bold	text-lg text-black">100000</div>
          <div className="p-1 font-bold	text-lg text-teal-500">total Orders</div>
        </div>

        <div className="h-35 w-1/5 bg-gray-200 m-4 flex flex-col justify-center items-center p-5 ">
          <FaUserFriends className="h-10 w-10 p-1 text-teal-500" />
          <div className="p-1 font-bold	text-lg text-black">Total Users</div>
        </div>

        <div className="h-35 w-1/5 bg-gray-200 m-4 flex flex-col justify-center items-center p-5 ">
          <FaRegMoneyBillAlt className="h-10 w-10 p-1 font-bold	text-lg text-teal-500 text-teal-500" />
          <div className="p-1 font-bold	text-lg text-black">100000</div>
          <div className="p-1 font-bold	text-lg text-teal-500">Revenue</div>
        </div>

        <div className="h-35 w-1/5 bg-gray-200 m-4 flex flex-col justify-center items-center p-5 ">
          <CgShutterstock className="h-10 w-10 p-1 font-bold	text-lg text-teal-500 text-teal-500" />
          <div className="p-1 font-bold	text-lg text-black">130</div>
          <div className="p-1 font-bold	text-lg text-teal-500">Out Of Stocks</div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Dashboard;

import { CiMail } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CgShutterstock } from "react-icons/cg";

import BarChart_1 from "./BartChart_1"
import BarChart_2 from "./BartChart_2"
import Doughnut_1 from "./Doughnut_1";
import Doughnut_2 from "./Doughnut_2";

const Dashboard = () => {
  const Transactions = [
    {
      id:"01e4dsa",
      userName:"johndoe",
      date:"2021-09-01",
      money:"$43.95",
    },
    {
      id:"01e4dsa",
      userName:"johndoe",
      date:"2021-09-01",
      money:"$43.95",
    },
    {
      id:"01e4dsa",
      userName:"johndoe",
      date:"2021-09-01",
      money:"$43.95",
    },
    {
      id:"01e4dsa",
      userName:"johndoe",
      date:"2021-09-01",
      money:"$43.95",
    },
    {
      id:"01e4dsa",
      userName:"johndoe",
      date:"2021-09-01",
      money:"$43.95",
    },
    {
      id:"01e4dsa",
      userName:"johndoe",
      date:"2021-09-01",
      money:"$43.95",
    },
    {
      id:"01e4dsa",
      userName:"johndoe",
      date:"2021-09-01",
      money:"$43.95",
    },
  ]
  return (
    <div className="w-full h-auto flex flex-col gap-4 px-16 py-4">
        <div className="font-bold text-6xl">
          DASHBOARD
        </div>

      <div className="text-xl text-teal-500">Welcome to your dashboard</div>

        <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-4">
            <div className="h-35 w-full bg-gray-200 flex flex-col items-start p-5 rounded-lg">
              <CiMail className="h-10 w-10 p-1 text-teal-500 text-teal-500" />
              <div className="p-1 font-bold	text-lg text-black">100000</div>
              <div className="p-1 font-bold	text-lg text-teal-500">total Orders</div>
            </div>

            <div className="h-35 w-full bg-gray-200 flex flex-col items-start p-5 rounded-lg">
              <FaUserFriends className="h-10 w-10 p-1 text-teal-500" />
              <div className="p-1 font-bold	text-lg text-black">Total Users</div>
            </div>

            <div className="h-35 w-full bg-gray-200 flex flex-col items-start p-5 rounded-lg">
              <FaRegMoneyBillAlt className="h-10 w-10 p-1 font-bold	text-lg text-teal-500 text-teal-500" />
              <div className="p-1 font-bold	text-lg text-black">100000</div>
              <div className="p-1 font-bold	text-lg text-teal-500">Revenue</div>
            </div>

            <div className="h-35 w-full bg-gray-200 flex flex-col items-start p-5 rounded-lg">
              <CgShutterstock className="h-10 w-10 p-1 font-bold	text-lg text-teal-500 text-teal-500" />
              <div className="p-1 font-bold	text-lg text-black">130</div>
              <div className="p-1 font-bold	text-lg text-teal-500">Out Of Stocks</div>
            </div>
          
        </div>

        <div className="w-full h-full flex flex-col xl:flex-row gap-4 items-center">
          <div className="w-full h-full xl:w-4/6 flex flex-col gap-2 items-start p-8 bg-gray-200 rounded-lg">
            <div className="text-3xl font-bold">
              Revenue Generated Per Month
            </div>
            <BarChart_1/>
          </div>
          <div className="w-full max-h-[450px] xl:w-2/6 flex flex-col gap-2 items-start bg-gray-200 overflow-y-scroll scrollbar-hide rounded-lg">
            <div className="text-3xl font-bold px-4 pt-6 pb-4">
              Recent Transactions
            </div>
            <div className="w-full">
              {Transactions.map((transaction, index) => (
                  <div className="w-full flex flex-row items-center justify-between px-4 py-3 border-t-4 border-black">
                    <div>
                      <div className="text-2xl font-bold text-[#4cceac]">
                        {transaction.id}
                      </div>
                      <div className="text-lg">
                        {transaction.userName}
                      </div>
                    </div>
                    <div className="text-sm">
                      {transaction.date}
                    </div>
                    <div className="text-md p-2 bg-[#4cceac] rounded-lg">
                      {transaction.money}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-4">
          <div className="w-full flex flex-col items-center lg:w-1/2 bg-gray-200 p-4 pb-8 rounded-lg">
            <div className="w-full mr-auto pb-4 text-3xl font-bold">
              Product Stock
            </div>
            <Doughnut_1/>
          </div>
          <div className="w-full flex flex-col items-center lg:w-1/2 bg-gray-200 p-4 pb-8 rounded-lg">
            <div className="w-full mr-auto pb-4 text-3xl font-bold">
              Country Distribution
            </div>
            <Doughnut_2/>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 items-start p-8 bg-gray-200 rounded-lg">
            <div className="text-3xl font-bold">
            Category Revenue
            </div>
            <BarChart_2 className="max-h-[200px]"/>
          </div>
      
    </div>
  );
};

export default Dashboard;

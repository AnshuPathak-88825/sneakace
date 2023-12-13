import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Sidebar from "../../components/Admin_components/Sidebar";
import Dashboard from "../../components/Admin_components/Dashboard";

const Admin = () => {
  return (
    <>
     <div className="flex flex-col min-h-screen bg-white text-black">
      <div className="h-screen flex flex-row justify-start">
        <Sidebar />
        <div className="bg-black flex-1 p-4 text-white ">dashboard</div>
      </div>
      </div>
    <div className="h-screen flex flex-row justify-start">
      <Sidebar/>
      <div className="flex-1 p-10  "><Dashboard/></div>
      
    </div>
    </>
   
  );
};

export default Admin;

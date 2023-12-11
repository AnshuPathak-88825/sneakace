import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Sidebar from "../../components/Admin_components/Sidebar";
import Dashboard from "../../components/Admin_components/Dashboard";

const Admin = () => {
  return (
<<<<<<< HEAD
    <div className="flex flex-col min-h-screen bg-white text-black">
      <div className="h-screen flex flex-row justify-start">
        <Sidebar />
        <div className="bg-black flex-1 p-4 text-white ">dashboard</div>
      </div>
=======
    <div className="h-screen flex flex-row justify-start">
      <Sidebar/>
      <div className="flex-1 p-10  "><Dashboard/></div>
      
>>>>>>> 8388476f1b92e71a413d629cd1872b33cef1429e
    </div>
  );
};

export default Admin;

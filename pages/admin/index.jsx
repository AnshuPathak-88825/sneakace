import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Sidebar from "../../components/Admin_components/Sidebar";

const Admin = () => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar/>
      <div className="bg-black flex-1 p-4 text-white ">dashboard</div>
      
    </div>
  );
};

export default Admin;

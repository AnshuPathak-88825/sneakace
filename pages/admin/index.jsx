import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Sidebar from "../../components/Admin_components/Sidebar";
import Dashboard from "../../components/Admin_components/Dashboard";

const Admin = () => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar/>
      <div className="flex-1 p-10  "><Dashboard/></div>
      
    </div>
  );
};

export default Admin;

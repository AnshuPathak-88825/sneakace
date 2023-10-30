import React from "react";
import Image from "next/image";
import login from "../../public/assets/images/login.svg";
import { FcGoogle } from "react-icons/fc";
import TransitionEffect from "../../components/TransitionEffect";
const Login = () => {
  return (
    <div className="w-full lg:h-[80vh] p-3">
      <TransitionEffect />
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center h-full w-full gap-10 lg:gap-60">
        <Image src={login} alt="login_vector" />
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center">
            <p className="text-5xl lg:text-7xl  font-normal">Welcome</p>
            <p className="font-normal">Login to Continue</p>
            <div className="flex flex-col items-center gap-5  mt-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none bg-transparent p-3 border rounded-lg lg:w-[300px]"
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="outline-none bg-transparent p-3 border rounded-lg lg:w-[300px]"
              />
              <input
                type="password"
                placeholder="Enter your confirmation password"
                className="outline-none bg-transparent p-3 border rounded-lg lg:w-[300px]"
              />
              <button className="w-[90px] lg:w-[300px] border border-secondary text-background hover:text-primary p-2 rounded-xl text-xl bg-secondary hover:bg-transparent duration-200">
                Register
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <h2>---OR---</h2>
          </div>

          <div className="flex gap-3 items-center  cursor-pointer justify-center rounded-xl border p-2 hover:border-secondary  duration-200 hover:text-secondary">
            <FcGoogle size={25} />
            <p className="font-normal text-2xl lg:text-2xl">Signup With Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

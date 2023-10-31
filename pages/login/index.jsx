import React from "react";
import Image from "next/image";
import login from "../../public/assets/images/login.svg";
import { FcGoogle } from "react-icons/fc";
import TransitionEffect from "../../components/TransitionEffect";
const Login = () => {
  return (
    <div className="w-full lg:h-[85vh] p-3">
      <div className="container mx-auto w-full h-full ">
        <div className="flex flex-col lg:flex-row items-center justify-center bg-background p-5 shadow-md shadow-slate-50 rounded-2xl lg:gap-60 w-full h-full">
          <div>
            <Image src={login} alt="login" />
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col items-center lg:items-start gap-2">
              <h2>Welcome</h2>
              <p>Login to Continue</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none bg-transparent lg:w-[300px] border p-3 rounded-lg"
              />
              <input
                type="password"
                placeholder="Enter your Password"
                className="outline-none bg-transparent lg:w-[300px] border p-3 rounded-lg"
              />
              <input
                type="password"
                placeholder="Enter your Confirm Password"
                className="outline-none bg-transparent lg:w-[300px] border p-3 rounded-lg"
              />
              <button className="p-3 lg:w-[300px] bg-secondary text-background rounded-lg text-xl border border-secondary hover:bg-transparent hover:text-primary duration-300">
                Register
              </button>
            </div>

            <div className="flex items-center">
              <h2>---OR---</h2>
            </div>

            <div className="flex items-center justify-center gap-2 border p-2 rounded-xl lg:w-[300px]">
              <FcGoogle size={30} />
              <p className="text-2xl">SignUp With Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import Link from "next/link";
import TransitionEffect from "../../components/TransitionEffect";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { UserAuth } from "../../context/AuthContext";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgetPassword = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const handleForget = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("password reset mail sent");
        router.push("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <section className="h-screen w-full p-5 ">
      <div className="container mx-auto h-full w-full flex flex-col justify-center items-center ">
        <div className="flex items-center justify-center w-full">
          <h2 className="font-loginContent py-10 text-primary">
            Forget Password
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center bg-background shadow-xl shadow-primary rounded-lg max-w-[1920px] p-5 lg:py-[97px] lg:px-[42px]">
          <div className="flex flex-col items-center justify-center gap-5">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="E-mail or Phone Number"
              className="p-3 border border-primary bg-transparent rounded-md outline-none lg:w-[580px]"
            />
          </div>

          <div className="flex items-center justify-center mt-5 lg:mt-[44px]">
            <button
              onClick={handleForget}
              className="px-[80px] py-[10px] lg:py-[13px] lg:px-[105px] bg-primary rounded-lg text-background text-[12px] lg:text-[24px]"
            >
              Forget Password
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;

import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { UserAuth } from "../../context/AuthContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TransitionEffect from "../../components/TransitionEffect";
const Login = () => {
  const router = useRouter();

  const { user, googleSignIn, createUserWithEmail } = UserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      if (user) {
        router.push("/");
      }
    } catch (error) {
      console.error("Google Sign In Error:", error);
    }
  };

  const handleEmailSignup = async () => {
    try {
      if (password === confirm_password) {
        await createUserWithEmail(email, password);
      } else {
        toast(
          "Passwords do not match. Double-check and try entering them again"
        );
      }
    } catch (error) {
      console.error("Email Sign Up Error:", error);
    }
  };

  return (
    <section className="w-full p-5">
      <TransitionEffect />
      <div className="container mx-auto">
        <div className="flex items-center justify-center w-full">
          <h2 className="font-loginContent py-10 text-primary">REGISTER</h2>
        </div>

        <div className="flex flex-col items-center justify-center bg-background shadow-xl shadow-primary rounded-lg max-w-[1920px] p-5 lg:py-[97px] lg:px-[42px]">
          <div className="flex flex-col items-center justify-center gap-5">
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="E-mail or Phone Number"
              className="p-3 border border-primary bg-transparent rounded-md outline-none lg:w-[580px]"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Enter your password"
              className="p-3 border border-primary bg-transparent rounded-md outline-none lg:w-[580px]"
            />
            <input
              value={confirm_password}
              onChange={(e) => {
                setConfirm_password(e.target.value);
              }}
              type="password"
              placeholder="Confirmation Password"
              className="p-3 border border-primary bg-transparent rounded-md outline-none lg:w-[580px]"
            />
          </div>

          <div className="flex items-center justify-center mt-5 lg:mt-[44px]">
            <button
              onClick={handleEmailSignup}
              className="px-[80px] py-[10px] lg:py-[8px] lg:px-[86px] bg-primary rounded-md text-background text-[12px] lg:text-[24px]"
            >
              REGISTER
            </button>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-5 justify-center mt-5 lg:mt-[44px]">
            <div
              onClick={handleGoogleSignIn}
              className="flex items-center gap-3 px-10 py-2 w-[200px] lg:w-[274px] border rounded-lg cursor-pointer"
            >
              <FcGoogle size={30} />
              <p className="text-md">Google</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center mt-5 lg:mt-[44px]">
            <p className="text-base	"> Already User?</p>
            <Link href="/login">
              <p className="text-base text-[#FFCF00] ml-[10px] cursor-pointer	">
                {" "}
                SIGN IN
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

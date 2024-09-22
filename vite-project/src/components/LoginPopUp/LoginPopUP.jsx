import React, { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopUP = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="  z-50 w-full h-full fixed bg-[#00000090]  grid ">
      <form className=" place-self-center w-[max(23vw,330px)] rounded-md text-[#808080] bg-white flex flex-col gap-6 py-6 px-9 text-[14px]  ">
        <div className=" flex justify-between items-center text-black font-bold text-xl">
          <h2>{currentState}</h2>
          <img
            className="cursor-pointer text-black w-4 "
            src={assets.cross_icon}
            onClick={() => {
              setShowLogin(false);
            }}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5">
          {currentState === "Login" ? (
            ""
          ) : (
            <input
              type="text"
              className="border-2  rounded-md  outline-none p-2 border-[#c9c9c9]"
              placeholder="Your Name"
              required
            />
          )}

          <input
            type="email"
            className="border-2 rounded-md outline-none p-2 border-[#c9c9c9]"
            placeholder="Your Email"
            required
            name=""
            id=""
          />
          <input
            className="border-2 rounded-md outline-none p-2 border-[#c9c9c9]"
            type="password"
            placeholder="Your password"
            required
            name=""
            id=""
          />
        </div>
        <button className="border-2  border-gray-500 px-3 py-2 bg-[tomato] text-xl text-white rounded-md ">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="flex items-start gap-2 mt-[-15px]">
          <input type="checkbox" required name="" id="" className="mt-1 " />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create A New Account?
            <span
              className="text-[tomato] font-bold cursor-pointer "
              onClick={() => setCurrentState("Sign Up")}
            >
              Click Here
            </span>
          </p>
        ) : (
          <p>
            Already Have an Acconut ?
            <span
              onClick={() => setCurrentState("Login")}
              className="text-[tomato] font-bold cursor-pointer"
            >
              Click Here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUP;

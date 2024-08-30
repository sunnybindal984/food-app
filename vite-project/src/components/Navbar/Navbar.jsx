import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { StoreContext } from "../context/StoreContext";

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className=" w-[90%]  shadow-2xl my-4 sticky top-0 bg-white z-20 mx-auto">
      <div className="flex space-x-7 py-[15px]  justify-between items-center">
        <Link to=" ">
          {" "}
          <img width={150} src={assets.logo} alt="" />{" "}
        </Link>
        <ul className=" gap-10 cursor-pointer text-[18px] text-[#49557e] flex">
          <li
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "border-b-4  border-blue-800" : ""}
          >
            Home
          </li>
          <li
            onClick={() => setMenu("Menu")}
            className={menu === "Menu" ? "border-b-4 border-blue-800" : ""}
          >
            Menu
          </li>
          <li
            onClick={() => setMenu("Mobile App")}
            className={
              menu === "Mobile App" ? "border-b-4  border-blue-800" : ""
            }
          >
            Mobile App
          </li>
          <li
            onClick={() => setMenu("Contact Us")}
            className={
              menu === "Contact Us" ? "border-b-4  border-blue-800  " : ""
            }
          >
            Contact Us
          </li>
        </ul>
        <div className="flex gap-[40px] items-center  ">
          <img src={assets.search_icon} alt="" />

          <div className="relative">
            <Link to="cart">
              {" "}
              <img src={assets.basket_icon} alt="" />{" "}
            </Link>

            <div
              className={
                getTotalCartAmount() === 0
                  ? ""
                  : " absolute min-h-2 min-w-2 bg-red-500 rounded-[50%] right-[-8px] top-[-8px]"
              }
            ></div>
          </div>
          <button
            onClick={() => setShowLogin(true)}
            className=" py-[5px] hover:bg-slate-200 transition duration-300  px-[30px] cursor-pointer border bg-transparent text-[16px] text-[#49557e] border-gray-600  rounded-full"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

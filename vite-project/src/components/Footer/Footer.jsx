import React from "react";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="text-[#d9d9d9] mt-24 bg-[#323232] flex flex-col items-center gap-12 px-[9vw]  p-16">
      <div className="  flex gap-40">
        <div className=" flex-2">
          <img className="mb-5" src={assets.logo} alt="" />
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            nobis aliquid, enim ab quasi similique tempora deleniti, iure vero
            natus amet. Culpa fugiat in officiis ipsam architecto molestiae
            consectetur, minima qui accusamus! Praesentium consequatur dolorum
            assumenda quisquam voluptate corrupti! Esse ab dolores corrupti
            eligendi corporis odio voluptates, animi quod non commodi
            aspernatur.
          </p>
          <div className="flex  w-[11rem] my-4 justify-between">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-white text-2xl mb-5">COMPANY</h2>
          <ul className="flex  cursor-pointer flex-col gap-4">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-white text-2xl mb-5">GET IN TOUCH</h2>
          <ul>
            <li className="cursor-pointer">+91 983456789</li>
            <li className="cursor-pointer">contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className="border-2 border-gray-300 w-full" />
      <p>Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;

import React from "react";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className=" w-[80%] text-center items-center mt-24 mx-auto flex flex-col   text-[max(3vw,20px)] font-bold ">
      <p>
        For Better Experience Download <br />
        <span className=""> Tomato App</span>
      </p>
      <div className="flex mt-8 gap-5">
        <img
          className="w-[max(30vw,13px)] max-w-[180px] duration-200 cursor-pointer hover:scale-[1.05]"
          src={assets.play_store}
          alt=""
        />
        <img
          className="w-[max(30vw,13px)] max-w-[180px]  hover:scale-[1.05] duration-200 cursor-pointer"
          src={assets.app_store}
          alt=""
        />
      </div>
    </div>
  );
};

export default AppDownload;

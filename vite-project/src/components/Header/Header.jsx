import React from "react";

function Header() {
  return (
    <div className="bg-[url('header_img.png')] h-[34vw] flex flex-col bg-no-repeat relative mx-auto my-[30px] bg-contain  w-[80%]">
      <div className="  absolute flex items-start flex-col gap-[1.5vw]  max-w-[50%] bottom-[10%] left-[6vw] ">
        <h2 className="bold text-white text-[max(4.5vw,22px)]">
          {" "}
          Order your favourite food here
        </h2>
        <p className="text-[1vw] text-white">
          {" "}
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience,one delicious meal at a time
        </p>
        <button className="border-none text-[#747474] py-[1vw] px-[2.3vw] font-medium bg-white text-[max(1vw,13px)] rounded-full">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header;

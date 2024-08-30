import React from "react";
import { menu_list } from "../../assets/assets";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="mx-auto gap-6 flex flex-col w-[80%]">
      <h1 className="font-bold text-[30px] text-[#262626] ">
        Explore Our Menu
      </h1>
      <p className="max-w-[60%] text-[17px] text- text-[#808080]">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className=" gap-8  my-[20px] justify-between items-center  flex">
        {menu_list.map((item, i) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev == item.menu_name ? "" : item.menu_name
                )
              }
              className="flex flex-col "
              key={i}
            >
              <img
                className={`min-w-[80px] w-[7.5vw] cursor-pointer rounded-full ${
                  category === item.menu_name
                    ? "border-4 p-1 border-green-600"
                    : ""
                }`}
                src={item.menu_image}
                alt=""
              />
              <p className="mx-auto text-[#747474] cursor-pointer mt-[10px] text-[max(1.4vw,16px)]">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-[05px] bg-slate-400 h-[3px]" />
    </div>
  );
}

export default ExploreMenu;

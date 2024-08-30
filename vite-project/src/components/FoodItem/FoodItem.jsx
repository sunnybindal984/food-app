import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItem, addToCart, removeCart } = useContext(StoreContext);
  return (
    <div className="w-[100%] rounded-[15px] m-auto shadow-xl ">
      <div className="relative  ">
        <img className="w-full  rounded-lg" src={image} alt="" />
        {!cartItem[id] ? (
          <img
            className="w-8 absolute bottom-4 cursor-pointer right-4 rounded-full"
            src={assets.add_icon_white}
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="absolute bottom-4  right-4 flex items-center gap-3 p-1 rounded-full bg-white">
            <img
              className=" w-7"
              onClick={() => removeCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p className="">{cartItem[id]}</p>
            <img
              className="w-7"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-5 ">
        <div className=" flex justify-between items-center mb-3">
          <p className="text-[20px] font-bold">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-[#676767] text-[13px]">{description}</p>
        <p className="text-[tomato] font-bold my-10px text-[22px]">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

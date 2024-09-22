import React, { useContext } from "react";

import { StoreContext } from "../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className=" max-w-[80%] mx-auto mt-8 ">
      <h2 className="text-[max(2vw,24px)] font-bold text-[#262626]  ">
        Top dishes near you
      </h2>
      <div className="grid grid-cols-4 gap-8 mt-10">
        {food_list.map((item, i) => {
          {
            // console.log(category, item.category);
          }
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={i}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
      {/* <hr className="border-2 my-10  border-gray-500 " /> */}
    </div>
  );
};

export default FoodDisplay;

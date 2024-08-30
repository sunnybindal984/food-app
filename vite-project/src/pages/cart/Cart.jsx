import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../components/context/StoreContext";

function Cart() {
  const { cartItem, removeCart, food_list, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className=" w-[80%] mt-24  mx-auto">
      <div className="">
        <div className=" grid  grid-cols-[1fr,1.5fr,1fr,1fr,1fr,0.5fr]  items-center  text-center ">
          <p>Title</p>
          <p>Items</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, i) => {
          if (cartItem[item._id] > 0) {
            return (
              <div>
                <div className=" grid grid-cols-[1fr,1.5fr,1fr,1fr,1fr,0.5fr] items-center   text-center text-gray my-2 mx-2 text-black  text-[max(1vw,,12px)]  ">
                  <img className="w-14 mx-auto " src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p
                    className=" cursor-pointer "
                    onClick={() => {
                      removeCart(item._id);
                    }}
                  >
                    x
                  </p>
                </div>
                <hr className=" h-[1px] bg-[#e2e2e2] border-none " />
              </div>
            );
          }
        })}
      </div>
      <div className=" mt-20 flex justify-between gap-[max(12vw,20px)]">
        <div className=" flex flex-1 flex-col gap-[20px]">
          <h2 className="font-bold text-xl">Cart Total</h2>
          <div className="]">
            <div className="flex justify-between  text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="flex justify-between  text-[#555]">
              <p>Dlivery Fees</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="flex justify-between font-bold  text-[#555]">
              <p>Total</p>
              <p className=" ">
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </p>
              <hr className="my-[10px]" />
            </div>
          </div>
          <button
            className="py-2 rounded-md text-white bg-[tomato] w-[max(15vw,200px)] border-none"
            onClick={() => {
              navigate("order");
            }}
          >
            Proceed to checkout
          </button>
        </div>
        <div className="flex-1">
          <div>
            <p className="tex-[#555] ">if you have a promo code enter here</p>
            <div className="mt-2 flex justify-between items-center bg-[#eaeaea] rounded-md">
              <input
                className="bg-transparent border-none outline-none pl-2"
                type="text"
                placeholder="PROMOCODE"
              />
              <button className="w-[max(10vw,150px)] py-3 px-2 bg-black border-none text-white rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

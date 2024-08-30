import React, { useContext } from "react";
import { StoreContext } from "../../components/context/StoreContext";

function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);
  const css = "mb-[15px] w-full p-2 border-2 rounded-sm ouline-[tomato]";

  return (
    <div>
      <form
        action=""
        className="w-[80%] mx-auto flex items-start justify-between gap-12 mt-24 "
      >
        <div className=" w-full max-w-[max(30%,500px)]  ">
          <p className=" mb-12 text-xl font-bold">Delivery Information</p>
          <div className="gap-2 flex">
            <input
              className={css}
              type="text"
              placeholder="First Name"
              name=""
              id=""
            />
            <input
              className={css}
              type="text"
              name=""
              id=""
              placeholder="Last Name"
            />
          </div>
          <input className={css} type="email" placeholder="Email Address" />
          <input className={css} type="text" placeholder="Street" />
          <div className=" gap-2 flex">
            <input className={css} type="text" placeholder="City" />
            <input className={css} type="text" placeholder="State" />
          </div>
          <div className="gap-2 flex">
            <input className={css} type="text" placeholder="Zip Code" />
            <input className={css} type="text" placeholder="Country" />
          </div>
          <input className={css} type="number" placeholder="Phone" />
        </div>
        <div className=" w-full max-w-[max(40%,500px)]">
          <div className=" flex flex-1 flex-col gap-[20px]">
            <h2 className="font-bold text-xl">Cart Total</h2>
            <div className="">
              <div className="flex justify-between  text-[#555]">
                <p>Subtotal</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr className="my-[10px]" />
              <div className="flex justify-between  text-[#555]">
                <p>Dlivery Fees</p>
                <p>${2}</p>
              </div>
              <hr className="my-[10px]" />
              <div className="flex justify-between font-bold text-[#555]">
                <p>Total</p>$
                {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                <hr className="my-[10px]" />
              </div>
            </div>
            <button className="py-2 rounded-md mt-8 text-white bg-[tomato] w-[max(15vw,200px)] border-none">
              Proceed to Payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;

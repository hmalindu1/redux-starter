import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import {
  removeFromCart,
  decrementQty,
  incrementQty,
} from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const CartProduct = ({ cartItem }) => {
  const dispatch = useDispatch();
  const handleDeleteCartItem = () => {
    dispatch(removeFromCart(cartItem));
  };

  const handleIncrementCartItem = () => {
    dispatch(incrementQty(cartItem));
  };

  const handleDecrementCartItem = () => {
    dispatch(decrementQty(cartItem));
  };

  return (
    <div className="flex items-center justify-between border-b border-slate-400  pb-3 font-semibold text-sm mb-4">
      <div className="flex items-center gap-3">
        <Image
          src={cartItem.image}
          width={249}
          height={249}
          alt={cartItem.title}
          className="rounded-xl w-20 h-20"
        />
        <div className="flex flex-col">
          <h2>{cartItem.title}</h2>
        </div>
      </div>
      <div className=" rounded-xl border border-gray-400 flex gap-3 items-center ">
        <button onClick={handleDecrementCartItem} className="border-r border-gray-400 py-2 px-4">
          <Minus />
        </button>
        <p className="flex-grow py-2 px-4">{cartItem.qty}</p>
        <button onClick={handleIncrementCartItem} className="border-l border-gray-400 py-2 px-4">
          <Plus />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <h4>{cartItem.price}</h4>
        <button onClick={handleDeleteCartItem}>
          <Trash2 className="text-red-600 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;

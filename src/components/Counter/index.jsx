import React from "react";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";

const Counter = ({ onMinusItem, onPlusItem, cartItems, product }) => {
  return (
    <div className="cart__item_count">
      <BiMinusCircle
        onClick={() => {
          onMinusItem(product.id);
        }}
      />
      <b>{cartItems[product.id].cartItems.length}</b>
      <BiPlusCircle
        onClick={() => {
          onPlusItem(product.id);
        }}
      />
    </div>
  );
};

export default Counter;

import React from "react";
import { ChevronDown, ChevronUp } from "../icons";

function CartItem({ id, img, title, price, amount }) {
  return (
    <>
      <article className="cart-item">
        <img src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          <h4 className="item-price">${price}</h4>
          {/* Remove Button */}
          <button className="remove-btn">remove</button>
        </div>
        <div>
          {/* Increase Amount */}
          <button className="amount-btn">
            <ChevronUp />
          </button>
          {/* amount */}
          <p className="amount">{amount}</p>
          {/* decrease amount */}
          <button className="amount-btn">
            <ChevronDown />
          </button>
        </div>
      </article>
    </>
  );
}

export default CartItem;

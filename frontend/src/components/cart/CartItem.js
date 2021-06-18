import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { CartContext } from "../../screens/CartPage/cart";

export default function CartItem({ id, image, name, price, amount }) {
  const { removeItem, increaseAmount, decreaseAmount } = React.useContext(
    CartContext
  );
  return (
    <article className="cart-item">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h5>${price}</h5>
        <button
          type="button"
          className="cart-btn remove-btn"
          onClick={() => removeItem(id)}
        >
          olib tashlash
        </button>
      </div>
      <div>
        <button
          type="button"
          className="cart-btn amount-btn"
          //   style={{ outline: "none" }}
          onClick={() => increaseAmount(id)}
        >
          <FaAngleUp />
        </button>
        <p className="item-amount">{amount}</p>
        <button
          type="button"
          className="cart-btn amount-btn"
          //   style={{ outline: "none" }}
          onClick={() => decreaseAmount(id, amount)}
        >
          <FaAngleDown />
        </button>
      </div>
    </article>
  );
}

import React from "react";
import EmptyCart from "../../components/cart/EmptyCart";
import { CartContext } from "./cart";
import CartItem from "../../components/cart/CartItem";
import { Link } from "react-router-dom";

export default function CartScreen() {
  let user = true;
  const { cart, subTotal } = React.useContext(CartContext);
  var currencyFormatter = require("currency-formatter");

  function formatNumber(number) {
    number = Math.round(number);
    return currencyFormatter.format(number, { code: "" });
  }
  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <section className="cart-items section">
      <h2>siz harid qilgan mahsulotlar</h2>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <h2>total : {`${formatNumber(subTotal)} сўм`}</h2>
      {user ? (
        <Link to="/checkout" className="btn btn-outline-primary btn-block">
          TEKSHIRISH
        </Link>
      ) : (
        <Link to="/login" className="btn btn-outline-primary btn-block">
          LOGIN
        </Link>
      )}
    </section>
  );
}

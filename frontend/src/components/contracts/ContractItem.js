import React from "react";
import { Form, Col } from "react-bootstrap";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { CartContext } from "../../screens/CartPage/cart";
import InputWithLabel from "../general/form/InputWithLabel";

export default function CartItem({ id, price, name, amount }) {
  const { increaseAmount, decreaseAmount } = React.useContext(CartContext);
  var currencyFormatter = require("currency-formatter");
  function formatNumber(number) {
    number = Math.round(number);
    return currencyFormatter.format(number, { code: "" });
  }

  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setTotal(price * amount);
  });

  return (
    <Form.Row>
      <Col xs={6}>
        <InputWithLabel
          required
          placeholder="Mahsulotlar"
          type="text"
          value={name}
          disabled
        />
      </Col>
      <Col style={{ textAlign: "center" }}>
        <div className="ml-2">
          <button
            type="button"
            className="cart-btn amount-btn"
            onClick={() => increaseAmount(id)}
            style={{ outline: "none" }}
          >
            <FaAngleUp />
          </button>
          <p className="item-amount2">{amount}</p>
          <button
            type="button"
            className="cart-btn amount-btn"
            onClick={() => decreaseAmount(id, amount)}
            style={{ outline: "none" }}
          >
            <FaAngleDown />
          </button>
        </div>
      </Col>
      <Col>
        <InputWithLabel
          required
          placeholder="Price"
          type="text"
          value={`${formatNumber(price)} сўм`}
          disabled
        />
      </Col>
      <Col>
        <InputWithLabel
          required
          placeholder="Total"
          type="text"
          value={`${formatNumber(total)} сўм`}
          disabled
        />
      </Col>
    </Form.Row>
  );
}

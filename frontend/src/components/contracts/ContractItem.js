import React from "react";
import { Form, Col } from "react-bootstrap";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { CartContext } from "../../screens/CartPage/cart";
import InputWithLabel from "../general/form/InputWithLabel";

export default function CartItem({ id, installmentPrice, name, amount }) {
  const { increaseAmount, decreaseAmount } = React.useContext(CartContext);
  var currencyFormatter = require("currency-formatter");
  function formatNumber(number) {
    number = Math.round(number);
    return currencyFormatter.format(number, { code: "" });
  }

  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setTotal(installmentPrice * amount);
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
      <Col>
        <div className="ml-2">
          <button
            type="button"
            className="cart-btn amount-btn"
            onClick={() => increaseAmount(id)}
            style={{ outline: "none" }}
          >
            <KeyboardArrowUpIcon />
          </button>
          <p className="item-amount2">{amount}</p>
          <button
            type="button"
            className="cart-btn amount-btn"
            onClick={() => decreaseAmount(id, amount)}
            style={{ outline: "none" }}
          >
            <KeyboardArrowDownIcon />
          </button>
        </div>
      </Col>
      <Col>
        <InputWithLabel
          required
          placeholder="Price"
          type="text"
          value={`${formatNumber(installmentPrice)} сўм`}
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

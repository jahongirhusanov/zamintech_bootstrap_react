import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../screens/CartPage/cart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 50,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function CartLink() {
  const { cartItems } = React.useContext(CartContext);

  return (
    <IconButton
      aria-label="cart"
      style={{ outline: "none", color: "gray", marginLeft: "-0.5rem" }}
    >
      <StyledBadge
        badgeContent={cartItems}
        color="error"
        showZero
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <ShoppingCartIcon style={{ marginTop: "0.3rem" }} />
        Cart
      </StyledBadge>
    </IconButton>
  );
}

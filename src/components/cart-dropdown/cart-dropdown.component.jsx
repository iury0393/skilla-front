import React from "react";

import CustomButton from "../CustomButton/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>Fazer Checkout</CustomButton>
  </div>
);

export default CartDropdown;

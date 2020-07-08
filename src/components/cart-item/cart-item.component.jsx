import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, title, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{title}</span>
      <span className="price">
        {quantity} x R${price}
      </span>
    </div>
  </div>
);

export default CartItem;

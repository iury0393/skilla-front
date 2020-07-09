import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart.selectors";
import CustomButton from "../../components/CustomButton/custom-button.component.jsx";

import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component.jsx";

const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Produto</span>
        </div>

        <div className="header-block">
          <span>Descrição</span>
        </div>

        <div className="header-block">
          <span>Quantidade</span>
        </div>

        <div className="header-block">
          <span>Preço</span>
        </div>

        <div className="header-block">
          <span>Remover</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>TOTAL: R${total} </span>
      </div>

      <div className="checkout-button">
        <CustomButton>Confirmar</CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);

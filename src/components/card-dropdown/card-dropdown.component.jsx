import React from "react";
import { connect } from "react-redux";
import "./card-dropdown.styles.scss";

import CustomButton from "./../custom-button/custom-button.component";
import CartItem from "./../cart-item/cart-item.component";
import { selectCartItems } from "./../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-item" />
    {cartItems.map((cartItem) => (
      <CartItem key={cartItem.id} item={cartItem} />
    ))}
    <CustomButton> GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropDown);

import React from "react";
import { connect } from "react-redux";
import "./card-dropdown.styles.scss";
import { withRouter } from "react-router-dom";



import CustomButton from "./../custom-button/custom-button.component";
import CartItem from "./../cart-item/cart-item.component";
import { selectCartItems } from "./../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from './../../redux/cart/cart.action';
 

const CartDropDown = ({ cartItems, history,dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-item" />
    {cartItems.length ? (
      cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
    ) : (
      <span className="empty-message">your cart is empty</span>
    )}
    <CustomButton onClick={() => {
        
        
        history.push('/checkout');
        dispatch(toggleCartHidden());
        }}> GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
 
export default withRouter(connect(mapStateToProps)(CartDropDown));

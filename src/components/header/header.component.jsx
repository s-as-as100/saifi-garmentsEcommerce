import React from "react";
 import {HeaderContainer,LogoContainer,OptionsContainer,OptionDiv,OptionLink} from './header.styles';
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
 import {selectCartHidden} from './../../redux/cart/cart-selectors';

import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "./../../firebase/firebase.utils";
import CardIcon from "./../cart-icon/cart-icon.component";
import CartDropDown from "./../card-dropdown/card-dropdown.component";
import { selectCurrentUser } from "./../../redux/user/user.selectors";

const Header = ({ currentUser, hidden }) => (
  < HeaderContainer>
    <LogoContainer  to="/">
      <Logo className="logo" />
    </LogoContainer>
    < OptionsContainer>
      <OptionLink   to="./shop">
        SHOP
      </OptionLink>

      <OptionLink   to="./shop">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv   onClick={() => auth.signOut()}>
          {" "}
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink   to="/signin">
          SIGN IN{" "}
        </OptionLink>
      )}
      <CardIcon />
    </ OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </ HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,

  hidden:  selectCartHidden,
});

export default connect(mapStateToProps)(Header);

import { removeItem } from './cart.action';
import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';
// import CartItem from './../../components/cart-item/cart-item.component';
//import { clearItemFromCart } from './cart.action';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
      case CartActionTypes.CLEAR_ITEM_FROM_CART:
        return {
          ...state,
          CartItems: state.cartItems.filter(cartItem => cartItem.id !==  action.payload.id)
        };
      case CartActionTypes.REMOVE_ITEM:
        return {
          ...state,
          cartItems: removeItem(state.cartItems,action.payload)
        }


    default:
      return state;
  }
};

export default cartReducer;
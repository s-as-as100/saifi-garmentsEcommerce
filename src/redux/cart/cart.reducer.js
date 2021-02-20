import CartActionTypes from './cart.types';



const INITIAL_STATE ={

    hidden : true,
    cardItems:[]
};

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case  CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
            case CartActionTypes.ADD_ITEM:
                return {
                    ...state,
                    cartItems: [...state.cardItems, action.payload]
                }
            
    
        default:
            return state;
    }
}
export default CartReducer;
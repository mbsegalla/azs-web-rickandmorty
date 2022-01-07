import { ADD_TO_CART, REMOVE_ITEM } from "./types";

const CartReducer = (state, action) => {
  const productExist = state.cartItems.find((cartItem) => cartItem.id === action.payload.id);
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: productExist ? state.cartItems.map((cartItem) => cartItem.id === action.payload.id ?
          { ...productExist, quantity: productExist.quantity + 1 } : cartItem) :
          [...state.cartItems, { ...action.payload, quantity: 1 }],
      }
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: productExist.quantity === 1 ? state.cartItems.filter((item) => item.id !== action.payload.id) :
          state.cartItems.map((cartItem) => cartItem.id === action.payload.id ?
            { ...productExist, quantity: productExist.quantity - 1 } : cartItem),
      }
    }
    default:
      return state;
  }
}

export default CartReducer;

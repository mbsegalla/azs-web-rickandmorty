import { useReducer } from "react";
import PropTyopes from "prop-types";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { ADD_TO_CART, REMOVE_ITEM } from "./types";

function CartState({ children }) {
  const initialState = {
    cartItems: []
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  }

  const removeItem = (item) => {
    dispatch({ type: REMOVE_ITEM, payload: item });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeItem
      }}>
      {children}
    </CartContext.Provider>
  );
}

CartState.propTypes = {
  children: PropTyopes.node,
}

export default CartState;

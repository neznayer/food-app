import { useReducer } from "react";
import { CartContext } from "./cart-context";

const defaultCartState = { items: [], totalAmount: 0 };

const ACTIONS = {
  add: "ADD_ITEM",
  remove: "REMOVE_ITEM",
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.add: {
      const itemsCopy = state.items.slice();
      const existingItem = itemsCopy.find(
        (item) => item.id === action.payload.id
      );
      const updatedAmount =
        state.totalAmount + action.payload.amount * action.payload.price;

      let updatedItems = [];

      if (existingItem) {
        if (action.payload.amount + existingItem.amount < 1) {
          return { ...state };
        }
        existingItem.amount += action.payload.amount;
        updatedItems = itemsCopy;
      } else {
        updatedItems = state.items.concat(action.payload);
      }

      return { items: updatedItems, totalAmount: updatedAmount };
    }

    case ACTIONS.remove: {
      const itemsCopy = state.items.slice();
      const existingItem = itemsCopy.find((item) => item.id === action.payload);

      console.log("existingItem", existingItem);
      let updatedAmount = state.totalAmount - existingItem.price;
      let updatedItems = [];

      if (existingItem.amount === 1) {
        // remove item from array
        updatedItems = itemsCopy.filter((item) => item.id !== action.payload);
      } else {
        // keep it but decrease amount by 1
        existingItem.amount -= 1;
        updatedItems = itemsCopy;
      }

      return { items: updatedItems, totalAmount: updatedAmount };
    }

    default:
      return defaultCartState;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", payload: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", payload: id });
  };

  const cartContext = {
    ...cartState,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

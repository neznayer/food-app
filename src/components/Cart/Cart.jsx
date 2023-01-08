import classes from "./Cart.module.css";
import { Modal } from "../UI/Modal";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import CartItem from "./CartItem";

export const Cart = ({ onCartHide }) => {
  const cartContext = useContext(CartContext);

  const handleCartItemRemove = (id) => {
    cartContext.removeItem(id);
  };
  const handleCartItemAdd = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const cartItems = cartContext.items.map((item) => (
    <CartItem
      key={item.id}
      {...item}
      onRemove={() => handleCartItemRemove(item.id)}
      onAdd={() => handleCartItemAdd(item)}
    />
  ));

  const totalAmountNum = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;
  return (
    <Modal onHide={onCartHide}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>

      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmountNum}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onCartHide} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

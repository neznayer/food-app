import classes from "./Cart.module.css";
import { Modal } from "../UI/Modal";

export const Cart = ({ onCartHide }) => {
  const cartItems = [
    { id: "c1", name: "Sushi", price: 1.34, amount: 2 },
    { id: "c2", name: "Pizza", price: 3.21, amount: 1 },
  ].map((item) => <li>{item.name}</li>);

  return (
    <Modal onHide={onCartHide}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>

      <div className={classes.total}>
        <span>Total amount</span>
        <span>23.23</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onCartHide} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

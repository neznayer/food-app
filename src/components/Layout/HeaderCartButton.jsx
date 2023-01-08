import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

export const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  const [btnAnimate, setBtnAnimate] = useState(false);

  const { items } = cartCtx;
  const numberOfItems = items.reduce((acc, curr) => acc + curr.amount, 0);

  useEffect(() => {
    if (items.length === 0) return;
    setBtnAnimate(true);
    const timer = setTimeout(() => {
      setBtnAnimate(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const btnClasses = `${classes.button} ${btnAnimate ? classes.bump : ""}`;

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

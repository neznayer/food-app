import { useContext } from "react";
import { CartContext } from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import { MealItemForm } from "./MealItemForm";
export const MealItem = ({ name, description, price, id }) => {
  const formattedPrice = `$${price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const handleAddToCart = (amount) => {
    console.log("amount", amount);
    return cartCtx.addItem({ name, description, price, id, amount });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={handleAddToCart} />
      </div>
    </li>
  );
};

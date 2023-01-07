import classes from "./MealItem.module.css";
export const MealItem = ({ name, description, price }) => {
  const formatttedPrice = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formatttedPrice}</div>
      </div>
      <div></div>
    </li>
  );
};

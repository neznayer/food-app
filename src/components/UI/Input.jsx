import classes from "./Input.module.css";

export const Input = ({ label, input }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

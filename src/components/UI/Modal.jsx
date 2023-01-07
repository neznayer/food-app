import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

const Backdrop = ({ onClick }) => {
  return <div className={classes.backdrop} onClick={onClick}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const modalRoot = document.getElementById("overlays");

export const Modal = ({ children, onHide }) => {
  return (
    <>
      {createPortal(<Backdrop onClick={onHide} />, modalRoot)}
      {createPortal(<ModalOverlay> {children}</ModalOverlay>, modalRoot)}
    </>
  );
};

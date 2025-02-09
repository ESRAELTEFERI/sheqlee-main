import React from "react";
import classes from "./Modal.module.css";
// import AuthButtons from "../Header/AuthButtons"; //for the SignUp and logIn buttons
import CLOSEMODAL from "../../asset/cancel_icon.svg";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={classes.overlay}>
      {/* <button className={classes.closeButton} onClick={onClose}>
        &times;
      </button> */}

      <div className={classes.modal}>
        <h2 className={classes.ModalTexxt}>
          Please register or login as a client to post jobs.
        </h2>
        <div className={classes.buttonGroup}>
          <SignUp />
          <LogIn />
          {/* <AuthButtons /> */}
        </div>
      </div>
      <div className={classes.closeModall} onClick={onClose}>
        <img src={CLOSEMODAL} alt="closing modal" className={classes.iconnn} />
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import classes from "./Modal.module.css";
// import AuthButtons from "../Header/AuthButtons"; //for the SignUp and logIn buttons
import CLOSEMODAL from "../../asset/cancel_icon.svg";
import SignUpButton from "../Header/SignUpButton";
import LoginButton from "../Header/LogInButton";
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
          <SignUpButton />
          <LoginButton />
          {/* <AuthButtons /> */}
        </div>
      </div>
      <div className={classes.closeModall} onClick={onClose}>
        <img src={CLOSEMODAL} alt="closing modal" />
      </div>
    </div>
  );
};

export default Modal;

import React, { useContext } from "react";
import classes from "./Register.module.css";
import icon from "../../asset/Register/party-popper.png";
// import SignUp from "../Header/NewHeader/SignUp";
import SignUpRegister from "./SignUpRegister";
import { AuthContext } from "../../Context/AuthContext";

function Register() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {!isAuthenticated && (
        <div className={classes.registorBack}>
          <img src={icon} alt="party-poper" className={classes.registerIcons} />
          <span className={classes.registorText}>
            Are you a software developer in Ethiopia?
            {/* <button className={classes.registerButton}>Sign up</button> */}
          </span>

          <SignUpRegister className={classes.registerButton} />
        </div>
      )}
    </>
  );
}

export default Register;

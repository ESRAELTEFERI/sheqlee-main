import React from "react";
import classes from "./MainContact.module.css";
import MAIL from "../../asset/Contact/contact.svg";

const MainContact = () => {
  return (
    <>
      <div className={classes.container}>
        <img src={MAIL} alt="mail logo" className={classes.icon} />
        <h2 className={classes.title}>Contact</h2>
        <p className={classes.subtitlee}>
          Please reach out to us if you have any questions or you need our
          assistance with something.
        </p>
      </div>
    </>
  );
};

export default MainContact;

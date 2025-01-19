import React from "react";
import classes from "./MainFAQ.module.css";
import FAQ from "../../asset/FAQ/question.svg";
const MainFAQ = () => {
  return (
    <>
      <div className={classes.container}>
        <img src={FAQ} alt="question logo" className={classes.icons} />
        <h2 className={classes.title}>FAQ</h2>
        <p className={classes.subtitle}>
          The following are some of the most commonly asked questions by our
          users.
        </p>
      </div>
    </>
  );
};

export default MainFAQ;

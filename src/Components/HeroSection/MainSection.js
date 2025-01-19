import React from "react";
import classes from "./MainBody.module.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const MainBody = () => {
  return (
    <section className={classes.mainBody}>
      <LeftSection />

      <RightSection />
    </section>
  );
};

export default MainBody;

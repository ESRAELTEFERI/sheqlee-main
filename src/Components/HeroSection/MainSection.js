import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext"; // Adjust path as needed
import classes from "./MainBody.module.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const MainBody = () => {
  const { isAuthenticated, user } = useContext(AuthContext);

  // Determine if MainBody should display
  const showMainBody =
    !isAuthenticated || (isAuthenticated && user?.userType === "company");

  if (!showMainBody) return null; // Don't render if conditions aren't met

  return (
    <section className={classes.mainBody}>
      <LeftSection />
      <RightSection />
    </section>
  );
};

export default MainBody;

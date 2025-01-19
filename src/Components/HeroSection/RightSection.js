import React from "react";
import classes from "./MainBody.module.css";
// import anime from "../../../public/Anime/78518.json";
const RightSection = () => {
  return (
    <div className={classes.rightSection}>
      <lottie-player
        src="/Anime/78518.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        style={{ width: "100%", height: "100%", marginBottom: "30px" }}
      ></lottie-player>
    </div>
  );
};

export default RightSection;

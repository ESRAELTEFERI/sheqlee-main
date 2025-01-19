// src/StatsCard.js
import React from "react";
import styles from "./StatsCard.module.css";

function StatsCard({ title, description, stat, Mode }) {
  return (
    <div
      className={`${styles.card} ${Mode ? styles.reverse : styles.border}`}
      // style={{ backgroundColor: darkMode ? "#000" : "#f5f5f5" }}
    >
      <div className={Mode ? styles.stat : styles.stat}>{stat}</div>
      <div className={`${styles.content} ${Mode ? styles.textReverse : ""}`}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default StatsCard;

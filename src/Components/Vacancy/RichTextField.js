import React from "react";
import styles from "./RichTextField.module.css";

const RichTextField = ({ label, placeholder, required }) => {
  return (
    <div className={styles.container}>
      {/* Label */}
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>

      {/* Toolbar */}
      <div className={styles.toolbar}>
        <button className={styles.toolbarButton}>B</button>
        <button className={styles.toolbarButton}>/</button>
        <button className={styles.toolbarButton}>S</button>
        <div className={styles.divider}></div>
        <button className={styles.toolbarButton}>•••</button>
        <button className={styles.toolbarButton}>≡</button>
        <button className={styles.toolbarButton}>≡≡</button>
        <button className={styles.toolbarButton}>≡≡≡</button>
        <div className={styles.divider}></div>
        <button className={styles.toolbarButton}>
          A<sup>1</sup>
        </button>
        <button className={styles.toolbarButton}>
          A<sub>2</sub>
        </button>
      </div>

      {/* Textarea */}
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default RichTextField;

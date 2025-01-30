// components/SkillRow.js
import React from "react";
import styles from "./SkillTable.module.css";
import DELETE from "../../asset/vacancy/delete.svg";

const SkillRow = ({ name, level, onDelete, onLevelChange }) => {
  return (
    <tr className={styles.row}>
      <td>{name}</td>
      <td>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`${styles.levelButton} ${
              num <= level ? styles.selected : ""
            }`}
            onClick={() => onLevelChange(name, num)}
          >
            {num}
          </button>
        ))}
      </td>
      <td>
        <button className={styles.deleteButton} onClick={() => onDelete(name)}>
          <img src={DELETE} alt="deleting" className={styles.iconss} />
        </button>
      </td>
    </tr>
  );
};

export default SkillRow;

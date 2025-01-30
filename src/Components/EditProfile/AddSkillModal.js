import React, { useState } from "react";
import styles from "./AddSkillModal.module.css";
// import CLOSEMODAL from "../../asset/cancel_icon.svg";

const AddSkillModal = ({ onClose, onAddSkill }) => {
  const [skillName, setSkillName] = useState("");
  const [selectedLevel, setSelectedLevel] = useState(""); // Default level C (3)

  const levelMapping = { A: 1, B: 2, C: 3, D: 4, E: 5 };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skillName.trim() && selectedLevel in levelMapping) {
      onAddSkill({ name: skillName, level: levelMapping[selectedLevel] });
      onClose(); // Close modal after adding
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.text}>Add a new skill</h2>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Objective-C"
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
            className={styles.input}
          />
          <div className={styles["select-container"]}>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className={styles.dropdown}
            >
              <option value="" disabled hidden style={{ color: " #444444" }}>
                Skill level
              </option>
              {Object.keys(levelMapping).map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
          <button onClick={handleSubmit} className={styles.addButton}>
            Add skill
          </button>
          <button onClick={onClose} className={styles.closeButton}>
            ✖
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSkillModal;

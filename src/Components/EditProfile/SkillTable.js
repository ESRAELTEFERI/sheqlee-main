import React, { useState, useEffect } from "react";
import SkillRow from "./SkillRow";
import AddSkillModal from "./AddSkillModal";
import styles from "./SkillTable.module.css";

const SkillTable = ({ skills, setSkills }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("profileSkills", JSON.stringify(skills));
  }, [skills]);

  // Handle Deleting a Skill
  const handleDelete = (name) => {
    const updatedSkills = skills.filter((skill) => skill.name !== name);
    setSkills(updatedSkills);
  };

  // Handle Level Selection
  const handleLevelChange = (name, level) => {
    const updatedSkills = skills.map((skill) =>
      skill.name === name ? { ...skill, level } : skill
    );
    setSkills(updatedSkills);
  };

  // Handle Adding a New Skill
  const handleAddSkill = (newSkill) => {
    setSkills([...skills, newSkill]);
  };

  return (
    <div className={styles.container}>
      <h2>Your skills</h2>
      <p>
        Adding your skills will help us make job suggestions more accurately.
      </p>
      {skills.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.firstTh}>Skill</th>
              <th>Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <SkillRow
                key={skill.name}
                name={skill.name}
                level={skill.level}
                onDelete={handleDelete}
                onLevelChange={handleLevelChange}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No skills added yet.</p>
      )}
      <div className={styles.skill}>
        <button
          className={styles.addSkill}
          onClick={() => setIsModalOpen(true)}
        >
          Add a skill
        </button>
      </div>

      {isModalOpen && (
        <AddSkillModal
          onClose={() => setIsModalOpen(false)}
          onAddSkill={handleAddSkill}
        />
      )}
    </div>
  );
};

export default SkillTable;

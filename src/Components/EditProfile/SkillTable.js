// // components/SkillTable.js
// import React, { useState } from "react";
// import SkillRow from "./SkillRow";
// import styles from "./SkillTable.module.css";

// const SkillTable = () => {
//   const [skills, setSkills] = useState([
//     { name: "Java", level: 3 },
//     { name: "Flutter", level: 3 },
//     { name: "Golang", level: 4 },
//   ]);

//   // Handle Deleting a Skill
//   const handleDelete = (name) => {
//     setSkills(skills.filter((skill) => skill.name !== name));
//   };

//   // Handle Level Selection
//   const handleLevelChange = (name, level) => {
//     setSkills(
//       skills.map((skill) => (skill.name === name ? { ...skill, level } : skill))
//     );
//   };

//   return (
//     <div className={styles.container}>
//       <h2>Your skills</h2>
//       <p>
//         Adding your skills will help us make job suggestions more accurately.
//       </p>
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <th>Skill</th>
//             <th>Level</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {skills.map((skill) => (
//             <SkillRow
//               key={skill.name}
//               name={skill.name}
//               level={skill.level}
//               onDelete={handleDelete}
//               onLevelChange={handleLevelChange}
//             />
//           ))}
//         </tbody>
//       </table>
//       <div className={styles.skill}>
//         <button className={styles.addSkill}>Add a skill</button>
//       </div>
//     </div>
//   );
// };

// export default SkillTable;
import React, { useState } from "react";
import SkillRow from "./SkillRow";
import AddSkillModal from "./AddSkillModal";
import styles from "./SkillTable.module.css";

const SkillTable = () => {
  const [skills, setSkills] = useState([
    { name: "Java", level: 3 },
    { name: "Flutter", level: 3 },
    { name: "Golang", level: 4 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle Deleting a Skill
  const handleDelete = (name) => {
    setSkills(skills.filter((skill) => skill.name !== name));
  };

  // Handle Level Selection
  const handleLevelChange = (name, level) => {
    setSkills(
      skills.map((skill) => (skill.name === name ? { ...skill, level } : skill))
    );
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
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Skill</th>
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

import React, { useState } from "react";
import styles from "./VacancyTable.module.css";
import { FiCopy, FiEye, FiTrash } from "react-icons/fi";

const initialVacancies = [
  {
    id: 1,
    title: "Senior mobile app developer",
    type: "Full-time",
    level: "Senior",
    status: false,
  },
  {
    id: 2,
    title: "Python backend developer",
    type: "Part-time",
    level: "Lead",
    status: true,
  },
  {
    id: 3,
    title: "ReactJS developer",
    type: "Part-time",
    level: "Middle",
    status: false,
  },
];

function VacancyTable() {
  const [vacancies, setVacancies] = useState(initialVacancies);

  const toggleStatus = (id) => {
    setVacancies((prev) =>
      prev.map((vacancy) =>
        vacancy.id === id ? { ...vacancy, status: !vacancy.status } : vacancy
      )
    );
  };

  const deleteVacancy = (id) => {
    setVacancies((prev) => prev.filter((vacancy) => vacancy.id !== id));
  };

  const duplicateVacancy = (id) => {
    const vacancyToDuplicate = vacancies.find((vacancy) => vacancy.id === id);
    if (vacancyToDuplicate) {
      setVacancies((prev) => [
        ...prev,
        { ...vacancyToDuplicate, id: prev.length + 1 },
      ]);
    }
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>JID</th>
            <th>Title</th>
            <th>Type</th>
            <th>Level</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vacancies.map((vacancy) => (
            <tr key={vacancy.id}>
              <td>{vacancy.id}</td>
              <td>{vacancy.title}</td>
              <td>{vacancy.type}</td>
              <td>{vacancy.level}</td>
              <td>
                <button
                  className={`${styles.statusToggle} ${
                    vacancy.status ? styles.active : styles.inactive
                  }`}
                  onClick={() => toggleStatus(vacancy.id)}
                >
                  {vacancy.status ? "Active" : "Inactive"}
                </button>
              </td>
              <td>
                <button
                  onClick={() => duplicateVacancy(vacancy.id)}
                  className={styles.iconButton}
                >
                  <FiCopy />
                </button>
                <button className={styles.iconButton}>
                  <FiEye />
                </button>
                <button
                  onClick={() => deleteVacancy(vacancy.id)}
                  className={styles.iconButton}
                >
                  <FiTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VacancyTable;

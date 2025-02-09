import React, { useState } from "react";
import styles from "./SkillTable.module.css";
import DELETE from "../../asset/vacancy/delete.svg";
import CLOSEMODAL from "../../asset/cancel_icon.svg";

const AddUrl = ({ links, setLinks }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newProfile, setNewProfile] = useState({ name: "", url: "" });

  const isBothFilled =
    newProfile.name.trim() !== "" && newProfile.url.trim() !== "";

  const handleInputChange = (e) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
  };

  const addProfile = () => {
    if (newProfile.name && newProfile.url) {
      const updatedLinks = [...links, newProfile];
      setLinks(updatedLinks);
      localStorage.setItem("profileLinks", JSON.stringify(updatedLinks));
      setNewProfile({ name: "", url: "" });
      setModalOpen(false);
    }
  };

  const deleteProfile = (index) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);
    localStorage.setItem("profileLinks", JSON.stringify(updatedLinks));
  };

  return (
    <div className={styles.container}>
      <h3>Your profiles</h3>
      <p>
        Adding your links makes your profile more credible. Profiles could be
        GitHub, LinkedIn, etc.
      </p>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Profile name</th>
            <th>URL</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {links.map((profile, index) => (
            <tr key={index}>
              <td>{profile.name}</td>
              <td>{profile.url}</td>
              <td>
                <button
                  className={styles.deleteButton}
                  onClick={() => deleteProfile(index)}
                >
                  <img src={DELETE} alt="delete" className={styles.iconss} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.skill}>
        <button className={styles.addSkill} onClick={() => setModalOpen(true)}>
          Add a link
        </button>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2 className={styles.text}>Add a new link</h2>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                name="name"
                placeholder="Link name [e.g. GitHub]"
                value={newProfile.name}
                onChange={handleInputChange}
                className={styles.input}
              />
              <input
                type="text"
                name="url"
                placeholder="URL"
                value={newProfile.url}
                onChange={handleInputChange}
                className={styles.input}
              />
              <button
                className={`${styles.addButton} ${
                  isBothFilled ? styles.onActive : ""
                }`}
                onClick={addProfile}
              >
                Add link
              </button>
              <button
                className={styles.closeButton}
                onClick={() => setModalOpen(false)}
              >
                <img src={CLOSEMODAL} alt="close modal" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddUrl;

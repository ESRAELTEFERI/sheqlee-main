import React, { useState } from "react";
import classes from "./MainBody.module.css";
import Modal from "./Modal";

const LeftSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className={classes.leftSection}>
      <h1 className={classes.hh1}>
        Recruit <span className={classes.highlight}>affordable</span> &{" "}
        <span className={classes.highlight}>skilled</span> Ethiopian
        professionals.
      </h1>
      <p className={classes.description}>
        Web frontend, mobile app, backend, database, full-stack, data science,
        UI/UX & product design, project management, scrum master, etc.
      </p>
      {/* Modal  */}
      <div>
        <button className={`${classes.ModalButton} `} onClick={openModal}>
          Post your projects
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default LeftSection;

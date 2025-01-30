import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import classes from "./MainBody.module.css";
import Modal from "./Modal";

const LeftSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { isAuthenticated, user } = useContext(AuthContext);
  const navigate = useNavigate();

  // const openModal = () => setModalOpen(true);
  // const closeModal = () => setModalOpen(false);
  const handleButtonClick = () => {
    if (isAuthenticated && user?.userType === "company") {
      navigate("/vacancy");
    } else {
      setModalOpen(true);
    }
  };

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
        <button className={classes.ModalButton} onClick={handleButtonClick}>
          Post your projects
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </div>
  );
};

export default LeftSection;

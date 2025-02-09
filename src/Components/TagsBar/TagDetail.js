import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getTagsWithName } from "../Tags/TagData";
import classes from "./TagDetail.module.css";
import BELL from "../../asset/bell.svg";
import FB from "../../asset/categoriesSocial/facebook.svg";
import LK from "../../asset/categoriesSocial/linkedin-logo.svg";
import TG from "../../asset/categoriesSocial/telegram.svg";
import TW from "../../asset/categoriesSocial/twitter.svg";
import Modal from "../HeroSection/Modal";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faJsSquare } from "@fortawesome/free-brands-svg-icons";

const CategoryDetails = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const { tagsName } = useParams();

  // Find the category by name
  const category = getTagsWithName.find(
    (tag) =>
      tag.name.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-") ===
      tagsName
  );

  if (!category) {
    return <div>Category not found!</div>;
  }

  return (
    <div className={classes.card}>
      <div className={classes.jsBox}>
        <span className={classes.jsText}>JS</span>
      </div>
      <h2 className={classes.title}>{category.name}</h2>
      <p className={classes.description}>
        All job posts with the tag{" "}
        <span className={classes.strong}>{category.name}</span>.
      </p>
      <div>
        <button className={classes.subscribeButton} onClick={openModal}>
          <div className={classes.align}>
            <img src={BELL} alt="icons" className={classes.iconBell} />
            <p className={classes.buttonText}>Subscribe to tag</p>
          </div>
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <p className={classes.subscribers}>
        Subscribers:{" "}
        <span className={classes.subscriberCount}>
          {category.subscribers.toLocaleString()}
        </span>
      </p>
      <div className={classes.socialIcons}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={FB} alt="social media" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={TW} alt="social media" />
        </a>
        <a
          href="https://www.telegram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={TG} alt="social media" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LK} alt="social media" />
        </a>
      </div>
    </div>
  );
};

export default CategoryDetails;

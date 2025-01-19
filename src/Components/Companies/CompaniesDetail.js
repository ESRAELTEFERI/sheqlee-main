import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { companies } from "./CompaniesData";
import classes from "./CompaniesDetail.module.css";
import HOTJAR from "../../asset/Companies/hotjar_logo.png";
import BELL from "../../asset/bell.svg";
import Modal from "../HeroSection/Modal";
import VERIFY from "../../asset/Companies/verifyy.svg";
import URL from "../../asset/Companies/link.svg";
import CONTACT from "../../asset/Companies/employee.svg";
import ADDRESS from "../../asset/Companies/placeholderr.svg";
import CompaniesDetailDescription from "./CompaniesDetailDescription";
import CategoriesListPag from "../JobsFilterBar/CategoriesListPag";

const CompaniesDetail = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const { companysName } = useParams();

  // Find the company by name
  const company = companies.find(
    (company) =>
      company.name.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-") ===
      companysName
  );

  if (!company) {
    return <div>company not found!</div>;
  }

  return (
    <>
      <div className={classes.card}>
        <img src={HOTJAR} alt="hotjar logo" className={classes.icon} />
        <div className={classes.align}>
          <h2 className={classes.heading}>{company.name}</h2>
          {company.isVerified && (
            <img src={VERIFY} alt="verified" className={classes["verify"]} />
          )}
        </div>
        <div className={classes.align}>
          <div className={classes.alignDescription}>
            <p className={classes.description}>
              {" "}
              <img src={URL} alt="url-icons" className={classes.icons} />
              {company.url}
            </p>
          </div>
          <div className={classes.alignDescription}>
            <p className={classes.description}>
              <img
                src={CONTACT}
                alt="contact-icons"
                className={classes.icons}
              />
              {company.contact}
            </p>
          </div>
          <div className={classes.alignDescription}>
            <p className={classes.description}>
              <img
                src={ADDRESS}
                alt="address-icons"
                className={classes.icons}
              />
              {company.address}
            </p>
          </div>
        </div>
        <div>
          <button className={classes.subscribeButton} onClick={openModal}>
            <div className={classes.align}>
              <img src={BELL} alt="icons" className={classes.iconBell} />
              <p className={classes.buttonText}>Subscribe to company</p>
            </div>
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
        <p className={classes.subscribers}>
          Subscribers:{" "}
          <span className={classes.subscriberCount}>
            {company.subscribers.toLocaleString()}
          </span>
        </p>
      </div>
      <CompaniesDetailDescription />
      <h2 className={`${classes.title} ${classes.card}`}>
        Job posts from {company.name}
      </h2>
      <CategoriesListPag />
    </>
  );
};

export default CompaniesDetail;

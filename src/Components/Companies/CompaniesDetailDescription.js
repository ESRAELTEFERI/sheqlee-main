import React, { useState } from "react";
import classes from "./CompaniesDetailDescription.module.css";
import DOWN from "../../asset/Companies/Groupp.svg";
const CompaniesDetailDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <p>
          Hotjar is a successful Product Experience Insights company that
          operates on a fully remote basis, with team members spread throughout
          Europe, Africa and the Americas. Our team casts a wide net across many
          locations, lifeclasses, and backgrounds. We celebrate the uniqueness
          and strength found in diversity: it’s our differences that make us
          interesting, and our shared belief in Hotjar’s Core Values{" "}
          <a href=" https://hotjar.com/core-values " className={classes.link}>
            {" "}
            Hotjar's Core Values
          </a>
          that bind us together.
          <p>
            These values form Hotjar's culture as one guided by respect,
            transparency, collaboration, and direct feedback. We put our
            customers at the heart of everything we do, and we do so through a
            diverse team working together in an honest, inclusive environment.
            We all commit to creating a safe working environment and are allies
            to those often underrepresented - including but not limited to
            members of BIPOC and LGBTQIA+ communities, people with disabilities,
            and all people who identify as women.
          </p>
        </p>
        {isExpanded && (
          <p>
            Hotjar is a successful Product Experience Insights company that
            operates on a fully remote basis, with team members spread
            throughout Europe, Africa and the Americas. Our team casts a wide
            net across many locations, lifeclasses, and backgrounds. We
            celebrate the uniqueness and strength found in diversity: it’s our
            differences that make us interesting, and our shared belief in
            Hotjar’s Core Valuesthat bind us together.
          </p>
        )}
      </div>
      <button onClick={toggleReadMore} className={classes.button}>
        {isExpanded ? (
          <>
            Read less <span>▲</span>
          </>
        ) : (
          <div className={classes.alignn}>
            <div className={classes.Read}>Read More </div>
            <img src={DOWN} alt="collapse icon" className={classes.ReadIcon} />
          </div>
        )}
      </button>
    </div>
  );
};

export default CompaniesDetailDescription;

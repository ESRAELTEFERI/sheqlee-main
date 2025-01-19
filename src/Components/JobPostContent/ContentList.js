import React, { useState, useEffect } from "react";
import classes from "./ContentList.module.css";
import arrowRight from "../../asset/NavCathagories/arrow_right.png";
import ContentMainList from "./ContentMainList";
import { Contents } from "./ContentData"; // Assuming this is imported correctly
import { useNavigate } from "react-router-dom";

const ContentsList = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second load time
    return () => clearTimeout(timer);
  }, []);

  const displayedContents = Contents.slice(0, 9);
  const remainingContents = Contents.length - displayedContents.length;

  const handleMoreContentsClick = () => {
    navigate("/all-jobs");
  };

  return (
    <div className={classes.background}>
      <div className={classes.align}>
        <div className={classes.head}>
          <span className={classes.hh2}>Latest job posts</span>
          <div className={classes.moreJobs}>
            {loading ? (
              <span className={classes.skeletonSpan2}> </span>
            ) : (
              <span
                className={classes.linkJobs}
                onClick={handleMoreContentsClick}
              >
                {remainingContents}+ more jobs
              </span>
            )}
            <img src={arrowRight} alt="ArrowRight" className={classes.arrow} />
            <div className={classes.underline}> </div>
          </div>
        </div>
        <ContentMainList
          displayedContents={displayedContents}
          remainingContents={remainingContents}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ContentsList;

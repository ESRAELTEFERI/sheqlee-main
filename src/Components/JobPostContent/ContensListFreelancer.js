import React, { useState, useEffect } from "react";
import classes from "./ContentList.module.css";
import ContentMainList from "./ContentMainList";
import { Contents } from "./ContentData";
import { useNavigate } from "react-router-dom";

const ContentsListFreelancer = () => {
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
        <ContentMainList
          displayedContents={displayedContents}
          remainingContents={remainingContents}
          loading={loading}
        />

        <button
          className={classes.viewButton}
          onClick={handleMoreContentsClick}
        >
          View all job posts
        </button>
      </div>
    </div>
  );
};

export default ContentsListFreelancer;

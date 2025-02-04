import React, { useState, useEffect } from "react";
import TagItem from "./TagItem";
import classes from "./TagsList.module.css";
import arrowRight from "../../asset/NavCathagories/arrow_right.png";
import { tags } from "./TagData";
import { useNavigate } from "react-router-dom";

const TagsList = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); //intialzation of navigation

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 12000); // Simulate a 2-second load time
    return () => clearTimeout(timer);
  }, []);

  const handleMoreTagsClick = () => {
    navigate("/tags");
  };

  const displayedTags = tags.slice(0, 6); // Limit to first 6 tags
  const remainingTags = tags.length - displayedTags.length;

  return (
    <div className={classes.background}>
      <div className={classes.align}>
        <div className={classes.head}>
          <span className={classes.hh2}>Popular tags</span>
          <div className={classes.moreTags}>
            {loading ? (
              <span className={classes.skeletonSpan}></span>
            ) : (
              <span className={classes.linkTags} onClick={handleMoreTagsClick}>
                {remainingTags}+ more tags
              </span>
            )}
            <img src={arrowRight} alt="ArrowRight" className={classes.arrow} />
            <div className={classes.underline}></div>
          </div>
        </div>
        <div className={classes.tagsContainer}>
          {loading
            ? Array(6)
                .fill(0)
                .map((_, index) => <TagItem key={index} loading={true} />)
            : displayedTags.map((tag, index) => (
                <TagItem
                  key={index}
                  name={tag.name}
                  jobs={tag.jobs}
                  subscribers={tag.subscribers}
                  loading={false}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default TagsList;

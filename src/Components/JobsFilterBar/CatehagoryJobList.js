import React from "react";
import CatehagoryItem from "../JobPostContent/CatehagoryItem.js";
// import ContentBottom from "../JobPostContent/ContentBottom";
import classes from "./JobList.module.css";
import ERROR from "../../asset/NoResult/error.svg";

const JobList = ({ contents, loading }) => {
  return (
    <div className={classes.tagsContainer}>
      {contents.length > 0 ? (
        contents.map((content, index) => (
          <CatehagoryItem
            key={index}
            title={content.title}
            description={content.description}
            timePosted={content.timePosted}
            company={content.company}
            jobType={content.jobType}
            level={content.level}
            pay={content.pay}
            applyLink={content.applyLink}
            loading={loading}
          >
            {/* {Object.entries(content.elements).map(([key, value], subIndex) => (
              <ContentBottom
                key={subIndex}
                elementKey={key}
                elementValue={value}
                showApplyButton={
                  subIndex === Object.entries(content.elements).length - 3
                }
                loading={loading}
              />
            ))} */}
          </CatehagoryItem>
        ))
      ) : (
        /****Displaying Not Found****/
        <div>
          <img src={ERROR} alt="no result found" className={classes.noFound} />
          <p className={classes.noFoundText}>No results found</p>
        </div>
      )}
    </div>
  );
};

export default JobList;

import React from "react";
import ContentItem from "./ContentItems";
// import ContentBottom from "./ContentBottom";
import classes from "./ContentList.module.css";

function ContentMainList({ displayedContents, loading }) {
  return (
    <div className={classes.tagsContainer}>
      {displayedContents.map((content, index) => (
        <ContentItem
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
              } // Show button(apply) only for the 3rd backward element
              loading={loading}
            />
          ))} */}
        </ContentItem>
      ))}
    </div>
  );
}

export default ContentMainList;

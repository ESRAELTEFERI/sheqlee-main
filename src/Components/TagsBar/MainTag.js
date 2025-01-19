import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MainTag.module.css";
import { getTagsWithName } from "../Tags/TagData";
import TAG from "../../asset/tag.svg";
import Pagination from "./Pagination";

const MainTag = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const tagsPerPage = 24; // Number of tags to display per page
  const TagsName = getTagsWithName;
  const totalPages = Math.ceil(TagsName.length / tagsPerPage);

  // Slice the TagsName based on current page
  const startIndex = (currentPage - 1) * tagsPerPage;
  const displayedTags = TagsName.slice(startIndex, startIndex + tagsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className={classes.container}>
        <img src={TAG} alt="Tag header" className={classes.iconTag} />
        <h1 className={classes.heading}>All Tags</h1>
        <p className={classes.subheading}>
          Job categories along with their respective number of jobs posted and
          number of subscribers.
        </p>
        <div className={classes.grid}>
          {displayedTags.map((tag, index) => (
            <Link
              to={`/tags/${tag.name
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/\//g, "-")}`}
              className={classes.card}
              key={index}
            >
              <div className={classes.contentContainer}>
                <h3 className={classes.title}>{tag.name}</h3>
                <p className={classes.details}>
                  {tag.jobs} jobs &bull; {tag.subscribers} subscribers
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default MainTag;

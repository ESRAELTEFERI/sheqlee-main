import React, { useState, useEffect } from "react";
import ContentItem from "../../JobPostContent/ContentItems";
import ContentBottom from "../../JobPostContent/ContentBottom";
import { Contents } from "../../JobPostContent/ContentData";
import classes from "../JobFilterPagination/JobFilterPagination.module.css";

const ITEMS_PER_PAGE = 3; // Number of items per page

const JobFilterPagination = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategories, setSelectedCategories] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContents, setFilteredContents] = useState(Contents);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second load time
    return () => clearTimeout(timer);
  }, []);

  // Extract unique dropdown values
  const uniqueCategories = Array.from(
    new Set(Contents.map((item) => item.title))
  );
  const uniqueTypes = Array.from(
    new Set(Contents.map((item) => item.elements.type))
  );
  const uniqueLevels = Array.from(
    new Set(Contents.map((item) => item.elements.level))
  );

  // Filter logic
  const handleFilter = () => {
    const results = Contents.filter((content) => {
      const matchesType = selectedType
        ? content.elements.type === selectedType
        : true;
      const matchesCategories = selectedCategories
        ? content.title === selectedCategories
        : true;
      const matchesLevel = selectedLevel
        ? content.elements.level === selectedLevel
        : true;
      const matchesSearch = content.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesSearch && matchesType && matchesCategories && matchesLevel;
    });
    setFilteredContents(results);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredContents.length / ITEMS_PER_PAGE);
  const displayedContents = filteredContents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const createPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage > 3) {
        pages.push(1, "dots");
      } else {
        for (let i = 1; i <= Math.min(3, totalPages); i++) {
          pages.push(i);
        }
      }

      if (currentPage > 3 && currentPage < totalPages - 2) {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      } else if (currentPage >= totalPages - 2) {
        for (
          let i = Math.max(totalPages - 2, currentPage - 1);
          i <= totalPages;
          i++
        ) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push("dots", totalPages);
      }
    }

    return pages;
  };

  return (
    <>
      <div className={classes.container}>
        {/* Filters */}
        <h2 className={classes.title}>All Job Posts</h2>
        <div className={classes.filters}>
          <select
            value={selectedCategories}
            onChange={(e) => setSelectedCategories(e.target.value)}
            className={`${classes.dropdown} ${classes.categories}`}
          >
            <option value="" disabled>
              Select a category
            </option>
            {uniqueCategories.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className={`${classes.dropdown} ${classes.types}`}
          >
            <option value="" disabled>
              Select a type
            </option>
            {uniqueTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className={`${classes.dropdown} ${classes.levels}`}
          >
            <option value="" disabled>
              Select a level
            </option>
            {uniqueLevels.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search by programming technology or field..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={classes.searchInput}
          />
          <button onClick={handleFilter} className={classes.applyButton}>
            Apply filter
          </button>
        </div>
      </div>
      {/* Display filtered and paginated items */}
      <div className={classes.tagsContainer}>
        {displayedContents.length > 0 ? (
          displayedContents.map((content, index) => (
            <ContentItem
              key={index}
              title={content.title}
              description={content.description}
              loading={loading}
            >
              {Object.entries(content.elements).map(
                ([key, value], subIndex) => (
                  <ContentBottom
                    key={subIndex}
                    elementKey={key}
                    elementValue={value}
                    showApplyButton={
                      subIndex === Object.entries(content.elements).length - 3
                    }
                    loading={loading}
                  />
                )
              )}
            </ContentItem>
          ))
        ) : (
          <p
            style={{
              color: "#FF0000",
              textAlign: "center",
              marginTop: "20px",
              fontSize: "18px",
            }}
          >
            No results found
          </p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className={classes.pagination}>
        {createPagination().map((item, index) =>
          item === "dots" ? (
            <span key={index} className={classes.ellipsis}>
              &#8230;
            </span>
          ) : (
            <button
              key={index}
              onClick={() => handlePageChange(item)}
              className={`${classes.paginationButton} ${
                currentPage === item ? classes.activePage : ""
              }`}
            >
              {item}
            </button>
          )
        )}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={classes.navButtonLeft}
        >
          &#8592;
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={classes.navButtonRight}
        >
          &#8594;
        </button>
      </div>
    </>
  );
};

export default JobFilterPagination;

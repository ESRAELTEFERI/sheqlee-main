import React, { useState } from "react";
import classes from "./JobsFilter.module.css";
import SEARCH from "../../asset/Filter/search.svg";
// import DOWN from "../../asset/Filter/arrow-down.svg";
// import { FiChevronDown } from "react-icons/fi"; // Import the icon

const JobsFilter = ({ contents, onFilter }) => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategories, setSelectedCategories] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Extract unique dropdown values
  const uniqueCategories = Array.from(
    new Set(contents.map((item) => item.title))
  );
  const uniqueTypes = Array.from(new Set(contents.map((item) => item.jobType)));
  const uniqueLevels = Array.from(new Set(contents.map((item) => item.level)));

  const handleFilter = () => {
    const results = contents.filter((content) => {
      const matchesType = selectedType ? content.type === selectedType : true;
      const matchesCategories = selectedCategories
        ? content.title === selectedCategories
        : true;
      const matchesLevel = selectedLevel
        ? content.level === selectedLevel
        : true;
      const matchesSearch = content.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesSearch && matchesType && matchesCategories && matchesLevel;
    });
    onFilter(results); // Pass the filtered results to the parent
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>All Job Posts</h2>
      <p className={classes.subtitle}>
        Browse the latest jobs you can take up right now. Use filters to find
        the best jobs for your skillset.
      </p>
      <div className={classes.filters}>
        <div className={classes["select-container"]}>
          <select
            value={selectedCategories}
            onChange={(e) => setSelectedCategories(e.target.value)}
            className={classes.dropdown}
          >
            <option value="" disabled hidden>
              All categories
            </option>
            {uniqueCategories.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className={classes["select-container"]}>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className={classes.dropdown}
          >
            <option value="" disabled hidden>
              All types
            </option>
            {uniqueTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className={classes["select-container"]}>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className={classes.dropdown}
          >
            <option value="" disabled hidden>
              All levels
            </option>
            {uniqueLevels.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className={classes.searchCon}>
          <img src={SEARCH} alt="searching" className={classes.search} />
          <input
            type="text"
            placeholder="Search by programming technology or field..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={classes.searchInput}
          />
        </div>
        <button onClick={handleFilter} className={classes.applyButton}>
          Apply filter
        </button>
      </div>
    </div>
  );
};

export default JobsFilter;

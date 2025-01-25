import React, { useState, useEffect } from "react";
import JobsFilterFreelancer from "./JobsFilterFreelancer";
import JobList from "../JobsFilterBar/JobList";
import Pagination from "../JobsFilterBar/Pagination";
import { Contents } from "../JobPostContent/ContentData";
import classes from "./DashCom.module.css";
import DASHBOARD from "../../asset/After/dashboard.svg";

const ITEMS_PER_PAGE = 6; // Number of items per page

const DashFree = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredContents, setFilteredContents] = useState(Contents);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second load time
    return () => clearTimeout(timer);
  }, []);

  const handleFilter = (results) => {
    setFilteredContents(results);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  const totalPages = Math.ceil(filteredContents.length / ITEMS_PER_PAGE);
  const displayedContents = filteredContents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <div className={classes.container}>
        <img
          src={DASHBOARD}
          alt="dashboard header"
          className={classes.iconCat}
        />
        <h1 className={classes.heading}>Dashboard</h1>
        <p className={classes.subheading}>
          These are jobs for you based on your skills.
        </p>
      </div>
      {/* Filters */}
      <JobsFilterFreelancer contents={Contents} onFilter={handleFilter} />

      {/* Display Jobs */}
      <JobList contents={displayedContents} loading={loading} />

      {/* Pagination Controls */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default DashFree;

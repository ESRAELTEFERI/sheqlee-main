import React, { useState, useEffect } from "react";
import JobsFilter from "./JobsFilter";
import JobList from "./JobList";
import Pagination from "./Pagination";
import { Contents } from "../JobPostContent/ContentData";

const ITEMS_PER_PAGE = 6; // Number of items per page

const MainPagFilter = () => {
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
      {/* Filters */}
      <JobsFilter contents={Contents} onFilter={handleFilter} />

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

export default MainPagFilter;

import React from "react";
import classes from "./Pagination.module.css";

import NEXT from "../../asset/Pagination/pagLeft.svg";
import PREVIOUS from "../../asset/Pagination/pagRight.svg";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const createPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      //hERE
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
  
    <div className={classes.pagination}>
      <div className={classes.naz}>
      {createPagination().map((item, index) =>
        item === "dots" ? (
          <span key={index} className={classes.ellipsis}>
            &#8230;
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(item)}
            className={`${classes.paginationButton} ${
              currentPage === item ? classes.activePage : ""
            }`}
          >
            {item}
          </button>
        )
      )}
      </div>
      {totalPages > 0 && (

        <div className={classes.nav}>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={classes.navButtonLeft}
          >
            <img src={PREVIOUS} alt="previous" className={classes.iconn} />
          </button>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={classes.navButtonRight}
          >
            <img src={NEXT} alt="next" className={classes.iconn} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;

import React from "react";
import { ResourcePageWrapper } from "./resourceGrid.style";
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const getVisiblePageNumbers = () => {
    if (totalPages <= 5) {
      return pageNumbers;
    }

    const visiblePages = [];

    visiblePages.push(1);

    if (currentPage > 3) {
      visiblePages.push("...");
    }

    for (let i = Math.max(2, currentPage - 1); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
      visiblePages.push(i);
    }

    if (currentPage < totalPages - 2) {
      visiblePages.push("...");
    }

    if (totalPages > 1) {
      visiblePages.push(totalPages);
    }

    return visiblePages;
  };

  const visiblePageNumbers = getVisiblePageNumbers();

  return (
    <ResourcePageWrapper>
      <div className="pagination-container">
        <button
          onClick={handlePrevious}
          className={`pagination-btn prev-btn ${currentPage === 1 ? "disabled-btn" : ""}`}
          disabled={currentPage === 1}
        >
          <FaChevronLeft className="arrow-icon" /> Previous
        </button>

        <div className="page-numbers">
          {visiblePageNumbers.map((item, index) => (
            item === "..." ?
              <span key={`ellipsis-${index}`} className="ellipsis">...</span> :
              <button
                key={item}
                onClick={() => paginate(item)}
                className={item === currentPage ? "page-btn active-btn" : "page-btn"}
              >
                {item}
              </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className={`pagination-btn next-btn ${currentPage === totalPages ? "disabled-btn" : ""}`}
          disabled={currentPage === totalPages}
        >
          Next <FaChevronRight className="arrow-icon" />
        </button>
      </div>
    </ResourcePageWrapper>
  );
};

export default Pagination;
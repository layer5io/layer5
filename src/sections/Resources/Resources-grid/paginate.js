import React from "react";
import { ResourcePageWrapper } from "./resourceGrid.style";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

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
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 575;
    const maxVisible = isMobile ? 3 : 5;
    
    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = [];
    
    if (isMobile) {
      // Mobile: Show fewer pages
      if (currentPage <= 2) {
        pages.push(1, 2, 3);
        if (totalPages > 3) pages.push("...");
      } else if (currentPage >= totalPages - 1) {
        if (totalPages > 3) pages.push("...");
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push("...", currentPage - 1, currentPage, currentPage + 1, "...");
      }
    } else {
      // Desktop: Original logic
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      if (totalPages > 1) pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePageNumbers();

  return (
    <ResourcePageWrapper>
      <div className="pagination-container">
        <button
          onClick={handlePrevious}
          className={`pagination-btn prev-btn ${currentPage === 1 ? 'disabled-btn' : ''}`}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <div className="page-numbers">
          {visiblePages.map((page, idx) =>
            page === "..." ? (
              <span key={`ellipsis-${idx}`} className="ellipsis">
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => paginate(page)}
                className={page === currentPage ? "page-btn active-btn" : "page-btn"}
              >
                {page}
              </button>
            )
          )}
        </div>

        <button
          onClick={handleNext}
          className={`pagination-btn next-btn ${currentPage === totalPages ? 'disabled-btn' : ''}`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </ResourcePageWrapper>
  );
};

export default Pagination;


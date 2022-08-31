import React from "react";
import { ResourcePageWrapper } from "./resourceGrid.style";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ResourcePageWrapper>
      <div className="btn-container">
        {pageNumbers.map(number => (
          <button key={number} onClick={() => paginate(number)} className={(number === currentPage) ? "btn active-btn" : "btn page-btn"}>
            {number}
          </button>
        ))}
      </div>
    </ResourcePageWrapper>
  );
};

export default Pagination;
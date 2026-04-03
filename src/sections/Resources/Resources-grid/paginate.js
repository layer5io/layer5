import React from "react";
import { ResourcePageWrapper } from "./resourceGrid.style";
import Button from "../../../reusecore/Button";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <ResourcePageWrapper>
      <div className="btn-container">
        <Button
          $secondary
          onClick={() => paginate(currentPage - 1)}
          className="nav-btn"
          disabled={currentPage === 1}
        >
          &larr; Previous
        </Button>

        <Button
          $primary
          onClick={() => paginate(currentPage + 1)}
          className="nav-btn"
          disabled={currentPage === totalPages}
        >
          Next &rarr;
        </Button>
      </div>
    </ResourcePageWrapper>
  );
};

export default Pagination;
import React, { useEffect, useState } from "react";

import { content } from "./content";
import Button from "../../reusecore/Button";
import TocPaginationWrapper from "./TocPagination.style";

const TocPagination = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const path = window.location.pathname;
    const index = content.findIndex((x) => x.link === path);
    setCurrentPage(index);
  }, []);

  const handleNextClick = () => {
    if (currentPage < content.length - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrevClick = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <TocPaginationWrapper>
      <Button
        secondary
        url={content[currentPage - 1]?.link}
        onClick={handlePrevClick}
        className={currentPage === 0 ? "btn-toc-pagination-disable" : null}
        disable={currentPage === 0}
      >
        &larr; Previous
      </Button>

      <Button
        primary
        url={content[currentPage + 1]?.link}
        onClick={handleNextClick}
        className={
          currentPage === content.length - 1
            ? "btn-toc-pagination-disable"
            : null
        }
        disabled={currentPage === content.length - 1}
      >
        Next &rarr;
      </Button>
    </TocPaginationWrapper>
  );
};

export default TocPagination;

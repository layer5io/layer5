import React from "react";
import { Link } from "gatsby";
import { PaginationWrapper } from "../../../components/handbook-navigation/TocPagination.style";
import Button from "../../../reusecore/Button";

const HandbookPagination = ({ pages, currentSlug }) => {
  const currentIndex = pages.findIndex(page => page.fields.slug === currentSlug);
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <PaginationWrapper>
      <div className="previous-page">
        {prevPage && (
          <Link to={prevPage.fields.slug}>
            <Button $secondary title="Previous" />
          </Link>
        )}
      </div>
      <div className="next-page">
        {nextPage && (
          <Link to={nextPage.fields.slug}>
            <Button $primary title="Next" />
          </Link>
        )}
      </div>
    </PaginationWrapper>
  );
};

export default HandbookPagination;

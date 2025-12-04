import React from "react";
import { Link } from "gatsby";
import TocPaginationWrapper from "../../../../components/handbook-navigation/TocPagination.style";
import Button from "../../../../reusecore/Button";

const HandbookPagination = ({ pages, currentSlug }) => {
  const currentIndex = pages.findIndex(page => page.fields.slug === currentSlug);
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <TocPaginationWrapper>
      {prevPage && (
        <Button $secondary $url={prevPage.fields.slug}>
          &larr; Previous
        </Button>
      )}
      {nextPage && (
        <Button $primary $url={nextPage.fields.slug}>
          Next &rarr;
        </Button>
      )}
    </TocPaginationWrapper>
  );
};

export default HandbookPagination;

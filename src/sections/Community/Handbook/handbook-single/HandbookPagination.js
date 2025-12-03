import React from "react";
import { Link } from "gatsby";
import { PaginationWrapper } from "../../handbook-navigation/TocPagination.style";

const HandbookPagination = ({ pages, currentSlug }) => {
  const currentIndex = pages.findIndex(page => page.fields.slug === currentSlug);
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <PaginationWrapper>
      {prevPage && (
        <Link to={prevPage.fields.slug} className="prev">
                    ← {prevPage.frontmatter.title}
        </Link>
      )}
      {nextPage && (
        <Link to={nextPage.fields.slug} className="next">
          {nextPage.frontmatter.title} →
        </Link>
      )}
    </PaginationWrapper>
  );
};

export default HandbookPagination;

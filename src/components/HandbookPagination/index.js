import React from "react";
import Button from "../../reusecore/Button";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${props => props.theme.shadowLightColor || "#eee"};
`;

const HandbookPagination = ({ allPages, currentSlug }) => {
    const currentIndex = allPages.findIndex(
        (page) => page.fields.slug === currentSlug
    );

    const prevPage = currentIndex > 0 ? allPages[currentIndex - 1] : null;
    const nextPage = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

    return (
        <PaginationWrapper>
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
        </PaginationWrapper>
    );
};

export default HandbookPagination;

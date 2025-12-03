import React from "react";
import { HandbookWrapper } from "../Handbook.style";
import { Container } from "../../../../reusecore/Layout";
import HandbookTOC from "./HandbookTOC";
import HandbookPagination from "./HandbookPagination";

const HandbookSingle = ({ data, children }) => {
  const { mdx, allHandbookPages } = data;
  const currentSlug = mdx.fields.slug;

  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>{mdx.frontmatter.title}</h1>
      </div>
      <HandbookTOC pages={allHandbookPages.nodes} currentSlug={currentSlug} />
      <div className="page-section">
        <Container>
          <div className="content">
            {children}
          </div>
          <HandbookPagination
            pages={allHandbookPages.nodes}
            currentSlug={currentSlug}
          />
        </Container>
      </div>
    </HandbookWrapper>
  );
};

export default HandbookSingle;

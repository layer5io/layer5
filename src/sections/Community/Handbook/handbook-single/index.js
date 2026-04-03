import React from "react";
import { HandbookWrapper } from "../Handbook.style";
import { Container } from "../../../../reusecore/Layout";
import HandbookTOC from "./HandbookTOC";
import HandbookPagination from "./HandbookPagination";
import IntraPage from "../../../../components/handbook-navigation/intra-page";

const HandbookSingle = ({ data, children }) => {
  const { mdx, allHandbookPages } = data;
  const currentSlug = mdx.fields.slug;
  const contents = mdx.frontmatter.contents || [];

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
        {contents.length > 0 && <IntraPage contents={contents} />}
      </div>
    </HandbookWrapper>
  );
};

export default HandbookSingle;

import React from "react";
import { HandbookWrapper } from "../Handbook.style";
import { Container } from "../../../../reusecore/Layout";
import HandbookTOC from "./HandbookTOC";
import HandbookPagination from "./HandbookPagination";

const HandbookSingle = ({ data, children }) => {
  const { mdx, allHandbookPages } = data;
  const currentSlug = mdx.fields.slug;

  // Extract IntraPage component from children if present
  let contentChildren = children;
  let intraPageComponent = null;

  if (React.Children.count(children) > 0) {
    const childArray = React.Children.toArray(children);
    const intraPageIndex = childArray.findIndex(
      (child) => child?.type?.name === "IntraPage"
    );

    if (intraPageIndex !== -1) {
      intraPageComponent = childArray[intraPageIndex];
      contentChildren = childArray.filter((_, index) => index !== intraPageIndex);
    }
  }

  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>{mdx.frontmatter.title}</h1>
      </div>
      <HandbookTOC pages={allHandbookPages.nodes} currentSlug={currentSlug} />
      {intraPageComponent}
      <div className="page-section">
        <Container>
          <div className="content">
            {contentChildren}
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

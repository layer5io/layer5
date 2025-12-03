import React from "react";
import { Link } from "gatsby";
import { TocWrapper } from "../../handbook-navigation/toc.style";

const HandbookTOC = ({ pages, currentSlug }) => {
  return (
    <TocWrapper>
      <div className="toc-list go-top">
        <h3>Community Handbook</h3>
        <ul>
          {pages.map((page, index) => (
            <li key={index} className={currentSlug === page.fields.slug ? "active" : ""}>
              <Link to={page.fields.slug}>
                {page.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </TocWrapper>
  );
};

export default HandbookTOC;

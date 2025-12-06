import React from "react";
import { Link } from "gatsby";
import TOCWrapper from "../../../../components/handbook-navigation/toc.style";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";

const HandbookTOC = ({ pages, currentSlug }) => {
  return (
    <TOCWrapper>
      <div className="go-back">
        <Link to="/community/handbook">
          <HiOutlineChevronLeft />
          <h4>Table of Contents</h4>
        </Link>
      </div>
      <div className="toc-list">
        <ul className="toc-ul">
          {pages.map((page, index) => (
            <li key={index}>
              <Link
                to={page.fields.slug}
                className={`toc-sub-heading toc-sub-inline${page.fields.slug === currentSlug ? " active" : ""}`}
              >
                {page.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </TOCWrapper>
  );
};

export default HandbookTOC;

import React, { useState } from "react";
import { Link } from "gatsby";
import TOCWrapper from "../../../../components/handbook-navigation/toc.style";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
import { IoIosArrowDropdownCircle } from "@react-icons/all-files/io/IoIosArrowDropdownCircle";

const HandbookTOC = ({ pages, currentSlug }) => {
  const [expand, setExpand] = useState(false);

  return (
    <TOCWrapper>
      <div className="go-back">
        <Link to="/community/handbook">
          <HiOutlineChevronLeft />
          <h4>Table of Contents</h4>
        </Link>

        <button
          type="button"
          className="toc-toggle-btn"
          onClick={() => setExpand(!expand)}
          aria-label={
            expand ? "Collapse table of contents" : "Expand table of contents"
          }
          aria-expanded={expand}
          aria-controls="handbook-toc-list"
        >
          {expand ? (
            <IoMdClose className="toc-menu-icon" aria-hidden="true" />
          ) : (
            <IoIosArrowDropdownCircle
              className="toc-menu-icon"
              aria-hidden="true"
            />
          )}
        </button>
      </div>

      <div className="toc-list" id="handbook-toc-list">
        <ul className={`toc-ul ${expand ? "toc-ul-open" : ""}`}>
          {pages.map((page, index) => (
            <li key={index}>
              <Link
                to={page.fields.slug}
                className={`toc-sub-heading toc-sub-inline${
                  page.fields.slug === currentSlug ? " active" : ""
                }`}
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

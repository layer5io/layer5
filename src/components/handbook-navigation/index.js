import React, { useState } from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { Link } from "gatsby";
import { IoMdClose, IoIosArrowDropdownCircle } from "react-icons/io";

import TOCWrapper from "./toc.style";
import { content } from "./content";

const TOC = () => {
  const [expand, setExpand] = useState(false);
  return (
    <TOCWrapper>
      <div className="go-back">
        <Link to="/community/handbook">
          <HiOutlineChevronLeft />
          <h4>Table of Content</h4>
        </Link>
        <div className="toc-toggle-btn">
          {expand ? (
            <IoMdClose
              className="toc-menu-icon"
              onClick={function () {
                setExpand(!expand);
              }}
            />
          ) : (
            <IoIosArrowDropdownCircle
              className="toc-menu-icon"
              onClick={function () {
                setExpand(!expand);
              }}
            />
          )}
        </div>
      </div>
      <div className="toc-list">
        <ul className={`toc-ul ${expand ? "toc-ul-open" : ""}`}>
          {content.map((x) => (
            <li key={x.id}>
              <Link
                to={x.link}
                key={x.id}
                className="toc-sub-heading toc-sub-inline"
                activeClassName="active"
              >
                {x.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </TOCWrapper>
  );
};

export default TOC;

import React, { useState } from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { Link } from "gatsby";
import TOCWrapper from "./toc.style";
import { IoMdClose, IoIosArrowDropdownCircle } from "react-icons/io";

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
          <li>
            <Link to="/community/handbook" className="toc-sub-heading toc-sub-inline" activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to="/community/handbook/community" className="toc-sub-heading toc-sub-inline" activeClassName="active">
              Community
            </Link>
          </li>
          <li>
            <Link to="/community/handbook/contribution" className="toc-sub-heading toc-sub-inline" activeClassName="active">
              Contribution
            </Link>
          </li>
          <li>
            <Link to="/community/handbook/repository-overview" className="toc-sub-heading toc-sub-inline" activeClassName="active">
              Repository Overview
            </Link>
          </li>
          <li>
            <Link to="/community/handbook/projects" className="toc-sub-heading toc-sub-inline" activeClassName="active">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/community/handbook/mentorship-programs" className="toc-sub-heading toc-sub-inline" activeClassName="active">
              Mentorship Programs
            </Link>
          </li>
          <li>
            <Link to="/community/handbook/learn-layer5" className="toc-sub-heading toc-sub-inline" activeClassName="active">
              Learn Layer5
            </Link>
          </li>
          <li>
            <Link to="/community/handbook/connect-with-us" className="toc-sub-heading toc-sub-inline" activeClassName="active">
              Connect with us
            </Link>
          </li>
          <li>
            <Link to="/community/handbook/code-of-conduct" className="toc-sub-heading toc-sub-inline" activeClassName="active">
              Code of Conduct
            </Link>
          </li>
        </ul>
      </div>
    </TOCWrapper>
  );
};

export default TOC;

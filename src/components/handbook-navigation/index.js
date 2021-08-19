import React, { useState } from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { Link } from "gatsby";
import TOCWrapper from "./toc.style";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";

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
          {expand ?
            <IoMdClose
              className="mobile-menu-icon open"
              onClick={function () {
                setExpand(!expand);
              }}
            /> : <FaBars
              className="mobile-menu-icon"
              onClick={function () {
                setExpand(!expand);
              }}
            />
          }
        </div>
      </div>
      <div className="toc-list">
        <ul className={`toc-ul ${expand ? "toc-ul-open" : ""}`}>
          <li>
            <Link to="/community/handbook">
              <h5 className="toc-sub-heading toc-sub-inline">About</h5>
            </Link>
          </li>
          <li>
            <Link to="/community/handbook/community">
              <h5 className="toc-sub-heading toc-sub-inline">Community</h5>
            </Link>
          </li>
          <li>
            <Link to="/community/handbook/contribution">
              <h5 className="toc-sub-heading toc-sub-inline">Contribution</h5>
            </Link>
          </li>
          <li>
            <Link to="/community/handbook/repository-overview">
              <h5 className="toc-sub-heading toc-sub-inline">Repository Overview</h5>
            </Link>
          </li>
          <li>
            <Link to="/community/handbook/projects">
              <h5 className="toc-sub-heading toc-sub-inline">Projects</h5>
            </Link>
          </li>
          <li>
            <Link to="/community/handbook/mentorship-programs">
              <h5 className="toc-sub-heading toc-sub-inline">Mentorship Programs</h5>
            </Link>
          </li>
          <li>
            <Link to="/community/handbook/learn-layer5">
              <h5 className="toc-sub-heading toc-sub-inline">Learn Layer5</h5>
            </Link>
          </li>
          <li>
            <Link to="/community/handbook/connect-with-us">
              <h5 className="toc-sub-heading toc-sub-inline">Connect with us</h5>
            </Link>
          </li>
          <li>
            <Link to="/community/handbook/code-of-conduct">
              <h5 className="toc-sub-heading toc-sub-inline">Code of Conduct</h5>
            </Link>
          </li>
        </ul>
      </div>
    </TOCWrapper>
  );
};

export default TOC;

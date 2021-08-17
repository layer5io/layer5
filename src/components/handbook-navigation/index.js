import React from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { Link } from "gatsby";
import TOCWrapper from "./toc.style";

const TOC = () => {
  return (
    <TOCWrapper>
      <div className="go-back">
        <Link to="/community/handbook">
          <HiOutlineChevronLeft />
          <h4>Table of Content</h4>
        </Link>
      </div>
      <div className="toc-list">
        <ul className="toc-ul">
          <li>
            <Link to="/handbook/about">
              <h5 className="toc-sub-heading toc-sub-inline">About</h5>
            </Link>
          </li>
          <li>
            <Link to="/handbook/community">
              <h5 className="toc-sub-heading toc-sub-inline">Community</h5>
            </Link>
          </li>
          <li>
            <Link to="/handbook/contribution">
              <h5 className="toc-sub-heading toc-sub-inline">Contribution</h5>
            </Link>
          </li>
          <li>
            <Link to="/handbook/repository-overview">
              <h5 className="toc-sub-heading toc-sub-inline">Repository Overview</h5>
            </Link>
          </li>
          <li>
            <Link to="/handbook/projects">
              <h5 className="toc-sub-heading toc-sub-inline">Projects</h5>
            </Link>
          </li>
          <li>
            <Link to="/handbook/mentorship-programs">
              <h5 className="toc-sub-heading toc-sub-inline">Mentorship Programs</h5>
            </Link>
          </li>
          <li>
            <Link to="/handbook/learn-layer5">
              <h5 className="toc-sub-heading toc-sub-inline">Learn Layer5</h5>
            </Link>
          </li>
          <li>
            <Link to="/handbook/connect-with-us">
              <h5 className="toc-sub-heading toc-sub-inline">Connect with us</h5>
            </Link>
          </li>
          <li>
            <Link to="/handbook/code-of-conduct">
              <h5 className="toc-sub-heading toc-sub-inline">Code of Conduct</h5>
            </Link>
          </li>
        </ul>
      </div>
    </TOCWrapper>
  );
};

export default TOC;

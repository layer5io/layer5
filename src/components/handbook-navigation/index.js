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
        <ul>
          <Link to="/handbook/about">
            <h5 className="toc-sub-heading">About</h5>
          </Link>

          <Link to="/handbook/community">
            <h5 className="toc-sub-heading">Community</h5>
          </Link>
          <Link to="/handbook/contribution">
            <h5 className="toc-sub-heading">Contribution</h5>
          </Link>
          <Link to="/handbook/repository-overview">
            <h5 className="toc-sub-heading">Repository Overview</h5>
          </Link>
          <Link to="/handbook/projects">
            <h5 className="toc-sub-heading">Projects</h5>
          </Link>
          <Link to="/handbook/mentorship-programs">
            <h5 className="toc-sub-heading">Mentorship Programs</h5>
          </Link>
          <Link to="/handbook/learn-layer5">
            <h5 className="toc-sub-heading">Learn Layer5</h5>
          </Link>
          <Link to="/handbook/connect-with-us">
            <h5 className="toc-sub-heading">Connect with us</h5>
          </Link>
          <Link to="/handbook/code-of-conduct">
            <h5 className="toc-sub-heading">Code of Conduct</h5>
          </Link>
        </ul>
      </div>
    </TOCWrapper>
  );
};

export default TOC;

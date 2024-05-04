import React, { useState } from "react";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import { Link } from "gatsby";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
import { IoIosArrowDropdownCircle } from "@react-icons/all-files/io/IoIosArrowDropdownCircle";

import TOCWrapper from "./toc.style";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";

import { useLocation } from "@reach/router";

const TOC = () => {
  const [expand, setExpand] = useState(false);
  const location = useLocation();
  const [expandIdenity, setExpandIdentity] = useState(
    location.pathname.includes("/identity")
  );

  return (
    <TOCWrapper>
      <div className="go-back">
        <Link to="/projects/sistent">
          <HiOutlineChevronLeft />
          <h4>Table of Contents</h4>
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
            <Link
              to="/projects/sistent/about"
              className="toc-sub-heading toc-sub-inline"
              activeClassName="active"
            >
              About
            </Link>
          </li>
          <li>
            <div>
              <li
                className="toc-sub-heading identity"
                onClick={() => setExpandIdentity((prev) => !prev)}
              >
                Identity
                {expandIdenity ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </li>
              {expandIdenity && (
                <div className="identity-sublinks">
                  <li>
                    <Link
                      to="/projects/sistent/identity/color"
                      className={`toc-sub-heading toc-sub-inline identity-item ${
                        location.pathname.includes(
                          "/projects/sistent/identity/color"
                        )
                          ? "active"
                          : ""
                      }`}
                      activeClassName="active"
                    >
                      Color
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects/sistent/identity/spacing"
                      className={`toc-sub-heading toc-sub-inline identity-item ${
                        location.pathname.includes(
                          "/projects/sistent/identity/spacing"
                        )
                          ? "active"
                          : ""
                      }`}
                      activeClassName="active"
                    >
                      Spacing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects/sistent/identity/typography"
                      className={`toc-sub-heading toc-sub-inline identity-item ${
                        location.pathname.includes(
                          "/projects/sistent/identity/typography"
                        )
                          ? "active"
                          : ""
                      }`}
                      activeClassName="active"
                    >
                      Typography
                    </Link>
                  </li>
                </div>
              )}
            </div>
          </li>
          <li>
            <Link
              to="/projects/sistent/components"
              activeClassName="active"
              className="toc-sub-heading toc-sub-inline"
            >
              Components
            </Link>
          </li>
        </ul>
      </div>
    </TOCWrapper>
  );
};

export default TOC;

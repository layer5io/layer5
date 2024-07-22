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
  const [expandComponents, setExpandComponents] = useState(
    location.pathname.includes("/components")
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
                className="toc-sub-heading element"
                onClick={() => setExpandIdentity((prev) => !prev)}
              >
                Identity
                {expandIdenity ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </li>
              {expandIdenity && (
                <div className="element-sublinks">
                  <li>
                    <Link
                      to="/projects/sistent/identity/color"
                      className={`toc-sub-heading toc-sub-inline element-item ${
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
                      className={`toc-sub-heading toc-sub-inline element-item ${
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
                      className={`toc-sub-heading toc-sub-inline element-item ${
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
            <div>
              <li
                className="components"
                onClick={() => setExpandComponents((prev) => !prev)}
              >
                <Link
                  to="/projects/sistent/components"
                  className= "components-heading"
                  activeClassName="active"
                >
                  Components
                </Link>
                {expandComponents ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </li>
              {expandComponents && (
                <div className="element-sublinks">
                  <li>
                    <Link
                      to="/projects/sistent/components/button"
                      className={`toc-sub-heading toc-sub-inline element-item ${
                        location.pathname.includes(
                          "/projects/sistent/components/button"
                        )
                          ? "active"
                          : ""
                      }`}
                      activeClassName="active"
                    >
                      Button
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects/sistent/components/text-input"
                      className={`toc-sub-heading toc-sub-inline element-item ${
                        location.pathname.includes(
                          "/projects/sistent/components/text-input"
                        )
                          ? "active"
                          : ""
                      }`}
                      activeClassName="active"
                    >
                      Text Input
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects/sistent/components/modal"
                      className={`toc-sub-heading toc-sub-inline element-item ${
                        location.pathname.includes(
                          "/projects/sistent/components/modal"
                        )
                          ? "active"
                          : ""
                      }`}
                      activeClassName="active"
                    >
                      Modal
                    </Link>
                  </li>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </TOCWrapper>
  );
};

export default TOC;

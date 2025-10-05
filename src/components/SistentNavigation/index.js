import React, { useState } from "react";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import { Link } from "gatsby";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { componentsData } from "../../sections/Projects/Sistent/components/content";

import TOCWrapper from "./toc.style";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";

import { useLocation } from "@reach/router";

const TOC = () => {
  const [expand, setExpand] = useState(false);
  const location = useLocation();
  const [expandIdentity, setExpandIdentity] = useState(
    location.pathname.includes("/identity")
  );
  const [expandComponent, setExpandComponent] = useState(
    location.pathname.includes("/components")
  );

  // Sorting the array of components by name
  const sortedComponentArray = [...componentsData].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <TOCWrapper>
      <div className="go-back">
        <Link to="/projects/sistent">
          <HiOutlineChevronLeft/>
          <h4>Table of Contents</h4>
        </Link>
        <div className="toc-toggle-btn">
          {expand ? (
            <IoIosArrowDown
              className="toc-menu-icon"
              onClick={function () {
                setExpand(!expand);
              }}
            />
          ) : (
            <IoIosArrowForward
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
              <div
                type="button"
                className="toc-sub-heading identity"
                onClick={() => setExpandIdentity((prev) => !prev)}
              >
                Identity
                {expandIdentity ?
                  <IoIosArrowDown style={{ zIndex: 2 }}/> :
                  <IoIosArrowForward style={{ zIndex: 2 }}/>
                }
              </div>
              {expandIdentity && (
                <ul className="identity-sublinks">
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
                </ul>
              )}
            </div>
          </li>
          <li>
            <div>
              <div
                className="toc-sub-heading components"
                onClick={() => setExpandComponent((prev) => !prev)}
              >
                Components
                {expandComponent ?
                  <IoIosArrowDown style={{ zIndex: 2 }}/> :
                  <IoIosArrowForward style={{ zIndex: 2 }}/>
                }
              </div>
              {expandComponent && (
                <ul className="components-sublinks">
                  {sortedComponentArray.map((component) => (
                    <li key={component.id}>
                      <Link
                        to={component.url}
                        className={`toc-sub-heading toc-sub-inline components-item ${
                          location.pathname.split("/")[4] === component.url.split("/")[4]
                            ? "active"
                            : ""
                        }`}
                        activeClassName="active"
                      >
                        {component.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        </ul>
      </div>
    </TOCWrapper>
  );
};

export default TOC;

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
  const location = useLocation();
  const [expand, setExpand] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    identity: location.pathname.includes("/identity"),
    components: location.pathname.includes("/components"),
  });

  const tocData = [
    { title: "About", path: "/projects/sistent/about" },
    {
      title: "Identity",
      subItems: [
        { title: "Color", path: "/projects/sistent/identity/color" },
        { title: "Spacing", path: "/projects/sistent/identity/spacing" },
        { title: "Typography", path: "/projects/sistent/identity/typography" },
      ],
    },
    {
      title: "Components",
      path: "/projects/sistent/components",
      subItems: [
        { title: "Button", path: "/projects/sistent/components/button" },
        { title: "Text Input", path: "/projects/sistent/components/text-input" },
        { title: "Modal", path: "/projects/sistent/components/modal" },
      ],
    },
  ];

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <TOCWrapper>
      <div className="go-back">
        <Link to="/projects/sistent">
          <HiOutlineChevronLeft />
          <h4>Table of Contents</h4>
        </Link>
        <div className="toc-toggle-btn">
          {expand ? (
            <IoMdClose className="toc-menu-icon" onClick={() => setExpand(!expand)} />
          ) : (
            <IoIosArrowDropdownCircle className="toc-menu-icon" onClick={() => setExpand(!expand)} />
          )}
        </div>
      </div>
      <div className="toc-list">
        <ul className={`toc-ul ${expand ? "toc-ul-open" : ""}`}>
          {tocData.map((item, index) => (
            <li key={index}>
              {item.subItems ? (
                <div>
                  <li className="toc-sub-heading element" onClick={() => toggleSection(item.title.toLowerCase())}>
                    {item.path ? (
                      <Link to={item.path}
                        className={`${location.pathname.endsWith(item.title.toLowerCase()) ? "active" : "inactive"}`}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      item.title
                    )}
                    {expandedSections[item.title.toLowerCase()] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </li>
                  {expandedSections[item.title.toLowerCase()] && (
                    <div className="element-sublinks">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.path}
                            className={`toc-sub-heading toc-sub-inline element-item ${
                              location.pathname.includes(subItem.path) ? "active" : ""
                            }`}
                            activeClassName="active"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`toc-sub-heading toc-sub-inline ${location.pathname.includes(item.path) ? "active" : ""}`}
                  activeClassName="active"
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </TOCWrapper>
  );
};

export default TOC;
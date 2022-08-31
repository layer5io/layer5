import React, { useState } from "react";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import { Link } from "gatsby";
import TOCWrapper from "./toc.style";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
import { IoIosArrowDropdownCircle } from "@react-icons/all-files/io/IoIosArrowDropdownCircle";

const preReqSteps = [
  { name: "Set up", link: "/cloud-native-management/meshery" },
  { name: "Run Meshery",link: "/cloud-native-management/meshery/getting-started" },
  { name: "Manage Meshery", link: "/cloud-native-management/meshery/operating-service-meshes" }
];

const TOC = ({ coursesData }) => {
  const [expand, setExpand] = useState(false);
  // const reformatTOC= (data) => {
  //   let newData = data.split("-").join(" ");
  //   let firstLetter = newData.charAt(0).toUpperCase();
  //   newData = `${firstLetter}${newData.slice(1)}`;
  //   return newData;
  // };

  return (
    <TOCWrapper>
      <div className="go-back">
        <Link to={"/learn/learning-paths"}>
          <HiOutlineChevronLeft />
          <h4>Learning Paths</h4>
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
          <Link to="#pre-requisites">
            <h5 className="toc-sub-heading">
              Pre-requisites
            </h5>
          </Link>
          {preReqSteps.map((item,index) =>
            <li key={index}>
              <p className="toc-item">
                <a href={`#${item.name}`}>
                  {item.name}
                </a>
              </p>
            </li>
          )}

          <Link to="#courses-list">
            <h5 className="toc-sub-heading">
              Courses
            </h5>
          </Link>

          {coursesData.map((item,index) => (
            <li key={index}>
              <p className="toc-item">
                <a href={`#${item.frontmatter.courseTitle}`}>
                  {item.frontmatter.courseTitle}
                </a>
              </p>
            </li>
          ))}

        </ul>
      </div>
    </TOCWrapper>
  );
};

export default TOC;

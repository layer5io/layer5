import React from "react";
// import { HiOutlineChevronLeft } from "react-icons/hi";
// import { Link } from "gatsby";
import TOCWrapper from "./toc.style";


const preReqSteps = [
  {name: "Set up", link: "/service-mesh-management/meshery"},
  {name:"Run Meshery",link:"/service-mesh-management/meshery/getting-started"},
  {name: "Manage Meshery", link: "/service-mesh-management/meshery/operating-service-meshes"}
];

const TOC = ({ coursesData }) => {

  // const reformatTOC= (data) => {
  //   let newData = data.split("-").join(" ");
  //   let firstLetter = newData.charAt(0).toUpperCase();
  //   newData = `${firstLetter}${newData.slice(1)}`;
  //   return newData;
  // };

  return (
    <TOCWrapper>
      {/** <div className="go-back">
        <Link to={`/learn-ng`}>
          <HiOutlineChevronLeft />
          <h4>Learn-Layer5</h4>
        </Link>
      </div>*/}
      <div className="toc-list">
        <ul>
          <h5 className="toc-sub-heading">
            Pre-requisites
          </h5>
          {preReqSteps.map(item =>
            <li key={item.link}>
              <p className="toc-item">
                <a href={`#${item.name}`}>
                  {item.name}
                </a>
              </p>
            </li>
          )}

          <h5 className="toc-sub-heading">
            Courses
          </h5>

          {coursesData.map((item) => (
            <li key={item}>
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

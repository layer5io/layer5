import React from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { Link } from "gatsby";
import TOCWrapper from "./toc.style";

const TOC = ({ TOCData,courseData, chapterData, location }) => {

  const reformatTOC= (data) => {
    let newData = data.split("-").join(" ");
    let firstLetter = newData.charAt(0).toUpperCase();
    newData = `${firstLetter}${newData.slice(1)}`;
    return newData;
  };

  const getCurrentPage = (location) => {
    if (location !== undefined && location.href !== undefined) {
      const currentChapter = location.href.split("/");
      return currentChapter[currentChapter.length - 2];
    }
  };

  const getActiveServiceMesh = () => chapterData.fields.slug.split("/")[3];

  const availableChapters = TOCData.filter(toc => toc.fields.section === getActiveServiceMesh()).map(toc => toc.fields.chapter);

  return (
    <TOCWrapper>
      <div className="chapter-back">
        <Link to={`/${courseData.fields.slug}`}>
          <HiOutlineChevronLeft />
          <h4>{courseData.frontmatter.courseTitle}</h4>
        </Link>
      </div>
      <div className="toc-list">
        <ul>
          {availableChapters.map((item) => (
            <li key={item} className={item === getCurrentPage(location)? "active-link" : ""}>
              <p className="toc-item">
                <a href={`/learn-ng/${chapterData.fields.learnpath}/${chapterData.fields.course}/${getActiveServiceMesh()}/${item}/`}>
                  {reformatTOC(item)}
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

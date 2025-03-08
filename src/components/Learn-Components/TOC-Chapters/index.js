import React,{ useState, useEffect } from "react";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import { Link } from "gatsby";
import { getActiveServiceMesh } from "../../../utils/getActiveServiceMesh";
import { getCurrentPage } from "../../../utils/getCurrentPage";
import TOCWrapper from "./toc.style";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
import { IoIosArrowDropdownCircle } from "@react-icons/all-files/io/IoIosArrowDropdownCircle";


const TOC = ({ TOCData,courseData, chapterData, location }) => {
  const [path, setPath] = useState("");
  const [expand, setExpand] = useState(false);

  const reformatTOC = (data) => {
    let newData = data.split("-").join(" ");
    let firstLetter = newData.charAt(0).toUpperCase();
    newData = `${firstLetter}${newData.slice(1)}`;
    return newData;
  };

  const availableChapters = TOCData.filter(toc => toc.fields.section === getActiveServiceMesh(chapterData))
    .map(toc => toc.fields.chapter);

  useEffect(() => {
    const path = location.pathname.split("/");
    if (path[2] === "learning-paths"){
      setPath(getCurrentPage(location));
    } else
      return;

  }, [location.pathname]);


  return (
    <TOCWrapper>
      <div className="chapter-back">
        <Link to={`/${courseData.fields.slug}`}>
          <HiOutlineChevronLeft />
          <h4>{courseData.frontmatter.courseTitle}</h4>
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
        <ul  className={`toc-ul ${expand ? "toc-ul-open" : ""}`}>
          {availableChapters.map((item) => (
            <li key={item} className={item === path ? "active-link" : ""}>
              <p className="toc-item" key={item}>
                <Link to={`/learn/learning-paths/${chapterData.fields.learnpath}/${chapterData.fields.course}/${getActiveServiceMesh(chapterData)}/${item}/`}>
                  {reformatTOC(item)}
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </TOCWrapper>
  );
};

export default TOC;

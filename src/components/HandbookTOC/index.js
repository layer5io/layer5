import React, { useState } from "react";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import { Link } from "gatsby";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
import { IoIosArrowDropdownCircle } from "@react-icons/all-files/io/IoIosArrowDropdownCircle";
import TOCWrapper from "./toc.style";

const HandbookTOC = ({ allPages }) => {
    const [expand, setExpand] = useState(false);

    return (
        <TOCWrapper>
            <div className="go-back">
                <Link to="/community/handbook">
                    <HiOutlineChevronLeft />
                    <h4>Table of Contents</h4>
                </Link>
                <div className="toc-toggle-btn">
                    {expand ? (
                        <IoMdClose
                            className="toc-menu-icon"
                            onClick={() => setExpand(!expand)}
                        />
                    ) : (
                        <IoIosArrowDropdownCircle
                            className="toc-menu-icon"
                            onClick={() => setExpand(!expand)}
                        />
                    )}
                </div>
            </div>
            <div className="toc-list">
                <ul className={`toc-ul ${expand ? "toc-ul-open" : ""}`}>
                    {allPages.map((page, index) => (
                        <li key={index}>
                            <Link
                                to={page.fields.slug}
                                className="toc-sub-heading toc-sub-inline"
                                activeClassName="active"
                            >
                                {page.frontmatter.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </TOCWrapper>
    );
};

export default HandbookTOC;

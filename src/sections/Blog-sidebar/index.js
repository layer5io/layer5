import React from "react";
import { Link } from "gatsby";
import { AiOutlineUnorderedList } from "react-icons/ai"
import { BsFillGrid3X3GapFill } from "react-icons/bs"
import ReactTooltip from 'react-tooltip';

import kebabCase from "lodash/kebabCase"

import { FaSearch } from "react-icons/fa";

import Button from "../../reusecore/Button";

import WdThumb1 from "../../assets/images/blog/widgets-thumb/01.png";
import WdThumb2 from "../../assets/images/blog/widgets-thumb/02.png";
import WdThumb3 from "../../assets/images/blog/widgets-thumb/03.png";

import BlogSideBarWrapper from "./blogSidebar.style";


const Sidebar = ({tags}) => {
    return (
        <BlogSideBarWrapper>
            <div className="sidebar-widgets">
                <Link className="views" data-tip="List View" to="/blog-list">
                    <AiOutlineUnorderedList/>
                </Link >
                <ReactTooltip place="top" type="dark" effect="solid" />
                <Link className="views" data-tip="Grid View" to="/blog-grid">
                    <BsFillGrid3X3GapFill/>
                </Link>
                <ReactTooltip place="top" type="dark" effect="solid" />
                <div className="search-box">
                    <input type="text" placeholder="Search here..." />
                    <Button>
                        <FaSearch />
                    </Button>
                </div>
            </div>

            <div className="sidebar-widgets recent-post">
                <div className="widgets-title">
                    <h3>Latest Post</h3>
                </div>
                <div className="recent-post-block">
                    <img src={WdThumb1} alt="prime-app" />
                    <div className="recent-post-content-block">
                        <Link to="#">
                            <h3> Now led tedious shy. </h3>
                        </Link>
                        <div className="post-meta-block">
              By: <Link to="#">Admin</Link>
                            <Link to="#">Aug 07, 2020</Link>
                        </div>
                    </div>
                </div>

                <div className="recent-post-block">
                    <img src={WdThumb2} alt="prime-app" />
                    <div className="recent-post-content-block">
                        <Link to="#">
                            <h3> Now led tedious shy. </h3>
                        </Link>
                        <div className="post-meta-block">
              By: <Link to="#">Admin</Link>
                            <Link to="#">Aug 07, 2020</Link>
                        </div>
                    </div>
                </div>

                <div className="recent-post-block">
                    <img src={WdThumb3} alt="prime-app" />
                    <div className="recent-post-content-block">
                        <Link to="#">
                            <h3> Now led tedious shy. </h3>
                        </Link>
                        <div className="post-meta-block">
              By: <Link to="#">Admin</Link>
                            <Link to="#">Aug 07, 2020</Link>
                        </div>
                    </div>
                </div>

                <div className="recent-post-block">
                    <img src={WdThumb1} alt="prime-app" />
                    <div className="recent-post-content-block">
                        <Link to="#">
                            <h3> Now led tedious shy. </h3>
                        </Link>
                        <div className="post-meta-block">
              By: <Link to="#">Admin</Link>
                            <Link to="#">Aug 07, 2020</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sidebar-widgets catagorie">
                <div className="widgets-title">
                    <h3>Categories</h3>
                </div>
                <ul>
                    <li>
                        <Link to="#">
                            <span>Development</span>
                            <em>(20)</em>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <span>Technology</span>
                            <em>(12)</em>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <span>Testing</span>
                            <em>(7)</em>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <span>Tech</span>
                            <em>(11)</em>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <span>Block</span>
                            <em>(14)</em>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <span>App</span>
                            <em>(18)</em>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sidebar-widgets tags">
                <div className="widgets-title">
                    <h3>Tags</h3>
                </div>
                <ul>
                { tags && tags.map(tag => (
                    <li key={tag.fieldValue}>
                        <Link to={`/blogs/tag/${kebabCase(tag.fieldValue)}`}>{tag.fieldValue} ({tag.totalCount})</Link>
                    </li>
                ))}
                </ul>
            </div>
        </BlogSideBarWrapper>
    );
};

export default Sidebar;

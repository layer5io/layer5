import React, { useEffect, useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import slugify from "../../../utils/slugify";
import { StaticImage } from "gatsby-plugin-image";

import BlogSideBarWrapper from "./blogSidebar.style";
import { HiOutlineChevronUp } from "@react-icons/all-files/hi/HiOutlineChevronUp";
import { HiOutlineChevronDown } from "@react-icons/all-files/hi/HiOutlineChevronDown";
// import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

const Discuss = "../../../assets/images/discuss/layer5-discuss-white.webp";
const FiveandFriendsAdventures =
  "../../../assets/images/blog/five-and-friends.png";

const Sidebar = ({ pageContext }) => {
  const data = useStaticQuery(
    graphql`query allTagsAndCategories {
  tags: allMdx(
    filter: {fields: {collection: {eq: "blog"}}, frontmatter: {published: {eq: true}}}
  ) {
    group(field: {frontmatter: {tags: SELECT}}) {
      fieldValue
      totalCount
    }
  }
  categories: allMdx(
    filter: {fields: {collection: {eq: "blog"}}, frontmatter: {published: {eq: true}}}
  ) {
    group(field: {frontmatter: {category: SELECT}}) {
      fieldValue
      totalCount
    }
  }
}`
  );

  const [showTag, setShowTag] = useState(true);
  const [showCategory, setShowCategory] = useState(true);

  const tags = data.tags.group.sort((a, b) => {
    return b.totalCount - a.totalCount;
  });
  const categories = data.categories.group.sort((a, b) => {
    return b.totalCount - a.totalCount;
  });
  const category = pageContext.category ? pageContext.category : null;
  const tag = pageContext.tag ? pageContext.tag : null;

  useEffect(() => {
    if (tag || category) {
      setShowCategory(false);
      setShowTag(false);
    }
  }, []);

  return (
    <BlogSideBarWrapper>
      <div className="explain-1">
        <div className="cards">
          <a href="https://discuss.layer5.io/">
            <div className="card">
              <h2>Join the Conversation</h2>
              <p>On our Discussion Forum</p>
              <StaticImage imgClassName="logo" alt="Discuss" src={Discuss} />
            </div>
          </a>
        </div>
      </div>

      <div className="sidebar-widgets catagorie">
        <div
          className="widgets-title"
          onClick={() => setShowCategory((value) => !value)}
        >
          <h3>Categories</h3>
          {!showCategory ? (
            <HiOutlineChevronDown className="menu-icon" />
          ) : (
            <HiOutlineChevronUp className="menu-icon" />
          )}
        </div>
        <ul className={`${!showCategory ? "ul-close" : "scroll"}`}>
          {categories &&
            categories.map((category) => (
              <li key={category.fieldValue}>
                <Link
                  to={`/blog/category/${slugify(category.fieldValue)}`}
                  activeStyle={{ color: "#00b39f" }}
                >
                  <span>{category.fieldValue}</span>
                  <em>({category.totalCount})</em>
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="sidebar-widgets tags">
        <div
          className="widgets-title"
          onClick={() => setShowTag((value) => !value)}
        >
          <h3>Tags</h3>
          {!showTag ? (
            <HiOutlineChevronDown className="menu-icon" />
          ) : (
            <HiOutlineChevronUp className="menu-icon" />
          )}
        </div>
        <ul className={`${!showTag ? "ul-close" : "scroll"}`}>
          {tags &&
            tags.map((tag) => (
              <li key={tag.fieldValue}>
                <Link
                  to={`/blog/tag/${slugify(tag.fieldValue)}`}
                  activeStyle={{ background: "#00b39f", color: "#ffffff" }}
                >
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="explain-1">
        <div className="cards">
          <Link to="/community/adventures-of-five-and-friends">
            <div className="card">
              <h2>See the Adventures of Five and Friends</h2>
              <StaticImage
                alt="layer5 five and friends adventures"
                src={FiveandFriendsAdventures}
              />
            </div>
          </Link>
        </div>
      </div>
    </BlogSideBarWrapper>
  );
};

export default Sidebar;

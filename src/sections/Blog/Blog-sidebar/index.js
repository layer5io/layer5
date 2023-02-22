import React, { useEffect, useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import slugify from "../../../utils/slugify";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../../reusecore/Button";
import BlogSideBarWrapper from "./blogSidebar.style";
import { HiOutlineChevronUp } from "@react-icons/all-files/hi/HiOutlineChevronUp";
import { HiOutlineChevronDown } from "@react-icons/all-files/hi/HiOutlineChevronDown";
// import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

const Discuss = "../../../assets/images/discuss/layer5-discuss-white.png";

const Sidebar = ({ pageContext }) => {
  const data = useStaticQuery(
    graphql`
      query allTagsAndCategories {
        tags: allMdx(
          filter: {
            fields: { collection: { eq: "blog" } }
            frontmatter: { published: { eq: true } }
          }
        ) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
        categories: allMdx(
          filter: {
            fields: { collection: { eq: "blog" } }
            frontmatter: { published: { eq: true } }
          }
        ) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `
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
        <div className="widgets-title" onClick={() => setShowCategory(value => !value)}>
          <h3>Categories</h3>
          {!showCategory ? (
            <HiOutlineChevronDown className="menu-icon"/>
          ) : (
            <HiOutlineChevronUp className="menu-icon"/>
          )}
        </div>
        <ul className={`${(!showCategory) ? "ul-close" : "scroll"}`}>
          {categories &&
            categories.map((category) => (
              <li key={category.fieldValue}>
                <Link to={`/blog/category/${slugify(category.fieldValue)}`} activeStyle={{ color: "#00b39f" }}>
                  <span>{category.fieldValue}</span>
                  <em>({category.totalCount})</em>
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="sidebar-widgets tags">
        <div className="widgets-title" onClick={() => setShowTag(value => !value)}>
          <h3>Tags</h3>
          {!showTag ? (
            <HiOutlineChevronDown className="menu-icon"/>
          ) : (
            <HiOutlineChevronUp className="menu-icon"/>
          )}
        </div>
        <ul className={`${(!showTag) ? "ul-close" : "scroll"}`}>
          {tags &&
            tags.map((tag) => (
              <li key={tag.fieldValue}>
                <Link to={`/blog/tag/${slugify(tag.fieldValue)}`} activeStyle={{ background: "#00b39f", color: "#ffffff" }}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="subscribe">
        <form
          name="contactform"
          method="post"
          action="https://calcotestudios.us15.list-manage.com/subscribe/post?u=6b50be5aea3dfe1fd4c041d80&amp;id=6bb65defeb"
        >
          <div>
            <span>
              <h4>Subscribe to our Newsletter</h4>
            </span>
            <input
              className="inputrow subscribe-email"
              type="email"
              placeholder="Email Address"
              name="EMAIL"
              id="mce-EMAIL"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("Please fill-in this field")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <Button secondary title="Subscribe" aria-label="subscribe-us" id="mc-embedded-subscribe" />
          </div>
        </form>
      </div>
    </BlogSideBarWrapper>
  );
};

export default Sidebar;

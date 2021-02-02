import React from "react";
import { graphql, Link, useStaticQuery} from "gatsby";
import slugify from "../../../utils/slugify";

import { FaSearch } from "react-icons/fa";

import Button from "../../../reusecore/Button";


import BlogSideBarWrapper from "./blogSidebar.style";

const Sidebar = ( ) => {
  const data = useStaticQuery(
    graphql`
            query allTagsAndCategories {
                tags: allMdx(
                    filter: { fields: { collection: { eq: "blog" } }, frontmatter: { published: { eq: true } } }
                ){
                    group(field: frontmatter___tags) {
                        fieldValue
                        totalCount
                    }
                }
                categories: allMdx(
                    filter: { fields: { collection: { eq: "blog" } }, frontmatter: { published: { eq: true } } }
                ){
                    group(field: frontmatter___category) {
                        fieldValue
                        totalCount
                    }
                }
            }
        `
  );

  const tags = data.tags.group;
  const categories = data.categories.group;

  return (
    <BlogSideBarWrapper>
      <div className="sidebar-widgets">
        <div className="search-box">
          <input type="text" placeholder="Search here..." />
          <Button>
            <FaSearch />
          </Button>
        </div>
      </div>

      <div className="sidebar-widgets catagorie">
        <div className="widgets-title">
          <h3>Categories</h3>
        </div>
        <ul>
          { categories && categories.map(category => (
            <li key={category.fieldValue}>
              <Link to={`/blog/category/${slugify(category.fieldValue)}`}>
                <span>{category.fieldValue}</span>
                <em>({category.totalCount})</em>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-widgets tags">
        <div className="widgets-title">
          <h3>Tags</h3>
        </div>
        <ul>
          { tags && tags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/blog/tag/${slugify(tag.fieldValue)}`}>{tag.fieldValue} ({tag.totalCount})</Link>
            </li>
          ))}
        </ul>
      </div>
    </BlogSideBarWrapper>
  );
};

export default Sidebar;

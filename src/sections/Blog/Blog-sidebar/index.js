import React from "react";
import { graphql, Link, useStaticQuery} from "gatsby";
import slugify from "../../../utils/slugify";

import { FaSearch } from "react-icons/fa";

import Button from "../../../reusecore/Button";
import Discuss from "../../discuss/layer5-discuss-white.png";


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

  const tags = data.tags.group.sort((a,b) => {
    return b.totalCount - a.totalCount;
  });
  const categories = data.categories.group.sort((a,b) => {
    return b.totalCount - a.totalCount;
  });

  return (
    <BlogSideBarWrapper>
      {/*<div className="sidebar-widgets">*/}
      {/*  <div className="search-box">*/}
      {/*    <input type="text" placeholder="Search here..." />*/}
      {/*    <Button>*/}
      {/*      <FaSearch />*/}
      {/*    </Button>*/}
      {/*  </div>*/}
      {/*</div>*/}

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
      <div className="subscribe">
        <form name="contactform" method="post" action="https://calcotestudios.us15.list-manage.com/subscribe/post?u=6b50be5aea3dfe1fd4c041d80&amp;id=6bb65defeb">
          <div>
            <span>
              <h4>Subscribe to our Newsletter</h4>
            </span>
            <input className="inputrow subscribe-email" type="email" placeholder="Email Address" name="EMAIL" id="mce-EMAIL" required />
            <Button secondary title="Subscribe" id="mc-embedded-subscribe" />
          </div>
        </form>
      </div>
      <div className="explain-1">
        <div className="cards">
          <a href="https://discuss.layer5.io/">
            <div className="card">
              <h2>Join the Conversation</h2>
              <p>On our Discussion Forum</p>
              <img className="logo" src={Discuss} />
            </div>
          </a>
        </div>
      </div>

     
    </BlogSideBarWrapper>
  );
};

export default Sidebar;

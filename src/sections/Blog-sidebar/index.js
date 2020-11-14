import React from "react";
import { graphql, Link, useStaticQuery} from "gatsby";
import slugify from "../../utils/slugify";

import { FaSearch } from "react-icons/fa";

import Button from "../../reusecore/Button";


import BlogSideBarWrapper from "./blogSidebar.style";

const Sidebar = ( ) => {
    const data = useStaticQuery(
        graphql`
            query allTagsAndLatestPosts {
                allTags: allMdx(
                    filter: { fields: { collection: { eq: "blog" } }, frontmatter: { published: { eq: true } } }
                ){
                    group(field: frontmatter___tags) {
                        fieldValue
                        totalCount
                    }
                }

                latestPosts: allMdx(
                    sort: { fields: [frontmatter___date], order: DESC}
                    filter: { fields: { collection: { eq: "blog" } }, frontmatter: { published: { eq: true } } }
                    limit: 4      
                ) {
                    nodes {
                        frontmatter {
                            title
                            date(formatString: "Do MMMM YYYY")
                            author
                            thumbnail{
                                extension
                                publicURL
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }         
            }
        `
    );

    const tags = data.allTags.group;
    const latestPosts = data.latestPosts.nodes;

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

            <div className="sidebar-widgets recent-post">
                <div className="widgets-title">
                    <h3>Latest Post</h3>
                </div>
                { 
                    latestPosts.map(post => {
                        return (
                            <div className="recent-post-block" key={post.fields.slug}>
                                <img src={post.frontmatter.thumbnail.publicURL} 
                                    alt="prime-app" 
                                    height="80" width="80"/>
                                <div className="recent-post-content-block">
                                    <Link to={post.fields.slug}>
                                        <h3> {post.frontmatter.title} </h3>
                                    </Link>
                                    <div className="post-meta-block">
                                        By: <Link to={post.fields.slug}>{post.frontmatter.author}</Link>
                                        <Link to={post.fields.slug}>{post.frontmatter.date}</Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

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
                            <Link to={`/blog/tag/${slugify(tag.fieldValue)}`}>{tag.fieldValue} ({tag.totalCount})</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </BlogSideBarWrapper>
    );
};

export default Sidebar;

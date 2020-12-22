import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";

import { Container } from "../../reusecore/Layout";
import layer5_logo from "../../assets/images/app/layer5.svg";

import Data from "./utility/data.js";
import ScrollspyMenu from "./utility/ScrollspyMenu.js";

import NavigationWrap from "./navigation.style";

const Navigation = () => {
    const data = useStaticQuery(
        graphql`
            query  {
                Projects: allMdx(
                    sort: { fields: [frontmatter___date], order: DESC }
                    filter: { fields: { collection: { eq: "projects" } }, frontmatter: { published: { eq: true } } }
                    limit: 2
                ) {
                    nodes {
                        id
                        frontmatter {
                            title
                            thumbnail{
                                childImageSharp{
                                    fixed(width: 240, height: 160, cropFocus: CENTER) {
                                        ...GatsbyImageSharpFixed_withWebp
                                    }
                                }
                                extension
                                publicURL
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
                Learn: allMdx(
                    sort: { fields: [frontmatter___date], order: DESC }
                    filter: { fields: { collection: { eq: "books" } } }
                    limit: 2
                ) {
                    nodes {
                        id
                        frontmatter {
                            title
                            thumbnail{
                                childImageSharp{
                                    fixed(width: 240, height: 160, cropFocus: CENTER) {
                                        ...GatsbyImageSharpFixed_withWebp
                                    }
                                }
                                publicURL
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
                Community: allMdx(
                    sort: { fields: [frontmatter___date], order: DESC }
                    filter: { fields: { collection: { eq: "events" } } }
                    limit: 2
                ) {
                    nodes {
                        id
                        frontmatter {
                            title
                            thumbnail{
                                childImageSharp{
                                    fixed(width: 240, height: 160, cropFocus: CENTER) {
                                        ...GatsbyImageSharpFixed_withWebp
                                    }
                                }
                                publicURL
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
                Blog: allMdx(
                    sort: { fields: [frontmatter___date], order: DESC }
                    filter: { fields: { collection: { eq: "blog" } } }
                    limit: 2
                ) {
                    nodes {
                        id
                        frontmatter {
                            title
                            thumbnail{
                                childImageSharp{
                                    fixed(width: 240, height: 160, cropFocus: CENTER) {
                                        ...GatsbyImageSharpFixed_withWebp
                                    }
                                }
                                publicURL
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
                Home: allMdx(
                    sort: { fields: [frontmatter___date], order: DESC }
                    filter: { fields: { collection: { eq: "projects" } }, frontmatter: { published: { eq: true } } }
                    limit: 2
                ) {
                    nodes {
                        id
                        frontmatter {
                            title
                            thumbnail{
                                childImageSharp{
                                    fixed(width: 240, height: 160, cropFocus: CENTER) {
                                        ...GatsbyImageSharpFixed_withWebp
                                    }
                                }
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
    const [expand, setExpand] = useState(false);
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () =>
            window.pageYOffset > 50 ? setScroll(true) : setScroll(false)
        );
    }, []);

    const changeDropdownState = () => {
        setExpand(!expand);
    };
    return (
        <NavigationWrap className={`nav-block ${scroll ? "scrolled" : ""}`}>
            <Container>
                <div className="navbar-wrap">
                    <Link to="/" className="logo">
                        <img src={layer5_logo} alt="Layer5 logo" />
                    </Link>
                    <nav className="nav">
                        <FaBars
                            className="mobile-menu-icon"
                            onClick={() => setExpand(!expand)}
                        />
                        {expand &&
                            <div className="mobile-dropdown-container">
                                <div className="mobile-dropdown">
                                    <ul className="mobile-collapsed">
                                        {Data.menuItems.map((menu, index) => (
                                            <li
                                                key={index}
                                                className={
                                                    menu.subItems !== undefined ? "mobile-nav-item has-dropdown" : "mobile-nav-item"
                                                }
                                            >
                                                <Link to={menu.path} onClick={changeDropdownState} className="menu-item">{menu.name}</Link>
                                                <ul>
                                                    {menu.subItems !== undefined && menu.subItems.map((subItems, index) => (
                                                        <li
                                                            key={index}
                                                            className="mobile-nav-subitem"
                                                        >
                                                            <Link to={subItems.path} onClick={changeDropdownState} className="sub-menu-item">{subItems.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        }
                        <ScrollspyMenu
                            className={`collapsed ${expand ? "is-expanded" : ""}`}
                            menuItems={Data.menuItems}
                            blogData={data}
                        />
                    </nav>
                </div>
            </Container>
        </NavigationWrap>
    );
};

export default Navigation;

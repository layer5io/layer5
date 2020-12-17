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
                                    fluid(maxWidth: 1000){
                                        ...GatsbyImageSharpFluid_withWebp
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
                                    fluid(maxWidth: 1000){
                                        ...GatsbyImageSharpFluid_withWebp
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
                                    fluid(maxWidth: 1000){
                                        ...GatsbyImageSharpFluid_withWebp
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
                                    fluid(maxWidth: 1000){
                                        ...GatsbyImageSharpFluid_withWebp
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
                                    fluid(maxWidth: 1000){
                                        ...GatsbyImageSharpFluid_withWebp
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
    }, [ ]);
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

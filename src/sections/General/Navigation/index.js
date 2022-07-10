import React, { useState, useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
import Button from "../../../reusecore/Button";
import { Container } from "../../../reusecore/Layout";
import smp_dark_text from "../../../assets/images/service-mesh-performance/stacked/smp-dark-text.svg";
import meshery from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import Data from "./utility/menu-items.js";
import ScrollspyMenu from "./utility/ScrollspyMenu.js";
import layer5_logo from "../../../assets/images/app/layer5.svg";
import { darktheme } from "../../../theme/app/themeStyles";
import  lighttheme from "../../../theme/app/themeStyles";
import NavigationWrap from "./navigation.style";
import { GlobalStyle } from "../../app.style";
import { ThemeProvider } from "styled-components";
import { useLayoutEffect } from "react";
import "./navigation.style.css";
const Navigation = ({ theme , themeSetter }) => {
  let data = useStaticQuery(
    graphql`{
  Learn: allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {fields: {collection: {eq: "service-mesh-books"}}}
    limit: 2
  ) {
    nodes {
      id
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 240
              height: 160
              transformOptions: {cropFocus: CENTER}
              layout: FIXED
            )
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
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {fields: {collection: {eq: "events"}}}
    limit: 2
  ) {
    nodes {
      id
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 240
              height: 160
              transformOptions: {cropFocus: CENTER}
              layout: FIXED
            )
          }
          publicURL
          extension
        }
      }
      fields {
        slug
      }
    }
  }
  Blog: allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {fields: {collection: {eq: "blog"}},frontmatter: {featured: {eq: true}}}
    limit: 2
  ) {
    nodes {
      id
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 240
              height: 160
              transformOptions: {cropFocus: CENTER}
              layout: FIXED
            )
          }
          publicURL
          extension
        }
      }
      fields {
        slug
      }
    }
  }
  Home: allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {fields: {collection: {eq: "projects"}}, frontmatter: {published: {eq: true}}}
    limit: 2
  ) {
    nodes {
      id
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 240
              height: 160
              transformOptions: {cropFocus: CENTER}
              layout: FIXED
            )
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
  data["Projects"] = {
    nodes: [
      {
        frontmatter: {
          thumbnail: {
            img: meshery
          },
          title: "Meshery, the Cloud Native Manager"
        },
        fields: {
          slug: "/service-mesh-management/meshery"
        }
      },
      {
        frontmatter: {
          thumbnail: {
            img: smp_dark_text
          },
          title: "Service Mesh Performance"
        },
        fields: {
          slug: "/projects/service-mesh-performance"
        }
      }
    ]
  };
  const [expand, setExpand] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [themeToggle, setthemeToggle] = useState(false);
  const [checked, setChecked] = React.useState(true);
  const handle = () => {
    theme === "dark" ? setthemeToggle(true) : setthemeToggle(false);

    localStorage.setItem("Theme", theme);

  };

  useLayoutEffect(() => {
    if (localStorage.getItem("Theme")===null){
      themeSetter("light");
    } else {
      themeSetter(localStorage.getItem("Theme"));
    }

  }, []);

  useLayoutEffect(() => {
    handle();
  }, [theme]);
  const themeToggler = () => {
    theme === "light" ?  themeSetter("dark"): themeSetter("light");
  };

  const dropDownRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.pageYOffset > 50 ? setScroll(true) : setScroll(false)
    );
  }, []);

  const changeDropdownState = () => {
    setExpand(!expand);
  };

  const openDropDown = () => {
    dropDownRef.current.classList.add("expand");
  };

  const closeDropDown = () => {
    dropDownRef.current.classList.remove("expand");
  };
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>Hello there</div>;
  }
  return (

    <ThemeProvider theme={theme==="dark"?  darktheme:lighttheme}>
      <GlobalStyle />
      <NavigationWrap className={`nav-block ${scroll ? "scrolled" : ""}`}>
        <Container className="nav-container">
          <div className="navbar-wrap">
            <Link to="/" className="logo">
              <img src={layer5_logo} alt="Layer5 logo" />
            </Link>
            <nav className="nav">
              {expand ?
                <IoMdClose
                  className="mobile-menu-icon open"
                  onClick={function () {
                    setExpand(!expand); closeDropDown();
                  }}
                /> : <FaBars
                  className="mobile-menu-icon"
                  onClick={function () {
                    setExpand(!expand); openDropDown();
                  }}
                />
              }
              <div className="mobile-dropdown-container" ref={dropDownRef}>
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
                              {subItems.name === "Forum" ?
                                <a href={subItems.path} target="_blank" onClick={changeDropdownState} className="sub-menu-item" rel="noreferrer">
                                  {subItems.name}
                                </a>
                                : <Link to={subItems.path} onClick={changeDropdownState} className="sub-menu-item">{subItems.name}</Link>
                              }
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <ul>
                      <li className="mobile-nav-item">
                        <Link to="/cloud-native-management/meshmap" className="menu-item">MeshMap</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ScrollspyMenu
                className={`collapsed ${expand ? "is-expanded" : ""}`}
                menuItems={Data.menuItems}
                blogData={data}
              />
            </nav>

          </div>
          <div className="meshery-cta">
            <Button secondary className="banner-btn two" title="Goodbye, YAML" url="/cloud-native-management/meshmap" />
            <div className="dark-theme-toggle">
              <input id="toggle" className="toggle" type="checkbox" onChange={themeToggler} checked={!themeToggle} />
            </div>
          </div>

        </Container>

      </NavigationWrap>
    </ThemeProvider>
  );
};

export default Navigation;

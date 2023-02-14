import React, { useState, useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
import Button from "../../../reusecore/Button";
import { Container } from "../../../reusecore/Layout";
// import smp_dark_text from "../../../assets/images/service-mesh-performance/stacked/smp-dark-text.svg";
// import smp_light_text from "../../../assets/images/service-mesh-performance/stacked/smp-light-text.svg";
import meshmap_dark from "../../..//assets/images/meshmap/icon-only/meshmap-icon.svg";
import meshery from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import Data from "./utility/menu-items.js";
import ScrollspyMenu from "./utility/ScrollspyMenu.js";
import layer5_logo from "../../../assets/images/app/layer5.svg";
import layer5dark_logo from "../../../assets/images/layer5/layer5-only/svg/layer5-light-no-trim.svg";
import { darktheme } from "../../../theme/app/themeStyles";
import lighttheme from "../../../theme/app/themeStyles";
import NavigationWrap from "./navigation.style";
import { ThemeProvider } from "styled-components";
import { useLayoutEffect } from "react";

const Navigation = ({ theme, themeSetter }) => {
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
    filter: {fields: {collection: {eq: "events"}}, frontmatter: {published: {eq: true}}}
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
          slug: "/cloud-native-management/meshery"
        }
      },
      {
        frontmatter: {
          thumbnail: {
            img: meshmap_dark
          },
          title: "MeshMap, collaborative infrastructure management"
        },
        fields: {
          slug: "/cloud-native-management/meshmap"
        }
      }
    ]
  };
  const [expand, setExpand] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [themeToggle, setthemeToggle] = useState(false);
  const defaultTheme = "light";
  const handle = () => {
    theme === "dark" ? setthemeToggle(true) : setthemeToggle(false);

    localStorage.setItem("Theme", theme);

  };

  useLayoutEffect(() => {
    if (localStorage.getItem("Theme") === null) {
      themeSetter(defaultTheme);
    } else {
      themeSetter(localStorage.getItem("Theme"));
    }

  }, []);

  useLayoutEffect(() => {
    handle();
  }, [theme]);
  const themeToggler = () => {
    theme === "light" ? themeSetter("dark") : themeSetter("light");
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

  return (

    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <NavigationWrap className={`nav-block ${scroll ? "scrolled" : ""}`}>
        <Container className="nav-container">
          <div className="navbar-wrap">
            <Link to="/" className="logo">
              <img src={theme === "dark" ? layer5dark_logo : layer5_logo} alt="Layer5 logo" />
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
                        <Link to={menu.path} onClick={changeDropdownState} className="menu-item" activeClassName="nav-link-active">{menu.name}</Link>
                        <ul>
                          {menu.subItems !== undefined && menu.subItems.map((subItems, index) => (
                            <li
                              key={index}
                              className="mobile-nav-subitem"
                            >
                              {subItems.name === "Forum" ?
                                <a href={subItems.path} target="_blank" onClick={changeDropdownState} className="mobile-sub-menu-item" rel="noreferrer">
                                  {subItems.name}
                                </a>
                                : <Link to={subItems.path} onClick={changeDropdownState} className="mobile-sub-menu-item" activeClassName="nav-link-active">{subItems.name}</Link>
                              }
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <ul>
                      <li>
                        <Button id="get-started" secondary className="banner-btn two" title="Get Started" url="https://meshery.layer5.io/registration" />
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className="mobile-nav-item">
                        <a href="https://meshery.layer5.io/login" className="menu-item" activeClassName="nav-link-active">Login</a>
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
            <Button id="get-started-2" aria-label="Signup for Layer5 Cloud" secondary className="banner-btn two" external={true} title="Get Started" alt="Signup for Layer5 Cloud"  url="https://meshery.layer5.io/registration" />
            <Button id="login" aria-label="Login to Layer5 Cloud" secondary className="banner-btn login" external={true} title="Login" alt="Login for Layer5 Cloud"  url="https://meshery.layer5.io/login" />
            <div className="dark-theme-toggle">
              <input id="toggle" className="toggle" type="checkbox" aria-label="toggle-dark-mode" onChange={themeToggler} checked={!themeToggle} />
            </div>
          </div>

        </Container>

      </NavigationWrap>
    </ThemeProvider>
  );
};

export default Navigation;

import React, { useState, useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
import Button from "../../../reusecore/Button";
import { Container } from "../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";

// import smp_dark_text from "../../../assets/images/service-mesh-performance/stacked/smp-dark-text.svg";
// import smp_light_text from "../../../assets/images/service-mesh-performance/stacked/smp-light-text.svg";
import meshmap_dark from "../../..//assets/images/meshmap/icon-only/meshmap-icon.svg";
import meshery from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import Data from "./utility/menu-items.js";
import ScrollspyMenu from "./utility/ScrollspyMenu.js";
import { ReactComponent as Logo } from "../../../assets/images/app/layer5-colorMode.svg";

import NavigationWrap from "./navigation.style";

const Navigation = () => {

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
  data["Solutions"] = {
    nodes: []
  };
  const [expand, setExpand] = useState(false);
  const [scroll, setScroll] = useState(false);

  const { isDark, toggleDark } = useStyledDarkMode();
  const themeToggler = () => toggleDark();

  const dropDownRef = useRef();
  const navWrapRef = useRef();

  useEffect(() => {
    const outsideClickHandler = (e) => {
      if (expand && navWrapRef.current && !navWrapRef.current.contains(e.target)){
        setExpand(false);
        closeDropDown();
      }
    };

    expand && document.addEventListener("click", outsideClickHandler);
    return () => {
      document.removeEventListener("click", outsideClickHandler);
    };
  }, [expand]);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.pageYOffset > 50 ? setScroll(true) : setScroll(false)
    );
  }, []);

  const openDropDown = () => {
    dropDownRef.current.classList.add("expand");
  };

  const closeDropDown = () => {
    dropDownRef.current.classList.remove("expand");
  };

  const changeDropdownState = () => {
    setExpand(false);
    closeDropDown();
  };

  return (
    <NavigationWrap className={`nav-block ${scroll ? "scrolled" : ""}`} ref={navWrapRef}>
      <Container className="nav-container">
        <div className="navbar-wrap">
          <Link to="/" className="logo">
            <Logo />
          </Link>
          <nav className="nav">
            {expand ?
              <IoMdClose
                className="mobile-menu-icon open"
                onClick={function() {
                  setExpand(false); closeDropDown();
                }}
              /> : <FaBars
                className="mobile-menu-icon"
                onClick={function() {
                  setExpand(true); openDropDown();
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
            <input id="toggle" className="toggle" type="checkbox" aria-label="toggle-dark-mode" onChange={themeToggler} checked={!isDark} />
          </div>
        </div>

      </Container>

    </NavigationWrap>

  );
};

export default Navigation;

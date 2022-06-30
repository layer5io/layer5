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
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";
import { darktheme } from "../../../theme/app/themeStyles";
import  lighttheme from "../../../theme/app/themeStyles";
import NavigationWrap from "./navigation.style";
import { GlobalStyle } from "../../app.style";
import { ThemeProvider } from "styled-components";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { useLayoutEffect } from "react";
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff",
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff",
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));
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

  return (

    <ThemeProvider theme={theme==="dark"?  darktheme:lighttheme}>
      <GlobalStyle />
      <NavigationWrap className={`nav-block ${scroll ? "scrolled" : ""}`}>
        <Container className="nav-container">
          <div className="navbar-wrap">
            <Link to="/" className="logo">
              <img src={layer5_logo} alt="Layer5 logo" />
            </Link>
            <MaterialUISwitch sx={{ m: 1 }} onChange={themeToggler} checked={themeToggle}/>
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
          </div>
        </Container>
      </NavigationWrap>
    </ThemeProvider>
  );
};

export default Navigation;

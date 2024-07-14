import React, { useState, useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
import Button from "../../../reusecore/Button";
import { Container } from "../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";
import axios from "axios";
// import smp_dark_text from "../../../assets/images/service-mesh-performance/stacked/smp-dark-text.svg";
// import smp_light_text from "../../../assets/images/service-mesh-performance/stacked/smp-light-text.svg";
import meshmap_dark from "../../..//assets/images/meshmap/icon-only/meshmap-icon.svg";
import meshery from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import Data from "./utility/menu-items.js";
import ScrollspyMenu from "./utility/ScrollspyMenu.js";
import { ReactComponent as Logo } from "../../../assets/images/app/layer5-colorMode.svg";
import NavigationWrap from "./navigation.style";
import DefaultAvatar from "./utility/DefaultAvatar.js";
import CloudIcon from "./utility/CloudIcon.js";
import LogoutIcon from "./utility/LogoutIcon.js";
// import LogoutIcon from "./utility/LogoutIcon.js";
import MeshMapIcon from "./utility/MeshMapIcon.js";
const Navigation = () => {
  let data = useStaticQuery(
    graphql`
      {
        Learn: allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fields: { collection: { eq: "service-mesh-books" } } }
          limit: 2
        ) {
          nodes {
            id
            frontmatter {
              title
              thumbnail {
                childImageSharp {
                  gatsbyImageData(
                    width: 1050
                    height: 1360
                    layout: CONSTRAINED
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
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {
            fields: { collection: { eq: "events" } }
            frontmatter: { published: { eq: true } }
          }
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
                    transformOptions: { cropFocus: CENTER }
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
        Resources: allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {
            fields: { collection: { eq: "blog" } }
            frontmatter: { featured: { eq: true } }
          }
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
                    transformOptions: { cropFocus: CENTER }
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
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {
            fields: { collection: { eq: "projects" } }
            frontmatter: { published: { eq: true } }
          }
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
                    transformOptions: { cropFocus: CENTER }
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
  data["Products"] = {
    nodes: [
      {
        frontmatter: {
          thumbnail: {
            img: meshery,
          },
          title: "Meshery, the Cloud Native Manager",
        },
        fields: {
          slug: "/cloud-native-management/meshery",
        },
      },
      {
        frontmatter: {
          thumbnail: {
            img: meshmap_dark,
          },
          title: "MeshMap, collaborative infrastructure management",
        },
        fields: {
          slug: "/cloud-native-management/meshmap",
        },
      },
    ],
  };
  data["Solutions"] = {
    nodes: [],
  };
  const [expand, setExpand] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const { isDark, toggleDark } = useStyledDarkMode();
  const themeToggler = () => toggleDark();
  const [userData, setUserData] = useState(null);
  const dropDownRef = useRef();
  const navWrapRef = useRef();
  function getCookieValue(cookieName) {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim(); // Remove whitespace
      if (cookie.indexOf(cookieName + "=") === 0) {
        return cookie.substring(cookieName.length + 1);
      }
    }
    return null;
  }
  function removeCookie(cookieName) {
    document.cookie =
      cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
  useEffect(() => {
    const CLOUD_USER_API =
      "https://meshery.layer5.io/api/identity/users/profile";
    const fetchData = async () => {
      try {
        const token = getCookieValue("provider_token");
        const response = await axios.get(CLOUD_USER_API, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        const data = response.data;
        setUserData(data);
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const outsideClickHandler = (e) => {
      if (
        expand &&
        navWrapRef.current &&
        !navWrapRef.current.contains(e.target)
      ) {
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
    <NavigationWrap
      className={`nav-block ${scroll ? "scrolled" : ""}`}
      ref={navWrapRef}
    >
      <Container className="nav-container">
        <div className="navbar-wrap">
          <Link aria-label="layer5" to="/" className="logo">
            <Logo />
          </Link>
          <nav className="nav">
            {expand ? (
              <IoMdClose
                className="mobile-menu-icon open"
                onClick={function () {
                  setExpand(false);
                  closeDropDown();
                }}
              />
            ) : (
              <FaBars
                className="mobile-menu-icon"
                onClick={function () {
                  setExpand(true);
                  openDropDown();
                }}
              />
            )}
            <div className="mobile-dropdown-container" ref={dropDownRef}>
              <div className="mobile-dropdown">
                <ul className="mobile-collapsed">
                  {Data.menuItems.map((menu, index) => (
                    <li
                      key={index}
                      className={
                        menu.subItems !== undefined
                          ? "mobile-nav-item has-dropdown"
                          : "mobile-nav-item"
                      }
                    >
                      <Link
                        to={menu.path}
                        onClick={changeDropdownState}
                        className="menu-item"
                        activeClassName="nav-link-active"
                      >
                        {menu.name}
                      </Link>
                      <ul>
                        {menu.subItems !== undefined &&
                          menu.subItems.map((subItems, index) => {
                            return (
                              <li key={index} className="mobile-nav-subitem">
                                {subItems.externalLink ? (
                                  <a
                                    href={subItems.path}
                                    target="_blank"
                                    onClick={() => {
                                      changeDropdownState();
                                      closeDropDown();
                                    }}
                                    className="mobile-sub-menu-item"
                                    rel="noreferrer"
                                  >
                                    {subItems.name}
                                  </a>
                                ) : (
                                  <Link
                                    to={subItems.path}
                                    onClick={() => {
                                      changeDropdownState();
                                      closeDropDown();
                                    }}
                                    className="mobile-sub-menu-item"
                                    activeClassName="nav-link-active"
                                  >
                                    {subItems.name}
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                      </ul>
                    </li>
                  ))}
                </ul>
                {!userData && (
                  <div>
                    <ul>
                      <li>
                        <Button
                          id="get-started"
                          secondary
                          className="banner-btn two"
                          title="Get Started"
                          url="https://meshery.layer5.io/login"
                          external={true}
                        />
                      </li>
                    </ul>
                  </div>
                )}
                <div>
                  <ul>
                    <li className="mobile-nav-item">
                      {/* <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3pmcApaDP4xd8hvG5fy8ylxuFxD3akIRc5vpWJ60q-HemQi80SFFAVftbiIsq9pgiA2o8yvU56?gv=true" className="menu-item">Book Demo</a> */}
                      <a href="https://play.meshery.io" className="menu-item">
                        Playground
                      </a>
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
          {userData ? (
            <div className="dropDown">
              <button
                className="avatar-container"
                style={{
                  backgroundImage: `url(${userData.avatar_url})`,
                  backgroundSize: "cover",
                }}
                onClick={() => setDropDown((prev) => !prev)}
              >
                {!userData.avatar_url && (
                  <DefaultAvatar className="default_avatar" />
                )}
              </button>
              <div
                className={"dropDown-content"}
                style={{ display: `${dropDown ? "block" : "none"}` }}
              >
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="drop-item"
                  href={`https://meshery.layer5.io/user/${userData.id}`}
                >
                  <div className="drop-item-icon">
                    <CloudIcon />
                  </div>
                  Cloud
                </a>
                <a
                  rel="noreferrer"
                  className="drop-item"
                  href="https://playground.meshery.io"
                  target="_blank"
                >
                  <div className="drop-item-icon">
                    <MeshMapIcon />
                  </div>
                  Playground
                </a>
                <a
                  onClick={() => {
                    removeCookie("provider_token");
                    // Open logout API link in a new tab
                    window.open("https://meshery.layer5.io/logout", "_blank");

                    // Refresh the current page
                    window.location.reload();
                  }}
                  rel="noreferrer"
                  className="drop-item"
                >
                  <div className="drop-item-icon">
                    <LogoutIcon />
                  </div>
                  Logout
                </a>
              </div>
            </div>
          ) : (
            <Button
              id="get-started-2"
              aria-label="Signup for Layer5 Cloud"
              secondary
              className="banner-btn two"
              external={true}
              title="Get Started"
              alt="Signup for Layer5 Cloud"
              url="https://meshery.layer5.io/registration"
            />
          )}
          {/* <Button id="book-a-demo" aria-label="Book a demo" secondary className="banner-btn book-a-demo" external={true} title="Book a demo" alt="Book a demo" url="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3pmcApaDP4xd8hvG5fy8ylxuFxD3akIRc5vpWJ60q-HemQi80SFFAVftbiIsq9pgiA2o8yvU56?gv=true" /> */}
          {!userData && (
            <Button
              id="book-a-demo"
              aria-label="Meshery Playground"
              secondary
              className="banner-btn book-a-demo"
              external={true}
              title="Playground"
              alt="Meshery Playground"
              url="https://playground.meshery.io"
            />
          )}
          <div className="dark-theme-toggle">
            <input
              id="toggle"
              className="toggle"
              type="checkbox"
              aria-label="toggle-dark-mode"
              onChange={themeToggler}
              checked={!isDark}
            />
          </div>
        </div>
      </Container>
    </NavigationWrap>
  );
};

export default Navigation;

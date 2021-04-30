import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { Container } from "../../../reusecore/Layout";
import layer5_logo from "../../../assets/images/app/layer5.svg";
import Button from "../../../reusecore/Button";
import NavigationWrapper from "./navigation.style";

const Navigation = () => {

  const [expand, setExpand] = useState(false);
  const [scroll, setScroll] = useState(false);
  const dropDownRef = useRef();
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

  return (
    <NavigationWrapper className={`${scroll ? "scrolled" : ""}`}>
      <Container>
        <div className="navbar-wrap">
          <Link to="/learn-ng" className="logo">
            <img src={layer5_logo} alt="Layer5 logo" />
            <h2 className="logo-header">Learn</h2>
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
            <div className="nav-menu nav-mobile-menu" ref={dropDownRef}>
              <ul className="nav-menu-items nav-mobile-menu-items">
                <li>
                  <Link to={"/learn-ng/courses"} className="menu-item">Courses</Link>
                </li>
                <li>
                  <Link to={"/learn-ng/labs"} className="menu-item">Labs</Link>
                </li>
                <li>
                  <Link to={"/learn-ng/workshops"} className="menu-item">Workshops</Link>
                </li>
                <li className="sign-in-btn-mobile">
                  <Button title="Sign In"/>
                </li>
              </ul>
            </div>
          </nav>
          <Button title="Sign In" className="sign-in-btn"/>
        </div>
      </Container>
    </NavigationWrapper>
  );
};

export default Navigation;

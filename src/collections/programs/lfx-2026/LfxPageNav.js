import React, { useEffect, useState } from "react";
import { ArrowUpwardIcon } from "@sistent/sistent";
import styled from "styled-components";
import { LFX_SCROLL_OFFSET } from "../Programs.style.js";

const NavCard = styled.nav`
  position: sticky;
  top: 10rem;
  flex: 0 0 250px;
  width: 250px;
  height: fit-content;
  background: ${(props) => props.theme.grey1D1D1DToGreyFAFAFA};
  border: 1px solid ${(props) => props.theme.grey1D1817ToGreyE6E6E6};
  border-radius: 7px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 99;
  @media (max-width: 900px) {
    display: none;
  }
`;

const NavTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.whiteToBlack};
  margin-bottom: 0.5rem;
`;

const NavList = styled.ul`
  list-style: none !important;
  margin: 0;
  padding-left: 1rem;
  li {
    list-style: none !important;
    margin-bottom: 0.5rem;
  }
  li a {
    display: block;
    font-size: 0.875rem;
    color: ${(props) => props.theme.whiteToBlack};
    text-decoration: none;
    &:hover {
      color: #00b39f;
      text-decoration: underline;
    }
  }
  li a.active {
    color: #00b39f;
    font-weight: 600;
  }
`;

const BackToTopBtn = styled.button`
  position: fixed;
  bottom: ${(props) => (props.visible ? "20px" : "-80px")};
  right: 30px;
  z-index: 999;
  background: #00b39f;
  color: white;
  border: none;
  border-radius: 50%;
  width: 55.5px;
  height: 55.5px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: bottom 0.2s;
  &:hover {
    background: #00d3a9;
  }
`;

const LfxPageNav = ({ items }) => {
  const [showTop, setShowTop] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      setShowTop(scrolled >= total - 100);

      let current = "";
      items.forEach((item) => {
        const el = document.querySelector(item.href);
        if (el && window.scrollY >= el.offsetTop - LFX_SCROLL_OFFSET) {
          current = item.href;
        }
      });
      setActiveHref(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  const handleNavClick = (e, href) => {
    // Let browser handle modifier-key clicks (Ctrl/Cmd = new tab, Alt = save, Shift = new window).
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button !== 0)
      return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Avoid pushing a duplicate history entry when the hash is already current.
      if (window.location.hash !== href) {
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <>
      <NavCard>
        <NavTitle>On this page</NavTitle>
        <NavList>
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeHref === item.href ? "active" : ""}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </NavList>
      </NavCard>
      <BackToTopBtn
        visible={showTop}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUpwardIcon style={{ fontSize: "1.2rem", fill: "white" }} />
      </BackToTopBtn>
    </>
  );
};

export default LfxPageNav;

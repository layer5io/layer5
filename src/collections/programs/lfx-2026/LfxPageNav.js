import React, { useEffect, useRef, useState } from "react";
import { ArrowUpwardIcon } from "@sistent/sistent";
import styled from "styled-components";

const NavCard = styled.div`
  position: fixed;
  top: 160px;
  right: 24px;
  width: 220px;
  background: ${(props) => props.theme.grey1D1D1DToGreyFAFAFA};
  border: 1px solid ${(props) => props.theme.grey1D1817ToGreyE6E6E6};
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  padding: 16px 0 12px 0;
  z-index: 999;
  @media (max-width: 1500px) {
    display: none;
  }
`;

const NavTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${(props) => props.theme.whiteToBlack};
  padding: 0 16px 10px 16px;
  border-bottom: 1px solid ${(props) => props.theme.grey1D1817ToGreyE6E6E6};
  margin-bottom: 6px;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li a {
    display: block;
    padding: 6px 16px;
    font-size: 0.875rem;
    color: ${(props) => props.theme.whiteToBlack};
    text-decoration: none;
    border-left: 2px solid transparent;
    transition: all 0.15s ease;
    &:hover {
      color: #00b39f;
      border-left: 2px solid #00b39f;
      background: #00b39f11;
    }
  }
  li a.active {
    color: #00b39f;
    border-left: 2px solid #00b39f;
    font-weight: 600;
  }
`;

const BackToTopBtn = styled.button`
  position: fixed;
  bottom: 32px;
  right: 24px;
  z-index: 999;
  background: #00b39f;
  color: white;
  border: none;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
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

      // Highlight active section
      let current = "";
      items.forEach((item) => {
        const el = document.querySelector(item.href);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = item.href;
        }
      });
      setActiveHref(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <>
      <NavCard>
        <NavTitle>On this page</NavTitle>
        <NavList>
          {items.map((item) => (
            <li key={item.href}>
              
                href={item.href}
                className={activeHref === item.href ? "active" : ""}
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
        <ArrowUpwardIcon style={{ fontSize: "1rem", fill: "white" }} />
      </BackToTopBtn>
    </>
  );
};

export default LfxPageNav;

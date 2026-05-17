import React, { useState, useEffect, useRef } from "react";
import { ArrowUpwardIcon } from "@sistent/sistent";
import styled from "styled-components";

const NavWrapper = styled.div`
  position: fixed;
  top: 160px;
  right: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 999;
  @media (max-width: 1500px) {
    display: none;
  }
`;

const DropdownToggle = styled.button`
  background: #00b39f;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  &:hover {
    background: #00d3a9;
  }
  span {
    transition: transform 0.2s;
    display: inline-block;
    transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  right: 0;
  list-style: none;
  margin: 6px 0 0 0;
  padding: 8px 0;
  background: ${(props) => props.theme.grey1D1D1DToGreyFAFAFA};
  border: 1px solid ${(props) => props.theme.grey1D1817ToGreyE6E6E6};
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  min-width: 220px;
  display: ${(props) => (props.open ? "block" : "none")};
  li a {
    display: block;
    padding: 8px 24px 8px 32px;
    font-size: 0.875rem;
    color: ${(props) => props.theme.whiteToBlack};
    text-decoration: none;
    &:hover {
      background: #00b39f22;
      color: #00b39f;
    }
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
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      setShowTop(scrolled >= total - 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <NavWrapper ref={navRef}>
        <DropdownToggle open={open} onClick={() => setOpen((o) => !o)}>
          On this page <span>&#9662;</span>
        </DropdownToggle>
        <DropdownMenu open={open}>
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </DropdownMenu>
      </NavWrapper>

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

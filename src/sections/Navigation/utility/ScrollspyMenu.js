import React, { useState, useRef } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";
import Card from "./Card";
import { IoIosArrowRoundForward } from "react-icons/io";

const ScrollspyMenu = ({ menuItems, ...props }) => {
  const addAllClasses = [""];

  const [state, setState] = useState({
    active: menuItems[4]
  });

  const wrapRef = useRef(null);

  let handleMouseEnter = (index) => {
    setState({
      active: menuItems[index]
    });
  };

  if (props.className) {
    addAllClasses.push(props.className);
  }

  let wrapDisplay = () => {
    if (wrapRef.current) {
      wrapRef.current.style.display = "block";
    }
  };

  let wrapNone = () => {
    if (wrapRef.current) {
      wrapRef.current.style.display = "none";
    }
  };

  const { active } = state;
  const blogData = props.blogData;

  return (
    <ul className={addAllClasses.join(" ")} onMouseEnter={wrapDisplay} onMouseLeave={wrapNone}>
      {menuItems.map((menu, index) => (
        <li
          key={index}
          className={
            menu.subItems !== undefined ? "nav-item has-dropdown" : "nav-item"
          }
          onMouseEnter={() => handleMouseEnter(index)}
        >
          <AnchorLink to={menu.path} className="menu-link">
            <span>
              {menu.name}
            </span>
          </AnchorLink>
        </li>
      ))}
      {active.subItems !== undefined && (
        <React.Fragment>
          <ul className="dropdown" style={{ zIndex: "101" }}>
            <div className="nav-grid">
              <div className="hr">
                <Link className="section" to={active.path}  >{active.name}
                </Link>
                {active.subItems.map((subItem, i) => (
                  <li key={i}>
                    <Link to={subItem.path} partiallyActive={true} className={subItem.sepLine && "sub-item"}>
                      {subItem.name}
                    </Link>
                  </li>
                ))}
                <div className="action-items">
                  {active.actionItems.map((actionItem, i) => (
                    <Link key={i} to={actionItem.actionLink} partiallyActive={true} className="action-link">
                      <span className="readmore-btn">
                        {actionItem.actionName} <IoIosArrowRoundForward />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="nav-display">
                <Card frontmatter={blogData[active.name].nodes[0].frontmatter} fields={blogData[active.name].nodes[0].fields}></Card>
                <Card frontmatter={blogData[active.name].nodes[1].frontmatter} fields={blogData[active.name].nodes[1].fields}></Card>
              </div>
            </div>
          </ul>
          <div className="wrap" ref={wrapRef} style={{ zIndex: "100" }} />
        </React.Fragment>
      )}
    </ul>
  );
};

export default ScrollspyMenu;

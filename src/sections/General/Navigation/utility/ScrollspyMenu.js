import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import Card from "./Card";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";

const ScrollspyMenu = ({ menuItems, ...props }) => {
  const addAllClasses = [""];

  const [state, setState] = useState({
    active: menuItems[0]
  });

  const wrapRef = useRef(null);

  const handleMouseOver = (index) => {
    setState({
      active: menuItems[index]
    });
  };

  if (props.className) {
    addAllClasses.push(props.className);
  }

  const wrapDisplay = () => {
    if (wrapRef.current) {
      wrapRef.current.style.display = "block";
    }
  };

  const wrapNone = () => {
    if (wrapRef.current) {
      wrapRef.current.style.display = "none";
    }
  };

  const { active } = state;
  const blogData = props.blogData;

  return (
    <ul className={addAllClasses.join(" ")} onMouseOver={wrapDisplay} onMouseOut={wrapNone}>
      {menuItems.map((menu, index) => (
        <li
          key={index}
          className={
            menu.subItems !== undefined ? "nav-item has-dropdown" : "nav-item"
          }
          onMouseOver={() => handleMouseOver(index)}
        >
          <Link to={menu.path} className="menu-link" activeClassName="nav-link-active">
            <span>
              {menu.name}
            </span>
          </Link>
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
                    { subItem.name === "Forum" ?
                      <a href={subItem.path} target="_blank" className="sub-item" rel="noreferrer">
                        {subItem.name}
                      </a>
                      : <Link to={subItem.path} partiallyActive={true} className={subItem.sepLine && "sub-item"}>
                        {subItem.name}
                      </Link>
                    }
                  </li>
                ))}
                <div className="action-items">
                  {active.actionItems.map((actionItem, i) => (
                    ( actionItem.actionName === "Join the discussion" ?
                      <a href={actionItem.actionLink} target="_blank" className="action-link" rel="noreferrer">
                        <span className="readmore-btn">
                          {actionItem.actionName} <IoIosArrowRoundForward />
                        </span>
                      </a>
                      : (<Link key={i} to={actionItem.actionLink} partiallyActive={true} className="action-link">
                        <span className="readmore-btn">
                          {actionItem.actionName} <IoIosArrowRoundForward />
                        </span>
                      </Link>
                      )
                    )
                  ))}
                </div>
              </div>
              <div className="nav-display">
                <Card frontmatter={blogData[active.name].nodes[0].frontmatter} fields={blogData[active.name].nodes[0].fields}/>
                <Card frontmatter={blogData[active.name].nodes[1].frontmatter} fields={blogData[active.name].nodes[1].fields}/>
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
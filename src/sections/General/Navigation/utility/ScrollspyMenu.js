import React, { useState } from "react";
import { Link } from "gatsby";
import Card from "./Card";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";
import loadable from "@loadable/component";
const KanvasCard = loadable(() => import("./KanvasCard"));

const ScrollspyMenu = ({ menuItems, ...props }) => {
  const { blogData, className } = props;

  const addAllClasses = className ? [className] : [""];
  const [activeState, setActiveState] = useState(null);

  const [isWrapVisible, setIsWrapperVisible] = useState(false);

  const handleMouseOver = (index) => {
    setActiveState(menuItems[index]);
  };

  const wrapDisplay = () => {
    setIsWrapperVisible(true);
  };

  const wrapNone = () => {
    setIsWrapperVisible(false);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
    setIsWrapperVisible(false);
    setActiveState(null);
  };

  return (
    <ul className={addAllClasses.join(" ")} onMouseEnter={wrapDisplay} onMouseLeave={wrapNone}>
      {menuItems.map((menu, index) => (
        <li
          key={index}
          className={
            menu.subItems ? "nav-item has-dropdown" : "nav-item"
          }
          onMouseOver={() => handleMouseOver(index)}
        >
          <Link
            to={menu.path}
            className="menu-link"
            activeClassName="nav-link-active"
            onClick={handleLinkClick}
          >
            <span>
              {menu.name}
            </span>
          </Link>
        </li>
      ))}
      {activeState?.subItems && (
        <React.Fragment>
          <ul className="dropdown" style={{ zIndex: "101" }}>
            <div className="nav-grid">
              <div className="hr">
                <Link
                  className="section"
                  to={activeState.path}
                  activeClassName="nav-link-active"
                  onClick={handleLinkClick}
                >
                  {activeState.name}
                </Link>
                {activeState.subItems.map((subItem, i) => {
                  return (
                    <li key={i}>
                      {subItem.externalLink ?
                        <a
                          href={subItem.path}
                          target="_blank"
                          className={subItem.sepLine && "sub-item"}
                          rel="noreferrer"
                          onClick={handleLinkClick}
                        >
                          {subItem.name}
                        </a>
                        : <Link
                          to={subItem.path}
                          partiallyActive={false}
                          className={subItem.sepLine && "sub-item"}
                          activeClassName="nav-link-active"
                          onClick={handleLinkClick}
                        >
                          {subItem.name}
                        </Link>
                      }
                    </li>
                  );
                })}
                <div className="action-items">
                  {activeState.actionItems.map((actionItem, i) => (
                    (actionItem.actionName === "Join the discussion" ?
                      <a
                        key={i}
                        href={actionItem.actionLink}
                        target="_blank"
                        className="action-link"
                        rel="noreferrer"
                        onClick={handleLinkClick}
                      >
                        <span className="readmore-btn">
                          {actionItem.actionName} <IoIosArrowRoundForward />
                        </span>
                      </a>
                      : <Link
                        key={i}
                        to={actionItem.actionLink}
                        partiallyActive={true}
                        className="action-link"
                        onClick={handleLinkClick}
                      >
                        <span className="readmore-btn">
                          {actionItem.actionName} <IoIosArrowRoundForward />
                        </span>
                      </Link>
                    )
                  )
                  )}
                </div>
              </div>
              {blogData[activeState.name].nodes.length !== 0 ? (
                <div className="nav-display">
                  <Card frontmatter={blogData[activeState.name].nodes[0].frontmatter} fields={blogData[activeState.name].nodes[0].fields} />
                  <Card frontmatter={blogData[activeState.name].nodes[1].frontmatter} fields={blogData[activeState.name].nodes[1].fields} />
                </div>) : (
                <Link
                  to="/cloud-native-management/kanvas"
                  onClick={handleLinkClick}
                >
                  <div className="single-card">
                    <KanvasCard />
                    <div className="card-text">
                      <p>Kanvas</p>
                      <h6>Stop finger-pointing.</h6>
                      <h6>Start collaborating.</h6>
                    </div>
                  </div>
                </Link>)
              }
            </div>
          </ul>
          {isWrapVisible && <div className="wrap" style={{ zIndex: "100", display: isWrapVisible ? "block" : "none" }} />}
        </React.Fragment>
      )}
    </ul>
  );
};

export default ScrollspyMenu;

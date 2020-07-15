import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

const ScrollspyMenu = ({ menuItems, ...props }) => {
  const addAllClasses = [""];
  if (props.className) {
    addAllClasses.push(props.className);
  }
  return (
    <ul className={addAllClasses.join(" ")}>
      {menuItems.map((menu, index) => (
        <li
          key={index}
          className={
            menu.subItems !== undefined ? "nav-item has-dropdown" : "nav-item"
          }
        >
         
            <AnchorLink
                to={menu.path}
                >
                {menu.name}
            </AnchorLink>
          {menu.subItems !== undefined && (
            <ul key={index} className="dropdown">
              {menu.subItems.map((subItem, i) => (
                <li key={i}>
                  <Link
                        to={subItem.path}
                        partiallyActive={true}
                    >
                        {subItem.name}
                    </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ScrollspyMenu;

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
                    <AnchorLink to={menu.path}>{menu.name}</AnchorLink>
                    {menu.subItems !== undefined && (
                        <ul key={index} className="dropdown">
                            {menu.name}
                            <div className="nav-grid">
                                <div className="hr">
                                    {menu.subItems.map((subItem, i) => (
                                        <li key={i}>
                                            <Link to={subItem.path} partiallyActive={true}>
                                                {subItem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </div>
                                <div className="nav-display">
                                    <div className="nav-div">
                                        <a href={menu.div1.path}><img src={menu.div1.src} className="nav-img" /></a>
                                        <div> {menu.div1.descr} </div>
                                    </div>
                                    <div className="nav-div">
                                        <a href={menu.div2.path}><img src={menu.div2.src} className="nav-img" /></a>
                                        <div> {menu.div2.descr} </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default ScrollspyMenu;

import React, { useState } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";
import Icon from "../../../assets/images/app/projects/arrow.svg";

const ScrollspyMenu = ({ menuItems, ...props }) => {
    const addAllClasses = [""];

    const [active, setActive] = useState(menuItems[0]);

    let handleMouseHover = (index) => {
        if (active === menuItems[index]) return;
        setActive(menuItems[index]);
    };
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
                    onMouseOver={() => handleMouseHover(index)}
                >
                    <AnchorLink to={menu.path}>{menu.name}</AnchorLink>
                </li>
            ))}
            <div className="fakediv">
                {active.subItems !== undefined && (
                    <ul className="dropdown">
                        {active.name}
                        <div className="nav-grid">
                            <div className="hr">
                                {active.subItems.map((subItem, i) => (
                                    <li key={i}>
                                        <Link to={subItem.path} partiallyActive={true} className={subItem.sepLine && "sub-item"}>
                                            {subItem.name}
                                        </Link>
                                    </li>
                                ))}
                                <div className="action-item">
                                    <Link to={active.actionLink}>
                                        <span>{active.actionName}</span>
                                        <img src={Icon} alt="appion app" />
                                    </Link>
                                </div>
                            </div>
                            <div className="nav-display">
                                <div className="nav-div">
                                    <a href={active.div1.path}><img src={active.div1.src} className="nav-img" /></a>
                                    <div> {active.div1.descr} </div>
                                </div>
                                <div className="nav-div">
                                    <a href={active.div2.path}><img src={active.div2.src} className="nav-img" /></a>
                                    <div> {active.div2.descr} </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                )}
            </div>
        </ul>
    );
};

export default ScrollspyMenu;

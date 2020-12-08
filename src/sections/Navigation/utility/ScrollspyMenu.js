import React, { useState } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";
import Icon from "../../../assets/images/app/projects/arrow.svg";
import Card from "./Card";

const ScrollspyMenu = ({ menuItems, ...props }) => {
    const addAllClasses = [""];

    const [state, setState] = useState({
        active: menuItems[5]
    });

    let handleMouseEnter = (index) => {
        setState({
            active: menuItems[index]
        });
    };

    if (props.className) {
        addAllClasses.push(props.className);
    }

    const { active } = state;
    const blogData = props.blogData;

    return (
        <ul className={addAllClasses.join(" ")}>
            <span className="margin-space first"></span>
            {menuItems.map((menu, index) => (
                <li
                    key={index}
                    className={
                        menu.subItems !== undefined ? "nav-item has-dropdown" : "nav-item"
                    }
                    onMouseEnter={() => handleMouseEnter(index)}
                >
                    <AnchorLink to={menu.path}>{menu.name}</AnchorLink>
                </li>
            ))}
            <span className="margin-space second"></span>
            <div className="dropdown-container">
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
                                <Card frontmatter={blogData[active.name].nodes[0].frontmatter} fields={blogData[active.name].nodes[0].fields}></Card>
                                <Card frontmatter={blogData[active.name].nodes[1].frontmatter} fields={blogData[active.name].nodes[1].fields}></Card>
                            </div>
                        </div>
                    </ul>
                )}
            </div>
        </ul>
    );
};

export default ScrollspyMenu;

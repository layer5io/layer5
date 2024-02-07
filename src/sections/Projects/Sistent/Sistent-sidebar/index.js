import React, { useState } from "react";
import { Link } from "gatsby";
import slugify from "../../../../utils/slugify";

import SistentSidebarWrapper from "./sidebar.style";
import { HiOutlineChevronUp } from "@react-icons/all-files/hi/HiOutlineChevronUp";
import { HiOutlineChevronDown } from "@react-icons/all-files/hi/HiOutlineChevronDown";

const Sidebar = () => {
  const [showIdentity, setShowIdentity] = useState(true);

  return (
    <SistentSidebarWrapper>
      <div className="sidebar-widgets catagorie">
        <div className="widgets-title">
          <h3>About Sistent</h3>
        </div>
      </div>
      <div className="sidebar-widgets catagorie">
        <div
          className="widgets-title"
          onClick={() => setShowIdentity((value) => !value)}
        >
          <h3>Identity</h3>
          {!showIdentity ? (
            <HiOutlineChevronDown className="menu-icon" />
          ) : (
            <HiOutlineChevronUp className="menu-icon" />
          )}
        </div>
        <ul className={`${!showIdentity ? "ul-close" : "scroll"}`}>
          {["Color", "Typography", "Spacing", "Page Layouts", "Elevation"].map(
            (item) => (
              <li key={item}>
                <Link
                  to={`/projects/sistent/${slugify(item)}`}
                  activeStyle={{ color: "#00b39f" }}
                >
                  <span>{item}</span>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="sidebar-widgets catagorie">
        <div className="widgets-title">
          <h3>Component</h3>
        </div>
      </div>
      <div className="sidebar-widgets catagorie">
        <div className="widgets-title">
          <h3>Pattern & Templates</h3>
        </div>
      </div>
      <div className="sidebar-widgets catagorie">
        <div className="widgets-title">
          <h3>Visualization & Illustration</h3>
        </div>
      </div>
    </SistentSidebarWrapper>
  );
};

export default Sidebar;

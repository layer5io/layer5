/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import ScrollToTopBtn from "./Scrolltotop-button";

const Layout = ({ children }) => {

  return (
    <>
      {children}
      <ScrollToTopBtn />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
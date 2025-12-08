/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// added GlobalStyle in Layout as recommended: https://www.gatsbyjs.com/docs/how-to/styling/global-css/

import React from "react";
import PropTypes from "prop-types";
import { Slice } from "gatsby";
import ScrollToTopBtn from "./Scrolltotop-button";
// import TopPromotionalBanner from "./TopPromotionalBanner";
import { GlobalStyle } from "../sections/app.style";

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      {/* <TopPromotionalBanner /> */}
      <Slice alias="site-header" />
      {children}
      <ScrollToTopBtn />
      <Slice alias="site-footer" />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

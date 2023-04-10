/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// added GlobalStyle in Layout as recommended: https://www.gatsbyjs.com/docs/how-to/styling/global-css/

import React from "react";
import PropTypes from "prop-types";
import ScrollToTopBtn from "./Scrolltotop-button";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";

const Layout = ({ children }) => {

  return (
    <>
      <Navigation/>
      {children}
      <ScrollToTopBtn />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;